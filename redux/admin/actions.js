//TYPES
export const GET_ADMIN_INFO = "GET_ADMIN_INFO";
export const LOGOUT = "LOGOUT";

//ACTIONS
export const setGetAdminInfo = (payload) => {
  return {
    type: GET_ADMIN_INFO,
    payload,
  };
};

export const logOutFunction = () => {
  return {
    type: LOGOUT,
  };
};
