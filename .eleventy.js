module.exports = function(eleventyConfig) {
    // Crear una colección para los blogs
    eleventyConfig.addCollection("blogs", function(collectionApi) {
        return collectionApi.getAll().filter(item => item.inputPath.endsWith(".md"));
    });

    return {
        dir: {
            input: "src",  // Carpeta de entrada
            output: "_site",  // Carpeta de salida
            includes: "_includes",  // Carpeta de plantillas
        },
    };
};
