import fetchallProducts from './redux/sagas/productSaga';
import {ActionTypes} from './redux/constants/productConstants';
import {takeLatest} from 'redux-saga/effects';

export default function* rootSaga() {
  yield takeLatest(ActionTypes.FETCH_PRODUCTS, fetchallProducts);
}
