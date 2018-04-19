/**
 * 获取汇总表格数据
 * 包括汇总[total]和计算[render]
 */
import is from 'is_js';
import lodash from 'lodash';

export default function getSummaryData(configs = [], dataSource = []) {

  const summaryLine = {};
  const newDataSource = [...dataSource];

  configs.forEach(val => {
    const { config = {}, tableParams = {} } = val || {};
    const { id } = config;

    newDataSource.forEach((data) => {

      // 汇总列
      if (tableParams.total) {
        if (summaryLine[id] === undefined) {
          summaryLine[id] = 0;
        }
        const parseData = parseFloat(data[id]);
        if (is.not.nan(parseData)) {
          summaryLine[id] += parseData
        }
      }

      // 计算行
      if (tableParams.render) {
        try {
          // eslint-disable-next-line
          const num = new Function('data', tableParams.render)(data);
          data[id] = parseFloat(num).toFixed(2);
          data[id] = lodash.round(parseFloat(num));
        } catch (e) {
        }
      }

    });

  })

  Object.keys(summaryLine).forEach((id) => {
    summaryLine[id] = lodash.round(summaryLine[id], 2);
  })

  return [...newDataSource, { key: 'ts', ...summaryLine }]
}