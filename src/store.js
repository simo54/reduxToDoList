import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

// Getting the existing todos in local Storage
const persistedState = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : {};

// Creating store and passing reducer and localstorage variable
const store = createStore(rootReducer, persistedState, composeWithDevTools());

// Subscribe the store and saving todos in localstorage

store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState()));
});

export default store;
