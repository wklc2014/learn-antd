// 前端 ajax 请求出错时，自定义返回

export default function ajaxErrorResponse(errors, success = false) {
  let message;
  try {
    message = errors.toString();
  } catch (e) {
    message = `ajaxErrorResponse ${errors}`;
  }

  return { success, message }
}