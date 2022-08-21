//TYPES
export const GET_CUSTOMER_INFO = "GET_CUSTOMER_INFO";
export const LOGOUT = "LOGOUT";

//ACTIONS
export const setGetCustomerInfo = (payload) => {
  return {
    type: GET_CUSTOMER_INFO,
    payload,
  };
};

export const logOutFunction = () => {
  return {
    type: LOGOUT,
  };
};
