class Movie {

    constructor(movie, movieAttributes) {
        this.id = movie.id
        this.title = movieAttributes.title
        this.description = movieAttributes.description
        this.image_url = movieAttributes.image_url
        this.category = movieAttributes.category
        Movie.all.push(this)
    }

    renderMovie() {
        return `
        <div data-id=${this.id}>
                <img src=${this.image_url} height="300" width="250">
                <h3>${this.title}</h3>
                <p>${this.description}</p>
                <p>${this.category.name}</p>
                
              </div>
              <br><br>`;
    }

}

Movie.all = [];