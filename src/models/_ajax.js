import { actions } from 'mirrorx';
import * as reportServices from '../services/_report.js';
import utils from '../utils/utils.js';
import { setValue } from '../components/KForm/common/getValue.js';
import state from './state/_ajax.js';

export default {
  name: '_ajax',
  initialState: state,
  reducers: {
    updateValues(state, data) {
      return { ...state, values: { ...state.values, ...data } }
    },
    resetValues(state, data) {
      return { ...state, values: state.values }
    },
    update(state, data) {
      return { ...state, ...data };
    }
  },
  effects: {
    async getUser(data, getState) {
      const { values } = getState()._ajax;
      const params = {};
      Object.keys(values).forEach(v => {
        const val = setValue(values[v]);
        if (val) {
          params[v] = val;
        }
      })
      const resp = await reportServices.getUser(params);
      if (resp.success) {
        actions._ajax.update({ dataSource: resp.data });
      } else {
        utils.messageTips('info', resp.message || 'ajax 错误');
      }
    }
  }
}
