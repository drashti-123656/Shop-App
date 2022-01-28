import {ActionTypes} from '../constants/productConstants';

export const productsInitialState = [];

const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return action.productData;
    default:
      return state;
  }
};

export default productsReducer;
