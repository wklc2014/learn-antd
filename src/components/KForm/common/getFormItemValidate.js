/**
 * 自定义表单验证
 */
import is from 'is_js';
import { getValue } from './getValue.js';
import utils from '../../../common/utils/utils.js';

const rulesMessage = {
  required: '必填',
}

export default function getFormItemValidate({ value, ext = {}, touched = {} }) {
  const { rules } = ext;

  if (!rules || is.not.array(rules)) {
    // 无验证规则
    // 或验证规则不是数组
    return {};
  }

  // 验证是否必填
  const required = rules.some(rule => rule.required);

  if (!touched) {
    // 首次进入页面，不验证
    return { required };
  }

  // 获取需要验证的值
  const new_value = getValue({ value, id: 'main', ext });

  // 初始验证结果
  const __validate = {
    required,
    validateStatus: null,
    help: '',
  }

  // 验证规则一条没通过后, 就不再验证
  rules.some(rule => {
    // 必填性验证
    if (rule.required && !new_value) {
      __validate.validateStatus = 'error';
      __validate.help = rule.message || rulesMessage.required;
      __validate.required = true;
      return true;
    }

    // 最大值验证
    if (rule.max && new_value.length > rule.max) {
      __validate.validateStatus = 'error';
      __validate.help = rule.message || rulesMessage.max;
      return true;
    }

    // 最小值验证
    if (rule.min && new_value.length < rule.min) {
      __validate.validateStatus = 'error';
      __validate.help = rule.message || rulesMessage.min;
      return true;
    }

    // 指定长度验证
    if (rule.len && new_value.length !== rule.len) {
      __validate.validateStatus = 'error';
      __validate.help = rule.message || rulesMessage.len;
      return true;
    }

    return false;
  })

  // console.log("__validate", __validate);
  return __validate;
}
