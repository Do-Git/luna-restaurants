/* eslint-disable no-unreachable */
import { combineReducers } from "redux";
import restaurantReducer from "./restaurantReducer";
import mixReducers from './mixReducers'


export default combineReducers({mixReducers, restaurantReducer});
