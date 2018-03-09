import React, {Component} from 'react';
import {Navbar} from '../Navbar';
import {Caption} from '../Main/Caption.jsx';
import s from './app.scss';

export class App extends Component {
  constructor(props) {
    super(props);
  }

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
