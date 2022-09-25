import { combineReducers, createStore } from "redux";
import { userLoginReducers } from "./Reducers/userReducers";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { addedUsers } from "../reducer/AddUserReducer";

const storeReducer = combineReducers({
  // userLogin: userLoginReducers,
});

// const userInfoFromLocalStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

// const initialState = {
//   userLogin: {
//     userInfo: userInfoFromLocalStorage,
//   },
// };
export const store = createStore(storeReducer);
const storeReducer = combineReducers({
    addedUsers,
})
export const store = createStore(storeReducer, composeWithDevTools(
    applyMiddleware(thunk)
))