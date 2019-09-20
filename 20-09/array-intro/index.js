const filmContainer = document.querySelector("#filmContainer"); 
  
const filmer = [
    {
        id: "tt0078346",
        tittel: "Supermann",
        genre: "superhelter",
        poster: "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
        id: "tt0096895", 
        tittel: "Batman",
        genre: "superhelter",
        poster: "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    { 
        id: "tt0316396",
        tittel: "Petter Pan",
        genre: "superhelter",
        poster: "https://m.media-amazon.com/images/M/MV5BMTM0ODI2MzA0NV5BMl5BanBnXkFtZTYwNjUzMzg2._V1_UY268_CR1,0,182,268_AL_.jpg"
    },
    { 
        id: "tt0075520",
        tittel: "Jesus fra Nazareth",
        genre: "religion",
        poster: "https://m.media-amazon.com/images/M/MV5BMTVmZWU2YzQtMGU0My00ZDM0LTlhNjItMTFiOThjNDJlYTliXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR2,0,182,268_AL_.jpg"
    },
    { 
        id: "tt0241527",
        tittel: "Harry Potter",
        genre: "fantasy",
        poster: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg" 
    },
    {
        id: "tt0837563",
        tittel: "Pet Sematary",
        genre: "skrekk",
        poster: "https://m.media-amazon.com/images/M/MV5BMjUyNjg1ODIwMl5BMl5BanBnXkFtZTgwNjMyOTYzNzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
        id: "tt0075005",
        tittel: "The Omen",
        genre: "skrekk",
        poster: "https://m.media-amazon.com/images/M/MV5BZmNjZDcwNTMtMjQxMy00ZTY5LTg4M2YtYjA5NDliNjNhYzQ3XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
        id: "tt2866360",
        tittel: "Coherence",
        genre: "skrekk",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQ3ODUzNDY2M15BMl5BanBnXkFtZTgwNzg0ODY2MTE@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
        id: "tt2724064",
        tittel: "Sharknado",
        genre: "haifilm",
        poster: "https://m.media-amazon.com/images/M/MV5BODcwZWFiNTEtNDgzMC00ZmE2LWExMzYtNzZhZDgzNDc5NDkyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
        id: "tt3062074",
        tittel: "Sharknado 2: The Second One",
        genre: "haifilm",
        poster: "https://m.media-amazon.com/images/M/MV5BODcwZWFiNTEtNDgzMC00ZmE2LWExMzYtNzZhZDgzNDc5NDkyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
        id: "tt3899796",
        tittel: "Sharknado 3: Oh Hell No!",
        genre: "haifilm",
        poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDUzNzQzOF5BMl5BanBnXkFtZTgwMDg4NTYzNTE@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
        id: "tt4831420",
        tittel: "Sharknado 4: The 4th Awakens",
        genre: "haifilm",
        poster: "https://m.media-amazon.com/images/M/MV5BMWE5YWJhZWYtMzUwMy00MWUyLTkzZWEtYzVjY2M0YzVmZjQ3XkEyXkFqcGdeQXVyNTc5NTcxMTQ@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
        id: "tt6298780",
        tittel: "Sharknado 5: Global Swarming",
        genre: "haifilm",
        poster: "https://m.media-amazon.com/images/M/MV5BMjQ3Mzk5NzAwNV5BMl5BanBnXkFtZTgwNDkwOTc3MjI@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
        id: "tt8031422",
        tittel: "The Last Sharknado: It's About Time",
        genre: "haifilm",
        poster: "https://m.media-amazon.com/images/M/MV5BNWM4MjY5NzktMTg2ZS00MmE5LWIxNGMtYThhMGMwYmMwZGYzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
    }
];

console.log(filmer);


for(const film of filmer) {
    filmContainer.innerHTML += `
        <article>
            <img src="${film.poster}">
            <p>${film.tittel}</p>
            <p>Sjanger: ${film.genre}</p>
        </article>
    `;
}