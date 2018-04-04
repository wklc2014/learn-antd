/**
 * 对配置排序
 * @param  {Boolean} isSort     是否对配置数组排序
 * @param  {Array}   configs    待排序的配置数组
 * @return {Array}              排序后的配置数组
 */
export default function getSortedConfigs(isSort = false, configs = []) {
  if (!isSort) {
    return configs;
  }

  return configs.sort((m, n) => {
    if (m.order > n.order) {
      return 1;
    } else if (m.order < n.order) {
      return -1;
    } else {
      return 0;
    }
  })

}