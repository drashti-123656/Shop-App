import axios from 'axios';
import {call, put} from 'redux-saga/effects';
import {ActionTypes} from '../constants/productConstants';

export function* fetchallProducts() {
  try {
    const {data} = yield call(axios.get, 'https://fakestoreapi.com/products');
    yield put({type: ActionTypes.SET_PRODUCTS, productData: data});
  } catch (e) {
    console.log(e.message);
  }
}
export function* fetchallCategories() {
  try {
    const {data} = yield call(
      axios.get,
      'https://fakestoreapi.com/products/categories',
    );
    yield put({type: ActionTypes.SET_CATEGORIES, productCategories: data});
  } catch (e) {
    console.log(e.message);
  }
}
  