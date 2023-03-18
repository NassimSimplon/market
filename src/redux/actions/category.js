
import axios from "axios";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";

export const getAllCategories =async (dispatch) => {
    return await  axios
    .get(`https://tinar-stagging.onrender.com/api/category/`)
    .then(response => {
   return   dispatch({
        type: GET_ALL_CATEGORIES,
        payload: response.data
      });
    })
    .catch(err => {
      console.log("Error: ", err);
    });
};

