
import { createStore } from 'redux'
import allReducers from './Reducers'
const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    );

export default store;