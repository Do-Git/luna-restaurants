import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/index";

const store = createStore(reducer, applyMiddleware(thunk));

const token = localStorage.getItem("token");
console.log(token);
if (token) {
  store.dispatch({ type: "SET_TOKEN", payload: token });
}

export default store;
