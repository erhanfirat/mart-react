import axios from "axios";

export const fetchProductsThunkAction = () => (dispatch, getState) => {
  axios
    .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
    .then((res) => {
      // dispatch
      dispatch({
        type: "SET_PRODUCTS",
        payload: res.data,
      });
    });
};
