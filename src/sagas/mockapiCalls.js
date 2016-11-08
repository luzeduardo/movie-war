import MovieServiceApi from '../api/movieServiceApi';

export const loadMovie = (search) => {
  return MovieServiceApi.returnMovie(search).then(res => res);
};
