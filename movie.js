class Movie {

    constructor(movie, movieAttributes) {
        this.id = movie.id
        this.title = movieAttributes.title
        this.description = movieAttributes.description
        this.image_url = movieAttributes.image_url
        this.category = movieAttributes.category
        Movie.all.push(this)
    }

}