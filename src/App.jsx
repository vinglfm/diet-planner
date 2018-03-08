import React, {Component} from 'react';
import {Navbar} from './Navbar';
import {Product} from './Product';
import fruits from '../static/fruits.png';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar>Test</Navbar>
        <Product title='fruits' image={fruits}></Product>
      </div>
    );
  }
}
