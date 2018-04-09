/**
 * 前端错误日志
 */

export default function errorLog(errorTexts, errorType) {
  throw TypeError(errorTexts);
}