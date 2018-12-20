const hook = require('./hooks');
const compiler = require('./compiler');

module.exports = function ({ extensions }) {
  extensions = (extensions || []).map((ext) => ext.replace('.', ''));
  extensions.forEach((ext) => hook(`.${ext}`, compiler));
}