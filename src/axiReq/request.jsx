const API_KEY="150a581082eaef6e8a95ca0d5e3149c5"

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchMystery:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchAdventureMovies:`/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchScienceFiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
}
export default requests;
