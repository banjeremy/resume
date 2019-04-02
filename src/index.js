const style = require('./style.css')
const favicon = require('./favicon.ico')
const document = require('./index.html')

// Client render (optional):
if (typeof document !== 'undefined') {
}

// Exported static site renderer:
module.exports = function render(locals, callback) {
  callback(null, document)
}
