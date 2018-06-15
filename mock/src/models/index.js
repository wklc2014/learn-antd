/**
 * 注入 models
 */
import mirror from 'mirrorx';

import ajax from './_ajax.js';
import form from './_form.js';
import summary from './_summary.js';

mirror.model(summary);
mirror.model(form);
mirror.model(ajax);
