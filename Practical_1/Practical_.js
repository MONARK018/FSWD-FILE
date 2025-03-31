const moviecollection = [    
    {title: "inception", genre: "sci-fi", rating: 8.8, releaseyear: 2010},
    {title: "the dark knight", genre: "action", rating: 9.0, releaseyear: 2008},
    {title: "titanic", genre: "romantic", rating: 7.8, releaseyear: 1997},
    {title: "parasite", genre: "thriller", rating: 8.6, releaseyear: 2019},
];

function addmovie(title,genre,rating,releaseyear)
{
    moviecollection.push({title,genre,rating,releaseyear});
    console.log(`movie "${title}" added successfully!`)
}

function listmoviesbygenre(genre)
{
    const filteredmovies = moviecollection.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    console.log(`movie in genre '${genre}'`);
    filteredmovies.forEach(movie => console.log(`-${movie.title} (${movie.releaseyear})`));
}

function findhighestratedmovie()
{
    const highestrated = moviecollection.reduce((best,movie) => (movie.rating > best.rating ? movie : best), moviecollection[0]);
    console.log(`🏆 Highest Rated Movie: ${highestrated.title} (Rating: ${highestrated.rating})`);
}


function listallmovietitles() {
    const titles = moviecollection.map(movie => movie.title);
    console.log("🎥 Movie Titles:", titles.join(", "));
}

function listmoviesafteryear(year)
{
    const filteredmovies = moviecollection.filter(movie => movie.releaseyear > year);
    console.log(`Movies released after ${year}:`);
    filteredmovies.forEach(movie => console.log(`- ${movie.title} (${movie.releaseyear})`));
}

addmovie("Avengers: Endgame", "Action", 8.4, 2019);
listmoviesbygenre("Sci-Fi");
findhighestratedmovie();
listallmovietitles();
listmoviesafteryear(2010);