import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { addedUsers } from "../reducer/AddUserReducer";

const storeReducer = combineReducers({
    addedUsers,
})
export const store = createStore(storeReducer, composeWithDevTools(
    applyMiddleware(thunk)
))