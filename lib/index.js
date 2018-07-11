const pageRenderer = require('./page-renderer');

module.exports = {
  hooks: {
    'page:before': pageRenderer,
  },

  blocks: {},

  filters: {},
};
