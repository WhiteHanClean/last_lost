import { combineReducers, createStore } from "redux";
import { userLoginReducers } from "./Reducers/userReducers";

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
