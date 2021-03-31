// import { combineReducers } from "redux";

// const rootReducer = combineReducers({});

const initialState = {
  token: '',
  email: '',
  id: '',
  first_name: '',
  last_name: '',
  user_name: '',
  avatar: '',
  newPost: '',
  location: '',
  users: [],
  requests: [],
  restaurants: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {...state, token: action.payload};
      break;
    case 'ADD_EMAIL':
      return {...state, email: action.payload};
      break;
    case 'ADD_ID':
      return {...state, id: action.payload};
      break;
    case 'ADD_FIRST_NAME':
      return {...state, first_name: action.payload};
      break;
    case 'ADD_LAST_NAME':
      return {...state, last_name: action.payload};
      break;
    case 'ADD_USERNAME':
      return {...state, user_name: action.payload};
      break;
    case 'ADD_AVATAR':
      return {...state, avatar: action.payload};
      break;
    case 'NEW_POST':
      return {...state, newPost: action.payload};
      break;
    case 'GET_USERS':
      return {...state, users: action.payload};
      break;
    case 'GET_REQUESTS':
      return {...state, requests: action.payload};
      break;
    case 'GET_LOCATION':
      return {...state, requests: action.payload};
      break;
    default:
      return state;
      break;
  }
}


export default rootReducer;
