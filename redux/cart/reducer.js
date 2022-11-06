//IMPORT DES TYPES D'ACTIONS
import {
  ADD_ITEM_CART,
  GET_CART,
  CART_REMOVE_ITEM,
  UPDATE_QUANTITY,
  UPDATE_QUANTITY_MOINS,
} from "./actions";

const initState = {
  cart: [],
};

const cartReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM_CART:
      const findItem = state.cart?.find((el) => el?._id === payload?._id);
      if (!!findItem) {
        const newItem = {
          ...findItem,
          quantity: payload?.quantity + findItem?.quantity,
        };
        const filteredCart = state.cart?.filter(
          (el) => el?._id !== newItem?._id
        );
        return {
          cart: [...filteredCart, newItem],
        };
      } else {
        return {
          cart: [...state?.cart, payload],
        };
      }

    case UPDATE_QUANTITY:
      const indexEl = state.cart.findIndex((el) => el.name === payload?.name);
      state.cart[indexEl].quantity = state.cart[indexEl].quantity + 1;

      return {
        cart: [...state.cart],
      };
    case UPDATE_QUANTITY_MOINS:
      const indexEl1 = state.cart.findIndex((el) => el.name === payload?.name);
      state.cart[indexEl1].quantity = state.cart[indexEl1].quantity - 1;

      return {
        cart: [...state.cart],
      };
    case GET_CART:
      return {
        cart: payload,
      };

    case CART_REMOVE_ITEM:
      const deletedItem = state.cart.find((el) => el?._id === payload?._id);

      const newCart = state.cart.filter((el) => el?._id !== deletedItem?._id);
      localStorage.setItem("cart-infos", JSON.stringify(newCart));

      return {
        cart: [...newCart],
      };
  }

  return state;
};

export default cartReducer;
