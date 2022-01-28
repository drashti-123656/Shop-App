import {combineReducers} from 'redux';

import productsReducer from './redux/reducers/productReducer';

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
