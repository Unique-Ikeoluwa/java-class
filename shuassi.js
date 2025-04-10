let movieManager = []
function addMovie(id,title, genre, year, watched){
    let movie = {
        movieId: id,
        title: title,
        genre: genre,
        year: year,
        watched: watched
    }
    movieManager.push(movie)
}
addMovie(5, "Money heist", "Action", 2021, true)
addMovie(1, "Sistas", "Romance", 2018, true)
addMovie(2, "Love in Tokyo", "Romance", 2020, false)
addMovie(6, "Inception", "Sci-Fi", 2010, false)
addMovie(4, "The Matrix", "Sci-Fi", 1999, true)
addMovie(3, "The Dark Knight", "Action", 2008, false)
console.log(movieManager)

function markMovie(id){
    for(let i=0; i < movieManager.length; i++){
        if (movieManager[i].movieId===id){
            if (movieManager[i].watched){
                console.log(`${movieManager[i].title} has been watched`)
            }
            else{
                console.log(`${movieManager[i].title} has not been watched`)
            }
            return;
        }
    }
console.log("movie not found")
}
markMovie(1)
markMovie(2)
markMovie(3)
markMovie(4)
markMovie(5)
markMovie(6)

function listByGenre(genre) {
    let found = false;
    console.log(`Movies in the "${genre}" genre:`);

    for (let i = 0; i < movieManager.length; i++) {
        if (movieManager[i].genre.toLowerCase() === genre.toLowerCase()) {
            console.log(`- ${movieManager[i].title} (${movieManager[i].year})`);
            found = true;
        }
    }

    if (!found) {
        console.log("No movies found in this genre.");
    }
}
listByGenre("Romance")
listByGenre("Action")
listByGenre("Sci-Fi")
listByGenre("Fiction")

movieManager.pop()
console.log(movieManager)

function sortByYear() {
    movieManager.sort((a, b) => a.year - b.year); // Oldest to newest

    console.log("Movies sorted by year (ascending):");
    for (let i = 0; i < movieManager.length; i++) {
        console.log(`- ${movieManager[i].title} (${movieManager[i].year})`);
    }
}
sortByYear()


