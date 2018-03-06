import React from 'react';
import ReactDOM from 'react-dom';
import {Product} from './src/Product';
import fruits from './static/fruits.png';

ReactDOM.render(
  <Product title='fruits' image={fruits}></Product>,
  document.getElementById('diet-app')
);
