// Función para buscar dentro del contenido
function searchContent() {
    const query = document.getElementById('searchInput').value.toLowerCase(); // Obtener lo que el usuario escribe
    const searchResults = document.getElementById('searchResults'); // Donde mostrar los resultados
    searchResults.innerHTML = ''; // Limpiar resultados anteriores
    let resultsFound = false; // Variable para verificar si hay resultados

    // Buscar en todos los blogs (suponiendo que cada blog está dentro de un contenedor con la clase "blog-post")
    const blogPosts = document.querySelectorAll('.blog-post'); 

    blogPosts.forEach(post => {
        const title = post.querySelector('h2').textContent.toLowerCase(); // Título del blog
        const content = post.querySelector('p').textContent.toLowerCase(); // Contenido del blog

        // Si el título o el contenido incluyen la búsqueda, mostrar el resultado
        if (title.includes(query) || content.includes(query)) {
            resultsFound = true;
            const resultElement = document.createElement('div');
            resultElement.classList.add('search-result');
            resultElement.innerHTML = `<h3>${post.querySelector('h2').textContent}</h3><p>${post.querySelector('p').textContent}</p>`;
            searchResults.appendChild(resultElement);
        }
    });

    // Si no se encontraron resultados, mostrar un mensaje
    if (!resultsFound) {
        searchResults.innerHTML = '<p>No se encontraron resultados.</p>';
    }
}
