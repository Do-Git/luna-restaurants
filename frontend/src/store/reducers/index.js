/* eslint-disable no-unreachable */
import { combineReducers } from "redux";
import restaurantReducer from "./restaurantReducer";
import mixReducers from './mixReducers'
import reviewReducer from './reviewReducer'
import userReducer from './userReducer'


export default combineReducers({mixReducers, restaurantReducer, reviewReducer, userReducer});
