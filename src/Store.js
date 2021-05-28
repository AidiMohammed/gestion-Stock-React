import {createStore} from 'redux';
import rootreducers from './reducers'

const initState = {}
const store = createStore(rootreducers,initState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;