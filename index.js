const style = require('./src/style.scss');
const favicon = require('./src/favicon.ico');
const document = require('./src/index.html');

// Client render (optional):
if (typeof document !== 'undefined') {
}

// Exported static site renderer:
module.exports = function render(locals, callback) {
  callback(null, document);
};
