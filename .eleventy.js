module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  return {
    dir: { input: "src", output: "public" }
  };
};
