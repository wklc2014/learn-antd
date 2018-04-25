const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const configs = array.map((v, i) => {
  const extMap = {
    colSpan: 1,
  }
  if (v === 2) {
    extMap.colSpan = 2;
  } else if (v === 10) {
    extMap.colSpan = 3;
  } else if (v === 15) {
    extMap.colSpan = 4;
  }
  return {
    order: v,
    config: {
      id: `user_name_${v}`,
      type: 'input',
      extMap,
    },
    formItemParams: { label: `input-${v}` },
  }
});

export default configs;
