//TYPES
export const ADD_ITEM_CART = "ADD_ITEM_CART";
export const DELETE_ITEM_CART = "DELETE_ITEM_CART";
export const GET_CART = "GET_CART";

//ACTIONS
export const addItemCart = (payload) => {
  return {
    type: ADD_ITEM_CART,
    payload,
  };
};

export const updateItemCart = (index) => {
  return {
    type: DELETE_ITEM_CART,
    index,
  };
};

export const setGetCart = (payload) => {
  return {
    type: GET_CART,
    payload,
  };
};
