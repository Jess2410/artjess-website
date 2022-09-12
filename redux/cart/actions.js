//TYPES
export const ADD_ITEM_CART = "ADD_ITEM_CART";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";
export const GET_CART = "GET_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const UPDATE_QUANTITY_MOINS = "UPDATE_QUANTITY_MOINS";
export const AMOUNT_CART = "AMOUNT_CART";

//ACTIONS
export const addItemCart = (payload) => {
  return {
    type: ADD_ITEM_CART,
    payload,
  };
};

export const removeItemCart = (payload) => {
  return {
    type: CART_REMOVE_ITEM,
    payload,
  };
};

export const setGetCart = (payload) => {
  return {
    type: GET_CART,
    payload,
  };
};

export const setUpdateQuantity = (payload) => {
  return {
    type: UPDATE_QUANTITY,
    payload,
  };
};

export const setUpdateQuantityMoins = (payload) => {
  return {
    type: UPDATE_QUANTITY_MOINS,
    payload,
  };
};
export const totalAmount = (payload) => {
  return {
    type: AMOUNT_CART,
    payload,
  };
};
