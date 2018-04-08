import is from 'is_js';

export default function getValue ({ value, id, changeValue, extMap }) {

  const { toUpperCase, toLowerCase } = extMap;

  if (toUpperCase && is.string(changeValue)) {
    changeValue = changeValue.toUpperCase();
  } else if (toLowerCase && is.string(changeValue)) {
    changeValue = changeValue.toLowerCase();
  }

  return {
    ...value,
    [id]: changeValue,
  };
}
