/**
 * 自定义表单验证
 * 单次验证一个表单元素
 */
import is from 'is_js';

const rulesMessage = {
  required: '必填',
  max: '最大值',
  min: '最小值',
  len: '指定长度不够',
  phone: '手机号码',
}

export function getFormItemValidate({ values, configs = [], touched = false }) {

  const _validate = {};

  configs.slice(0, 2).some((val, i) => {
    let isError = false;

    const { id, ext = {} } = val;
    const { rules } = ext;

    // 验证规则不是数组
    if (is.array(rules)) {
      // 获取需要验证的值
      const value = values[id];

      // 验证是否必填
      _validate.required = rules.some(rule => rule.required);

      if (touched) {
        const { rules } = ext;
        // 验证规则一条没通过后, 就不再验证
        isError = rules.some((rule) => {
          const result = validateRule(rule, value);
          if (result) {
            Object.assign(_validate, result);
          }
          return !!result;
        });
      }
    }
    return isError;
  })

  // console.log("__validate", __validate);
  return _validate;
}

export function getFormItemErrors({ value, configs }) {
}

function validateRule(rule, value) {
  // 必填性验证
  // eslint-disable-next-line
  if (rule.required && ((is.array(value) && value.length === 0 || !value))) {
    return {
      validateStatus: 'error',
      help: rule.message || rulesMessage.required,
    };
  }
  // 最大值验证
  if (rule.max && value.length > rule.max) {
    return {
      validateStatus: 'error',
      help: rule.message || rulesMessage.max,
    }
  }
  // 最小值验证
  if (rule.min && value.length < rule.min) {
    return {
      validateStatus: 'error',
      help: rule.message || rulesMessage.min,
    };
  }
  // 指定长度验证
  if (rule.len && value.length !== rule.len) {
    return {
      validateStatus: 'error',
      help: rule.message || rulesMessage.len,
    };
  }
  // 手机号码验证
  const reg_phone = /1[0-9]{10}/;
  if (rule.phone && !reg_phone.test(value)) {
    return {
      validateStatus: 'error',
      help: rule.message || rulesMessage.phone,
    };
  }
  // 自定义扩展验证
  if (is.function(rule.validator)) {
    const result = rule.validator(value);
    return result ? {
      validateStatus: 'error',
      help: rule.validator(value),
    } : null;
  }
}