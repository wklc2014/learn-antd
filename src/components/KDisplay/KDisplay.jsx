/**
 * 根据条件渲染第一个或剩下的子元素
 * condition = true 渲染第一个子元素
 * condition = false 渲染剩下的子元素
 * @param {boolean} options.condition 渲染条件
 * @param {ReactNode} options.children  渲染元素
 */
import React from 'react';

export default function KDisplay({ condition, children }) {
  // 将组件子元素转换为数组
  const childrenArray = React.Children.toArray(children);

  // 将子元素分为第一个元素和剩下的元素
  const [item, ...resetItem] = childrenArray;
  if (condition) {
    return item;
  }
  return resetItem;
}
