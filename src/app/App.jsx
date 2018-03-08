import React, {Component} from 'react';
import {Navbar} from '../Navbar';
import {Product} from '../Product';
import {Caption} from '../Main/Caption.jsx';
import fruits from '../../static/fruits.png';
import s from './app.scss';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar>Test</Navbar>
        <div className='app'>
          <Caption></Caption>
          <Product title='fruits' image={fruits}></Product>
        </div>
      </div>
    );
  }
}
