import {createStore} from 'redux'
import movieAdd from './reducers/movie'
import {addMovie, setVisibilityFilter, VisibilityFilters} from './actions/'

let store = createStore(movieAdd)

console.log(store.getState());

let unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addMovie('Mommy'))
store.dispatch(addMovie('Mummy'))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))

unsubscribe()
