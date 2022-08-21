//TYPES
export const ADD_ITEM_CART = "ADD_ITEM_CART";
export const UPDATE_ITEM_CART = "UPDATE_ITEM_CART";

//ACTIONS
export const addItemCart = (payload) => {
  return {
    type: ADD_ITEM_CART,
    payload,
  };
};

export const updateItemCart = () => {
  return {
    type: UPDATE_ITEM_CART,
  };
};
