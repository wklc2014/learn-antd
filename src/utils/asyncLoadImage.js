/**
 * 异步加载图片
 * @param  {string} url 待加载的图片地址
 * @return {promise}
 */
export default function asyncLoadImage(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image();

    image.onload = function() {
      resolve(image);
    };

    image.onerror = function(err) {
      reject(`图片加载错误: ${err}，图片地址为: ${url}`);
    };

    image.src = url;

  });
}
