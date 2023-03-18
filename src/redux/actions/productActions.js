import axios from "axios";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

export const fetchProducts =async (dispatch) => {
  return await  axios
  .get(`https://tinar-stagging.onrender.com/api/product/all`)
  .then(response => {
 return   dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: response.data
    });
  })
  .catch(err => {
    console.log("Error: ", err);
  });
};


 

// fetch products
 