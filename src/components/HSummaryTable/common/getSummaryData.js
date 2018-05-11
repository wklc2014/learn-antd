/**
 * 获取汇总表格数据
 * 包括汇总[total]和计算[render]
 */
import is from 'is_js';
import lodash from 'lodash';

export default function getSummaryData(configs = [], dataSource = [], precision = 2, key = 'summary') {

  // 保存汇总行数据
  const summary_line = {};

  // 新的数据源
  const new_dataSource = [...dataSource];

  configs.forEach(val => {
    const { extMap = {}, config = {} } = val || {};
    const { id } = config;

    new_dataSource.forEach((data) => {

      // 计算行
      if (extMap.render) {
        try {
          // eslint-disable-next-line
          const num = new Function('data', extMap.render)(data);
          if (is.not.nan(num)) {
            data[id] = lodash.round(parseFloat(num), precision);
          }
        } catch (e) {
        }
      }

      // 汇总列
      if (extMap.total) {
        if (summary_line[id] === undefined) {
          summary_line[id] = 0;
        }
        const parseData = parseFloat(data[id]);
        if (is.not.nan(parseData)) {
          summary_line[id] += parseData;
        }
      }

    });

  })

  // 汇总列精度计算
  Object.keys(summary_line).forEach((id) => {
    summary_line[id] = lodash.round(summary_line[id], precision);
  })

  return [...new_dataSource, { key, ...summary_line }]
}
