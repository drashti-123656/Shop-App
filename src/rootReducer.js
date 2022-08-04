import {combineReducers} from 'redux';
import productsReducer, {
  productCategories,
} from './redux/reducers/productReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  product: productCategories,
});

export default rootReducer;
