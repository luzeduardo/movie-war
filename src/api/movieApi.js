import runtimeEnv from '@mars/heroku-js-runtime-env';
const env = runtimeEnv();

class MovieApi {

 static returnMovie(search) {
     return fetch(`${env.MOVIE_API_ADDRESS}?s=${search.search}`)
     .then(
       response => response.json()
     );
 }
}

export default MovieApi;
