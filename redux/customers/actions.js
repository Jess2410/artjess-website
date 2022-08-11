//TYPES
export const GET_CUSTOMER_INFO = "GET_CUSTOMER_INFO";

//ACTIONS
export const setGetCustomerInfo = (payload) => {
  return {
    type: GET_CUSTOMER_INFO,
    payload,
  };
};
