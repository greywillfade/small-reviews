const util = require("util");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("main.css");

    // Todo: need to work out a way to pass the params dynamically ideally
    eleventyConfig.addCollection("books2024", function(collectionApi) {
        return collectionApi.getFilteredByTags("book", "2024");
    });

    eleventyConfig.addCollection("games2024", function(collectionApi) {
        return collectionApi.getFilteredByTags("game", "2024");
    });

    eleventyConfig.addCollection("books2023", function(collectionApi) {
        return collectionApi.getFilteredByTags("book", "2023");
    });

    eleventyConfig.addCollection("games2023", function(collectionApi) {
        return collectionApi.getFilteredByTags("game", "2023");
    });

    eleventyConfig.addCollection("books2022", function(collectionApi) {
        return collectionApi.getFilteredByTags("book", "2022");
    });

    eleventyConfig.addCollection("games2022", function(collectionApi) {
        return collectionApi.getFilteredByTags("game", "2022");
    });

    eleventyConfig.addCollection("books2021", function(collectionApi) {
        return collectionApi.getFilteredByTags("book", "2021");
    });

    eleventyConfig.addCollection("games2021", function(collectionApi) {
        return collectionApi.getFilteredByTags("game", "2021");
    });

};

