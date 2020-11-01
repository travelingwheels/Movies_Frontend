class Movie {

    constructor(movie, movieAttributes) {
        this.id = movie.id
        this.title = movieAttributes.title
        this.description = movieAttributes.description
        this.image_url = movieAttributes.image_url
        this.category = movieAttributes.category
        this.attributes = movieAttributes
        Movie.all.push(this)
    }

    renderMovie() {
        return `
        <div data-id=${this.id}>
                <img src=${this.image_url} height="300" width="250">
                <h3>${this.title}</h3>
                <p>${this.description}</p>
                <h4>Genre:</h4>
                ${this.category.name}
                
              </div>
              <br><br><hr />`;
    } 

    static sortByTitle(movieData) {
        return movieData.sort(function(movieA, movieB){
            const movieATitle = movieA.title.toLowerCase();
            const movieBTitle = movieB.title.toLowerCase();

            if (movieATitle < movieBTitle) {
                return -1;
            }else if (movieATitle === movieBTitle) {
                return 0;
            }else {
                return 1;
            }
        });
    }
}

Movie.all = [];