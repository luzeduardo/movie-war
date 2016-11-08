import MovieServiceApi from '../api/mockMovieApi';

export const loadMovie = (search) => {
  return MovieServiceApi.returnMovie(search).then(res => res);
};
