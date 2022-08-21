import { createStore, combineReducers } from "redux";
import customerReducer from "./customers/reducer";
import cartReducer from "./cart/reducer";

// const rootReducers = combineReducers({ customerReducer }, { cartReducer });

const rootReducers = combineReducers({
  cart: cartReducer,
  customer: customerReducer,
});

export const store = createStore(rootReducers);
