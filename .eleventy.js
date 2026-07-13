const markdownIt = require("markdown-it")({ html: true });

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });
  });
  eleventyConfig.addFilter("markdown", (content) => markdownIt.render(content || ""));

  eleventyConfig.addCollection("portfolio", (api) => {
    return api.getFilteredByGlob("src/content/portfolio/*.md").sort((a, b) => a.data.order - b.data.order);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
