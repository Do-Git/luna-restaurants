/* eslint-disable no-unreachable */
import { combineReducers } from "redux";
import restaurantReducer from "./restaurantReducer";
import mixReducers from './mixReducers'
import reviewReducer from './reviewReducer'


export default combineReducers({mixReducers, restaurantReducer, reviewReducer});
