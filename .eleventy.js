module.exports = function(config) {

  config.addCollection('posts', collection => {
    return collection.getFilteredByGlob('_src/posts/*.md');;
  });

  config.addFilter("lookup", require('./_src/filters/lookup.js'));  

  return {
    dir: {
      input: '_src',
      output: 'dist',
      includes: '_templates'
    },
    templateFormats: ['html', 'md'],
    htmltemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid'
  }
}