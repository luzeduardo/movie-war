import runtimeEnv from '@mars/heroku-js-runtime-env';
const env = runtimeEnv();

class MovieApi {

 static returnMovie(search) {
     let srv = env.MOVIE_API_ADDRESS ? env.MOVIE_API_ADDRESS : 'https://www.omdbapi.com/';
     return fetch(`${srv}?s=${search.search}`)
     .then(
       response => response.json()
     );
 }
}

export default MovieApi;
