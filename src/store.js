import {createStore} from 'redux'
import rootReducer from './reducers'

let store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension())

export default store
