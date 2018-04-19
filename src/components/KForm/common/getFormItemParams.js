/**
 * 获取 FormItem 参数
 * value 表单元素值
 * formItemParams FormItem 默认配置
 * options FormItem 默认验证
 */
import is from 'is_js';

export default function getFormItemParams(value, formItemParams = {}, options = {}) {

  const newFormItemParams = {...formItemParams};

  const { rules = [] } = options;

  const { extra } = newFormItemParams;
  if (is.function(extra)) {
    newFormItemParams.extra = formItemParams.extra(value);
  }

  const requiredRule = rules.find((rule, i) => is.not.undefined(rule.required));
  if (requiredRule) {
    newFormItemParams.required = requiredRule.required;
  }

  return newFormItemParams;
}
