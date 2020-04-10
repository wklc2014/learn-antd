import '../assets/styles/index.less';
import '../assets/scripts/index.js';

import React from 'react';
import ReactDom, { render } from 'react-dom';
import App from '../layouts/index.js';

render(<App />, document.getElementById('root'));
