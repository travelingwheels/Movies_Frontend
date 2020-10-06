const endpoint = ("http://localhost:3000/api/v1/movies")

document.addEventListener('DOMContentLoaded', () => {
    getMovie()
})

function getMovie() {
    fetch(endpoint)
    .then(res => res.json())
    .then(movies => {
        movies.data.forEach(movie => {
            const movieMarkup = `
              <div data-id=${movie.id}>
                <img src=${movie.attributes.image_url} height="200" width="250">
                <h3>${movie.attributes.title}</h3>
                <p>${movie.attributes.description}</p>
                <p>${movie.attributes.category.name}</p>
                <button data-id=${movie.id}>edit</button>
              </div>
              <br><br>`;
    
              document.querySelector('#movie-container').innerHTML += movieMarkup
            })
        })
    }
