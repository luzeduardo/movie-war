class MovieApi {
 static returnMovie(search) {
  //  return new Promise( (resolve, movie) => {
     return fetch('http://www.omdbapi.com/?s=' + search.search)
     .then(
       response => response.json()
     );
  //  });
 }
}

export default MovieApi;
