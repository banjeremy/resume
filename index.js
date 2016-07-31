const style = require('./src/style.scss');
const document = require('./src/index.html');

// Client render (optional):
if (typeof document !== 'undefined') {
}

// Exported static site renderer:
module.exports = function render(locals, callback) {
  callback(null, document);
};
