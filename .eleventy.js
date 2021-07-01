module.exports = function (config) {

  config.addCollection('posts', collection => {
    return collection.getFilteredByGlob('_src/site/posts/*.md');
  });

  return {
    dir: {
      input: '.',
      output: 'dist',
      includes: '_templates',
      data: '_data'
    },
    templateFormats: ['html', 'md'],
    htmltemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid'
  }
}