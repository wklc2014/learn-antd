/**
 * 自定义表单验证
 */
import is from 'is_js';
import { getValueById } from './getValue.js';
import utils from '../../../common/utils/utils.js';

const rulesMessage = {
  required: '必填',
}

export default function getFormItemValidate(value, extMap = {}, touched = true) {
  const { rules } = extMap;

  if (!rules || !touched) return null;

  if (is.not.array(rules)) {
    utils.errorLogs('验证规则错误，必须是一个数组');
    return null;
  }

  const newValue = getValueById(value);
  const __validate = {
    validateStatus: null,
    help: '',
  }

  // 验证规则一条没通过后
  // 就不再验证
  rules.some(rule => {
    // 必填性验证
    if (rule.required && !newValue) {
      __validate.validateStatus = 'error';
      __validate.help = rule.message || rulesMessage.required;
      __validate.required = true;
      return true;
    }

    // 最大值验证
    if (rule.max && newValue.length > rule.max) {
      __validate.validateStatus = 'error';
      __validate.help = rule.message || rulesMessage.max;
    }

    // 最小值验证
    if (rule.min && newValue.length < rule.min) {
      __validate.validateStatus = 'error';
      __validate.help = rule.message || rulesMessage.min;
    }

    // 指定长度验证
    if (rule.len && newValue.length !== rule.len) {
      __validate.validateStatus = 'error';
      __validate.help = rule.message || rulesMessage.len;
    }

    return false;
  })

  // console.log("__validate", __validate);
  return __validate;
}
