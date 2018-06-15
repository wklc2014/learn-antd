/**
 * 获取项目工程里的图片
 */
const fs = require('fs');

export default function readFileList(path) {
  const files = fs.readdirSync(path);
  const filesList = [];
  files.forEach(function (itm, index) {
    const stat = fs.statSync(path + itm);
    if (!stat.isDirectory()) {
      // 仅读取文件
      const data = require('../' + path + itm);
      const { mock, open, url } = data;
      if (mock && (open === undefined || open) && url) {
        filesList.push({ mock, url });
      }
    }
  })
  return filesList;
}
