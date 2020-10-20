const BASE_URL = "http://localhost:3000/api/v1/movies"

document.addEventListener('DOMContentLoaded', () => {
    getFetch()

    const newFormData = document.querySelector("#movie-form")
    newFormData.addEventListener("submit", (e) => submitHandler(e))
})

function getFetch() {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(movies => {
        movies.data.forEach(movie => {
            const renderMovie = `
              <div data-id=${movie.id}>
                <img src=${movie.attributes.image_url} height="300" width="250">
                <h3>${movie.attributes.title}</h3>
                <p>${movie.attributes.description}</p>
                <p>${movie.attributes.category.name}</p>
                
              </div>
              <br><br>`;
    
            document.querySelector('#movie-container').innerHTML += renderMovie
        })
    })
}

    

function submitHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value
    const imageInput = document.querySelector('#input-url').value
    const categoryId = parseInt(document.querySelector('#categories').value)
    postFetch(titleInput, descriptionInput, imageInput, categoryId)
}

function postFetch(title, description, image_url, category_id) {
     //console.log(title, description, image_url, category_id)
    fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json",
                  "Accept": "application/json"
                },
         body: JSON.stringify({
            title: title,
            description: description,
            image_url: image_url,
            category_id: category_id
        })
    })
        .then(res => res.json())
        .then(movie => {
        //console.log(movie);
        const renderMovie = `
              <div data-id=${movie.id}>
                <img src=${movie.data.attributes.image_url} height="300" width="250">
                <h3>${movie.data.attributes.title}</h3>
                <p>${movie.data.attributes.description}</p>
                <p>${movie.data.attributes.category.name}</p>
                
              </div>
              <br><br>`;
        
        document.querySelector('#movie-container').innerHTML += renderMovie;
    })
}