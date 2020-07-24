
module.exports = function(eleventyConfig) {

  // static passthroughs
  eleventyConfig.addPassthroughCopy('src/images');

  // other config settings
  return {
    dir: {
      input: 'src/site',
      output: 'dist',
      data: '_data'
    }
  };

};
