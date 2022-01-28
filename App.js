import React from 'react';
import Product from './src/component/product';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Product />
    </Provider>
  );
};

export default App;
