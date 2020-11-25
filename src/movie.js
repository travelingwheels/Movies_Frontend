class Movie {

    constructor(movie, movieAttributes) {
        this.id = movie.id
        this.title = movieAttributes.title
        this.description = movieAttributes.description
        this.image_url = movieAttributes.image_url
        this.category = movieAttributes.category
        this.rating = movieAttributes.rating
        this.attributes = movieAttributes
        Movie.all.push(this)
    }

    renderRating(value){
       let rating =  new Array(5).fill('x').map((x, i) => {
            return  `
                <input type="radio" name="star" class="star-${i + 1}" id="star-${i + 10}" ${i + 1 === value ? 'checked' : ''}  />
                <label class="star-${i + 1}" for="star-${i + 10}">${i + 1}</label>
            `
        }) 

        return rating.join(" ")
    }

    renderMovie() {
        return `
            <div data-id=${this.id}>
                <img src=${this.image_url} height="300" width="250">
                <h3>${this.title}</h3>
                <p>${this.description}</p>
                <h4>Genre:</h4>
               <p>${this.category.name}</P>
               Rated:<br>
                ${this.rating} - Stars
                <form>
                  <div class="starss">
                    ${this.renderRating(this.rating)}
                    <span></span>
                  </div>
                </form>
                <br><br>
              
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