import {combineReducers} from "redux";
import productsReducer from './productsReducer'
import customerReducer from './customerReducer'

export default combineReducers({
    moduleProducts: productsReducer,
    moduleCustomer: customerReducer
})
