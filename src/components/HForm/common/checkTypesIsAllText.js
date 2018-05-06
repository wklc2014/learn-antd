/**
 * 检查 配置数组中的配置类型是否都是 text 类型
 */
import is from 'is_js';

export default function checkTypesIsAllText(configs = []) {
  const notAllText = configs.some(val => {
    const { config } = val;
    if (is.array(config)) {
      return config.some(v => v.type !== 'text');
    } else {
      return config.type !== 'text';
    }
  })
  return !notAllText;
}