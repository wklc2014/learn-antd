// 前端 ajax 请求出错时，自定义返回

export default function ajaxErrorResponse(errors, stat = 'error') {
  let msg;
  try {
    msg = errors.toString();
  } catch (e) {
    msg = `ajaxErrorResponse ${errors}`;
  }

  return { stat, msg }
}