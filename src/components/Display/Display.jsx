/**
 * 根据条件渲染第一个或第二个子元素
 * condition = true 渲染第一个子元素
 * condition = false 渲染第二个子元素
 * @param {boolean} options.condition 渲染条件
 * @param {ReactNode} options.children  渲染元素
 */

export default function Display({ condition, children }) {
  if (condition) {
    return children[0];
  }
  return children[1];
}
