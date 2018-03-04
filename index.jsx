import React from 'react';
import ReactDOM from 'react-dom';
import {Product} from './src/Product/Product.jsx';
import fruits from './static/fruits.png';

ReactDOM.render(
  <Product title='product' image={fruits}></Product>,
  document.getElementById('diet-app')
);
