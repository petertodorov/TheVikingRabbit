
import ghibliEndpoints from './ghibliEndpoints'
async function moviesProvider(movieName) {
    let mainUrl = ghibliEndpoints.mainUrl + ghibliEndpoints.movies;
    let allMoviesData = await makeRequest(mainUrl)
    if (!movieName) {
        return allMoviesData
    }
    else {
        let movieNameSmallLetters = movieName.toLowerCase()
        let selectedMovies = allMoviesData.filter(movie => {
           return movie.title.toLowerCase().includes(movieNameSmallLetters)
        });
        return allMoviesData = selectedMovies

    }
}
async function makeRequest(url) {
    try {
        let request = await fetch(url)
        if (request.status !== 200) return
        let data = await request.json()
        return data
    } catch (error) {
        return console.log(error)
    }
}
export default moviesProvider

