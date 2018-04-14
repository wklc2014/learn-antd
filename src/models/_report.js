import { actions } from 'mirrorx';
import moment from 'moment';
import * as reportServices from '../services/_report.js';
import utils from '../utils/utils.js';

const initialState = {
  k_form: {
    userName: { base: '123' }
  },
  k_summary_table: [
    {
      key: 0,
      accident_time: moment('2017-09-10 12:20:45'),
      isNeedReturnGoods: '0',
      multiplier: 2,
      lossAmount: 3,
      description: '巴拉巴拉小魔仙',
    },
    {
      key: 1,
      accident_time: moment('2015-09-10 12:20:45'),
      isNeedReturnGoods: '1',
      multiplier: 4,
      lossAmount: 5,
      description: '巴拉巴拉小魔仙',
    }
  ],
  content: '',
  values: {},
  dataSource: [],
}

export default {
  name: '_report',
  initialState,
  reducers: {
    updateKForm(state, data) {
      return { ...state, k_form: { ...state.k_form, ...data } }
    },
    updateKTotalTable(state, data) {
      const { k_summary_table } = state;
      const { id, value, order } = data;
      const new_k_summary_table = k_summary_table.map((val, i) => {
        const new_val = {...val};
        if (i === order) {
          new_val[id] = value.base;
        }
        return new_val;
      })
      return { ...state, k_summary_table: new_k_summary_table }
    },
    resetKForm(state, data) {
      return { ...state, k_form: initialState.k_form }
    },
    update(state, data) {
      return { ...state, ...data };
    },
    updateValues(state, data) {
      return { ...state, values: { ...state.values, ...data } }
    }
  },
  effects: {
    async getUser(data, getState) {
      const { _report } = getState();
      const params = {};
      Object.keys(_report.values).forEach(v => {
        const { base } = _report.values || {};
        params[v] = base || _report.values;
      })
      const resp = await reportServices.getUser();
      if (resp.stat === 'ok') {
        actions._report.update({ dataSource: resp.data });
      } else {
        utils.messageTips('info', resp.msg || 'ajax 错误');
      }
    }
  }
}
