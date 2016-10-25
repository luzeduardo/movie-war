import MovieServiceApi from '../api/movieServiceApi';

export const loadMovie = () => {
  console.log('loading movie');
  return TravelServiceApi.returnMovie().then(res => res);
};
