module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/scripts');
  eleventyConfig.addPassthroughCopy('src/styles');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy({ 'src/other-pass-through/': '/' });

  return {
    dir: {
      input: 'src'
    }
  };
}