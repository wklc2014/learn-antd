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
