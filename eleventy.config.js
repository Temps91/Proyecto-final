module.exports = function(eleventyConfig) {
    // Crear una colección que recoja todos los archivos .md
    eleventyConfig.addCollection("searchIndex", function(collectionApi) {
        return collectionApi.getAll().filter(item => item.inputPath.endsWith(".md")).map(item => {
            return {
                title: item.data.title || item.fileSlug,
                url: item.url,
                excerpt: item.templateContent.substring(0, 150)  // Tomar los primeros 150 caracteres como fragmento
            };
        });
    });

    // Pasar el índice a un archivo JSON
    eleventyConfig.addPassthroughCopy("search.json");

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        },
    };
};
