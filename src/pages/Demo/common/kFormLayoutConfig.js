const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const configs = array.map((v, i) => {

  const params = {
    colspan: 1,
  }

  if (v === 2) {
    params.colspan = 2;
  } else if (v === 10) {
    params.colspan = 3;
  } else if (v === 15) {
    params.colspan = 4;
  }
  return {
    order: v,
    id: `user_name_${v}`,
    label: `input-${v}`,
    config: {
      type: 'input',
    },
    params,
  }
});

export default configs;
