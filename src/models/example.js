import { message } from 'antd';
import exampleServices from '../services/example.js';

export default {

  state: {
    count: 12,
    list: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/example') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      const resp = yield call(exampleServices);
      const { success, data, msg } = resp;
      if (!success || !data) {
        message.destroy();
        message.error(msg || '接口错误');
      }
      yield put({ type: 'update', payload: { list: data || [] } });
    },
  },

  reducers: {
    increase(state) {
      const { count } = state;
      return { ...state, count: count + 1 };
    },
    reduce(state) {
      const { count } = state;
      return { ...state, count: count - 1 };
    },
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
