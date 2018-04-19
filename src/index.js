import React from 'react';
import mirror, { render } from 'mirrorx';
import moment from 'moment';
import { createLogger } from 'redux-logger';

import App from './pages/App/App.jsx';
import registerServiceWorker from './registerServiceWorker.js';
import mirrorLoading from './common/utils/mirrorLoading.js';
import * as env from './common/configs/env.js';

import 'moment/locale/zh-cn';
import './assets/common.less';
import './models/';

moment.locale('zh-cn');

mirrorLoading(mirror, { effects: true })

const mirrorDefaults = {
  historyMode: 'hash',
  middlewares: [],
}

if (env.NODE_ENV === "development") {
  mirrorDefaults.middlewares.push(
    createLogger({
      collapsed: true,
    })
  )
}

mirror.defaults(mirrorDefaults);

render(<App />, document.getElementById('root'));
registerServiceWorker();

