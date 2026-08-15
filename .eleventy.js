const util = require("util");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("main.css");
    eleventyConfig.addPassthroughCopy("search.js");

    eleventyConfig.addFilter("withTag", function(collection, tag) {
        return collection.filter(item => item.data.tags && item.data.tags.includes(tag));
    });

    eleventyConfig.addCollection("books", function(collectionApi) {
        return collectionApi.getFilteredByTag("book");
    });

    eleventyConfig.addCollection("games", function(collectionApi) {
        return collectionApi.getFilteredByTag("game");
    });

};

