import counterReducer from './counterReduccer'
import loginReducer from './logInReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers ({
    counterReducer,
    loginReducer
})

export default allReducers