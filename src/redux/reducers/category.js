import { GET_ALL_CATEGORIES } from "../actions/category";

const initState = {
  category: [],
 
};

const categoryReducer = (state = initState, action) => {
  if (action.type === GET_ALL_CATEGORIES) {
    return {
        ...state,
        category: action.payload
      };
  }

  return state;
};

export default categoryReducer;
