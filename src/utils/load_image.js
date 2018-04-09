// 异步加载图片
/**
 * 异步加载图片
 * @param  {string} url 图片地址
 */
export default function loadImage(url) {
  return new Promise(function(resolve, reject) {
    var image = new Image();
    image.onload = function() {
      resolve(image);
    };
    image.onerror = function(err) {
      reject(`图片加载错误`);
    };
    image.src = url;
  });
}