import React, {Component} from 'react';
import {Product} from '../Product';
import Subheader from 'material-ui/Subheader';
import {GridList} from 'material-ui/GridList';
import './diet-planner.scss';
import fruits from '../../static/fruits.png';

export class Products extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const whiteStyle = {
      color: 'white'
    };

    const tilesData = [{
        key: '1',
        title: 'Breakfast'
      },
      {
        key: '2',
        title: 'Tasty burger'
      },
      {
        key: '3',
        title: 'Camera'
      },
      {
        key: '4',
        title: 'Morning'
      },
      {
        key: '5',
        title: 'Breakfast'
      },
      {
        key: '6',
        title: 'Tasty burger'
      },
      {
        key: '7',
        title: 'Camera'
      },
      {
        key: '8',
        title: 'Morning'
      }
    ];

    return (<div className='diet__planner__content__step'>
      <GridList cols={8} cellHeight={80}>
        <Subheader style={whiteStyle}>Products</Subheader>
        {tilesData.map((tile) => (
          <Product key={tile.key} image={fruits} title={tile.title}/>
        ))}
      </GridList>
    </div>);
  }
}
