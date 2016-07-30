const style = require('./src/style.scss');
const content = require('./src/content.md');

// Client render (optional):
if (typeof document !== 'undefined') {
  // Client render code goes here...
}

// Exported static site renderer:
module.exports = function render(locals, callback) {
  callback(null,
    `<!DOCTYPE html><html lang="en"><head><meta name="viewport" content="width=device-width, initial-scale=1"><meta charset="UTF-8"><title>jeremyjones.tech</title><link rel="stylesheet" href="main.css"></link></head><body>${content}</body></html>`
  );
};
