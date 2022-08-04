import {ActionTypes} from '../constants/productConstants';

const intialState = {
  products: [],
  categories: [],
};

export const productsReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return action.productData;

    default:
      return state;
  }
};

export const productCategories = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CATEGORIES:
      return action.productCategories;
    default:
      return state;
  }
};
export default productsReducer;
