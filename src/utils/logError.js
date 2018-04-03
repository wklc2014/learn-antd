/**
 * 前端错误日志
 */

export default function logError(errorTexts, errorType) {
  throw TypeError(errorTexts);
}