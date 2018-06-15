const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const configs = array.map((v, i) => {

  const extMap = {
    colspan: 1,
  }

  if (v === 2) {
    extMap.colspan = 2;
  } else if (v === 10) {
    extMap.colspan = 3;
  } else if (v === 15) {
    extMap.colspan = 4;
  }
  return {
    label: `input-${v}`,
    config: {
      id: `user_name_${v}`,
      type: 'input',
    },
    extMap,
  }
});

export default configs;
