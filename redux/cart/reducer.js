//IMPORT DES TYPES D'ACTIONS
import { ADD_ITEM_CART, GET_CART, DELETE_ITEM_CART } from "./actions";

const initState = {
  cart: [],
};

const cartReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM_CART:
      const findItem = state.cart.find((el) => el?._id === payload?._id);
      if (!!findItem) {
        const newItem = {
          ...findItem,
          quantity: payload?.quantity + findItem?.quantity,
        };
        const filteredCart = state.cart.filter(
          (el) => el?._id !== newItem?._id
        );
        return {
          cart: [...filteredCart, newItem],
        };
      } else {
        return {
          cart: [...state.cart, payload],
        };
      }
    case GET_CART:
      return {
        cart: payload,
      };

    // case DELETE_ITEM_CART:
    // const deletedItemCart = state.cart.filter(
    //   (el) => el?._id !== findItem?._id
    // );
    // return {
    //   cart: [...state.cart, deletedItemCart],

    // ...state,
    // items: state.items.filter((item, index) => index !== action.payload)
    // };
  }

  return state;
};

export default cartReducer;
