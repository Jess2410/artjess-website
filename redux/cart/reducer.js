//IMPORT DES TYPES D'ACTIONS
import { ADD_ITEM_CART } from "./actions";
import { UPDATE_ITEM_CART } from "./actions";

const initState = {
  cart: [],
};

const cartReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM_CART:
      const indexItemAdded = state.cart.findIndex(
        (item) => item.id === payload.id
      );

      if (indexItemAdded !== -1) {
        const updatedQuantity = {
          ...state.cart[indexItemAdded],
          quantity: state.cart[indexItemAdded].quantity + payload.quantity,
        };
        const newCart = [...state.cart];
        newCart.splice(indexItemAdded, 1, updatedQuantity);
        return {
          cart: newCart,
        };
      } else {
        const newCart = [...state.cart];
        newCart.push(payload);
        console.log(newCart);
        return {
          cart: newCart,
        };
      }

    case UPDATE_ITEM_CART:
    //   return {
    //     ...state,
    //     cart: [...state.cart],
    //   };
  }

  return state;
};

export default cartReducer;
