import { combineReducers } from "redux";
import { restaurantReducer } from "./restaurantReducer";

const initialState = {
  token: "",
  email: "",
  id: "",
  first_name: "Loading...",
  last_name: "",
  user_name: "",
  avatar: "",
  newPost: "",
  location: "Loading...",
  users: [],
  restaurants: [],
  date_joined: '',
  description: 'Loading...',
  things_I_love: 'Loading...',
  phone: 'Loading...',
  clicked_index: 0
};

const mixReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload };
      break;
    case "ADD_EMAIL":
      return { ...state, email: action.payload };
      break;
    case "ADD_ID":
      return { ...state, id: action.payload };
      break;
    case "ADD_FIRST_NAME":
      return { ...state, first_name: action.payload };
      break;
    case "ADD_LAST_NAME":
      return { ...state, last_name: action.payload };
      break;
    case "ADD_USERNAME":
      return { ...state, user_name: action.payload };
      break;
    case "ADD_AVATAR":
      return { ...state, avatar: action.payload };
      break;
    case "NEW_POST":
      return { ...state, newPost: action.payload };
      break;
    case "GET_USERS":
      return { ...state, users: action.payload };
      break;
    case "ADD_RESTAURATS":
      return { ...state, restaurants: action.payload };
      break;
    case "ADD_LOCATION":
      return { ...state, location: action.payload };
      break;
    case "ADD_DATE":
      return { ...state, date_joined: action.payload };
      break;
    case "ADD_DESCRIPTION":
      return { ...state, description: action.payload };
      break;
    case "ADD_LOVE":
      return { ...state, things_I_love: action.payload };
      break;
    case "ADD_PHONE":
      return { ...state, phone: action.payload };
      break;
    case 'CLICKED':
      return {...state, clicked_index: action.payload};
    default:
      return state;
      break;
  }
};

export const rootReducer = combineReducers({
  mixReducer,
  restaurantReducer,
});
