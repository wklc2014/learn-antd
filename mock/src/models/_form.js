// import { actions } from 'mirrorx';
import state from './state/_form.js';

export default {
  name: '_form',
  initialState: state,
  reducers: {
    update(state, data) {
      return { ...state, ...data };
    },
    updateValues(state, data) {
      return { ...state, values: { ...state.values, ...data } }
    },
    resetValues() {
      return { ...state, values: state.values }
    }
  }
}
