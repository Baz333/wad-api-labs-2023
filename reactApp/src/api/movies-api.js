export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?${process.env.TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };