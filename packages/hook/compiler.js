const fs = require('fs');
const compiler = file => {
  const content = fs.readFileSync(file, { encoding: 'utf8' });
  return content;
}
module.exports = compiler;