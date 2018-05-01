/**
 * 获取汇总表格数据
 * 包括汇总[total]和计算[render]
 */
import is from 'is_js';
import lodash from 'lodash';

export default function getSummaryData(configs = [], dataSource = [], precision = 2, key = 'summary') {

  const summaryLine = {};
  const newDataSource = [...dataSource];

  configs.forEach(val => {
    const { id, params = {} } = val || {};

    newDataSource.forEach((data) => {

      // 计算行
      if (params.render) {
        try {
          // eslint-disable-next-line
          const num = new Function('data', params.render)(data);
          if (is.not.nan(num)) {
            data[id] = lodash.round(parseFloat(num), precision);
          }
        } catch (e) {
        }
      }

      // 汇总列
      if (params.total) {
        if (summaryLine[id] === undefined) {
          summaryLine[id] = 0;
        }
        const parseData = parseFloat(data[id]);
        if (is.not.nan(parseData)) {
          summaryLine[id] += parseData;
        }
      }

    });

  })

  // 汇总列精度计算
  Object.keys(summaryLine).forEach((id) => {
    summaryLine[id] = lodash.round(summaryLine[id], precision);
  })

  return [...newDataSource, { key, ...summaryLine }]
}
