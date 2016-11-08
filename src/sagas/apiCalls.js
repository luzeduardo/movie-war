import MovieApi from '../api/movieApi';

export const loadMovie = (search) => {
  return MovieApi.returnMovie(search).then(res => res);
};
