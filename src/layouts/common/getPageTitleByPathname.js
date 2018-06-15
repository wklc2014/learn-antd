/**
 * 通过路由名称获取路由页面标题
 */

export default function getPageTitleByPathname(pathname) {
  switch (pathname) {
    case '/example':
      return 'example - 理赔天平';
    case '/':
    default:
      return '理赔天平';
  }
}
