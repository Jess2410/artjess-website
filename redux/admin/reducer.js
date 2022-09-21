//IMPORT DES TYPES D'ACTIONS
import { GET_ADMIN_INFO } from "./actions";
import { LOGOUT } from "./actions";

const initState = {
  admin_infos: null,
};

const adminReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ADMIN_INFO:
      return {
        admin_infos: payload,
      };
    case LOGOUT:
      return {
        admin_infos: null,
      };
    default:
      return state;
  }
};

export default adminReducer;
