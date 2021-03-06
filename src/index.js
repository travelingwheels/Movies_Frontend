const endPoint = "http://localhost:3000/api/v1/movies"


document.addEventListener('DOMContentLoaded', () => {
    getFetch()

    const newFormData = document.querySelector("#movie-form")
    newFormData.addEventListener("submit", (e) => submitHandler(e)) 

    const searchBar = document.getElementById('searchBar')
    searchBar.addEventListener("keyup", (e) => keyUpHandler(e))
})

let frontendMovies = []


function getFetch() {
    fetch(endPoint)
    .then(res => res.json())
    .then(movies => {
        movies.data.forEach(movie => {
            let movieData = new Movie(movie, movie.attributes)
            frontendMovies.push(movieData)
        })
        const sorted = Movie.sortByTitle(frontendMovies);
        sorted.forEach(movie => {
            document.querySelector('#movie-container').innerHTML += movie.renderMovie()   
        })  
     })
     .catch(error => console.log(error));
}



    
function keyUpHandler(e) {
    const searchString = e.target.value.toLowerCase();
    const filteredMovie = frontendMovies.filter((selectMovie) => {
        return selectMovie.title.toLowerCase().includes(searchString);
    });
    let filteredArray = []
    filteredMovie.forEach(movie => {
        let movieData = new Movie(movie, movie.attributes)
        filteredArray.push(movieData)
    })
    
    const sorted = Movie.sortByTitle(filteredArray);
    document.querySelector('#movie-container').innerHTML = ""
    sorted.forEach(movie => {
        document.querySelector('#movie-container').innerHTML += movie.renderMovie()   
    })  
}


function submitHandler(e) {
    e.preventDefault()
    
        let rate
        let star = document.querySelector('input:checked')
        if(!star){
            rate = 0
        }
        else {
            rate = star.id.slice(-1)
        }
    const titleInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value
    const imageInput = document.querySelector('#input-url').value
    const ratingInput = rate
    const categoryId = parseInt(document.querySelector('#categories').value)
    postFetch(titleInput, descriptionInput, imageInput, ratingInput, categoryId)
};




function postFetch(title, description, image_url, rating,  category_id) {
    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json",
                  "Accept": "application/json"
                },
         body: JSON.stringify({
            title: title,
            description: description,
            image_url: image_url,
            rating: rating,
            category_id: category_id
        })
    })
    .then(res => res.json())
    .then(movie => {
        const newMovie = movie.data
        let movieData = new Movie(newMovie, newMovie.attributes)
        frontendMovies.push(movieData)
        const sorted = Movie.sortByTitle(frontendMovies);
        document.querySelector('#movie-container').innerHTML = " "
        sorted.forEach(movie => {
            document.querySelector('#movie-container').innerHTML += movie.renderMovie() 
        }) 
    })
        .catch(error => console.log(error));
}