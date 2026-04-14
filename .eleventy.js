const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");

  // Blog posts collection
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/blog/posts/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Projects collection
  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/*.md");
  });

  // Date filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Excerpt filter — first 200 chars of content
  eleventyConfig.addFilter("excerpt", (content) => {
    const text = content.replace(/<[^>]+>/g, "");
    return text.length > 200 ? text.slice(0, 200) + "…" : text;
  });

  // RSS 2.0 pubDate format (RFC 822)
  eleventyConfig.addFilter("rfc822Date", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toRFC2822();
  });

  // Alphanumeric GUID from post fileSlug + date
  eleventyConfig.addFilter("rssGuid", (post) => {
    const slug = (post.fileSlug || "post").replace(/[^a-z0-9]/gi, "");
    const date = DateTime.fromJSDate(post.date, { zone: "utc" }).toFormat("yyyyLLdd");
    return date + slug;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
