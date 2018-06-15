import lodash from 'lodash';
import * as exampleServices from '../services/example.js';

export default {

  state: {
    count: 12,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload: { type, list } }, { call, put }) {  // eslint-disable-line
      const type_capitalize = lodash.capitalize(type);
      const services_name = `query${type_capitalize}`
      const resp = yield call(exampleServices[services_name], { list });
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
