import {combineReducers} from 'redux';
import movies from './movies';
import {reducer as formReducer} from 'redux-form';
const reducers = {
  movies,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
