import MovieServiceApi from '../api/movieServiceApi';

export const loadMovie = () => {
  console.log('loading movie');
  return MovieServiceApi.returnMovie().then(res => res);
};
