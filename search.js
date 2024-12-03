
function searchContent() {
    const query = document.getElementById('searchInput').value.toLowerCase(); 
    const searchResults = document.getElementById('searchResults'); 
    searchResults.innerHTML = ''; 
    let resultsFound = false; 

  
    const blogPosts = document.querySelectorAll('.blog-post'); 

    blogPosts.forEach(post => {
        const title = post.querySelector('h2').textContent.toLowerCase();
        const content = post.querySelector('p').textContent.toLowerCase(); 


        if (title.includes(query) || content.includes(query)) {
            resultsFound = true;
            const resultElement = document.createElement('div');
            resultElement.classList.add('search-result');
            resultElement.innerHTML = `<h3>${post.querySelector('h2').textContent}</h3><p>${post.querySelector('p').textContent}</p>`;
            searchResults.appendChild(resultElement);
        }
    });

    if (!resultsFound) {
        searchResults.innerHTML = '<p>No se encontraron resultados.</p>';
    }
}
