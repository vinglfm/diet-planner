import React, {Component} from 'react';
import {Navbar} from '../Navbar';
import {Caption} from '../Main/Caption.jsx';
import './app.scss';

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className='app'>
          <Caption/>
        </div>
      </div>
    );
  }
}
