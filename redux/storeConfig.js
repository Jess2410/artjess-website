import { createStore, combineReducers } from "redux";
import customerReducer from "./customers/reducer";

const rootReducers = combineReducers({ customerReducer });

export const store = createStore(rootReducers);
