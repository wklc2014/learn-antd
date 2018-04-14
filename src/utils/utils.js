import { message } from 'antd';

export default {
  // 前端错误日志
  errorLogs: ({ errorType, errorTexts }) => {
    throw TypeError(errorTexts);
  },
  // 异步加载图片
  asyncLoadImage: (url) => {
    return new Promise(function(resolve, reject) {
      var image = new Image();
      image.onload = function() {
        resolve(image);
      };
      image.onerror = function(err) {
        reject(`图片加载错误，图片地址为${url}`);
      };
      image.src = url;
    });
  },
  // 前端提示信息
  messageTips: (tipType, tipText = '错误信息') => {
    message.info(tipText);
  }
}