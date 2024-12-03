module.exports = function(eleventyConfig) {
    eleventyConfig.addCollection("searchIndex", function(collectionApi) {
        return collectionApi.getAll().filter(item => item.inputPath.endsWith(".md")).map(item => {
            return {
                title: item.data.title || item.fileSlug,
                url: item.url,
                excerpt: item.templateContent.substring(0, 150)
            };
        });
    });


    eleventyConfig.addPassthroughCopy("search.json");

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        },
    };
};
