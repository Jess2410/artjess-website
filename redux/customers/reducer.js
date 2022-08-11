//IMPORT DES TYPES D'ACTIONS
import { GET_CUSTOMER_INFO } from "./actions";

const initState = {
  customer_infos: null,
};

const customerReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CUSTOMER_INFO:
      return {
        customer_infos: payload,
      };
    default:
      return state;
  }
};

export default customerReducer;
