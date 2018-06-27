import mockConfig from './mock/index.js';

const CONFIGS = require('./src/config/index.js');

export default CONFIGS.mock ? mockConfig : {};
