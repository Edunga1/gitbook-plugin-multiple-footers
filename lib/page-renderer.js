const fs = require('fs');

const fsOptions = { encoding: 'utf-8' };

module.exports = function pageRenderer(page) {
  if (this.output.name !== 'website') {
    return page;
  }

  const config = this.config.get('pluginsConfig') || {};
  const optFooters = config['multiple-footers'];
  const paths = (optFooters && optFooters.paths) || [];
  const htmls = paths.map(path => fs.readFileSync(path, fsOptions));
  const mergedFooter = htmls.reduce((a, b) => a + b);
  // eslint-disable-next-line
  page.content += mergedFooter;
  return page;
};
