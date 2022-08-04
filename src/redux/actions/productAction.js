import {ActionTypes} from '../constants/productConstants';
export const fetchProducts = () => {
  return {
    type: ActionTypes.FETCH_PRODUCTS,
  };
};

export const fetchCategories = () => {
  return {
    type: ActionTypes.FETCH_CATEGORIES,
  };
};

export const addedtoCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    product:product
  };
};