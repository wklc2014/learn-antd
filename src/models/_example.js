import { actions } from 'mirrorx';
import moment from 'moment';
import * as exampleServices from '../services/_example.js';

export default {
  name: '_example',
  initialState: {
    list: [],
    values: {},
  },
  reducers: {
    update(state, data) {
      return { ...state, ...data };
    }
  },
  effects: {
    async getUser(data, getState) {
      const resp = await exampleServices.getUser(data);
      actions._example.update({ list: resp.data });
    }
  }
}
