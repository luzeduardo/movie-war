import MovieServiceApi from '../api/movieServiceApi';

export const loadMovie = () => {  
  return MovieServiceApi.returnMovie().then(res => res);
};
