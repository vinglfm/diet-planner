import React, {Component} from 'react';
import {Product} from '../Product';
import Subheader from 'material-ui/Subheader';
import {Tabs, Tab} from 'material-ui/Tabs';
import {GridList} from 'material-ui/GridList';

import './diet-planner.scss';
import fruits from '../../static/fruits.png';

export class Diets extends Component {

  constructor(props) {
    super(props);

    this.state = {
      program: '-5'
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange (event, index, tab) {
    this.setState({program: tab.props.value});
  }

  render() {
    const whiteStyle = {
      color: 'white'
    };

    const minus5Tiles = [
      {key: '1', title: 'Breakfast'},{key: '2', title: 'Tasty burger'},{key: '3', title: 'Camera'},{key: '4', title: 'Morning'},
      {key: '5', title: 'Borning'},{key: '6', title: 'Tasty Spoonger'},{key: '7', title: 'Smoothy'},{key: '8', title: 'Smarpfhy'},{key: '9', title: 'Smarpfsdy'}];

    const minus10Tiles = [
      {key: '1', title: 'Breakfast'},{key: '2', title: 'Huge and tasty fatty burger with carrot'},{key: '3', title: 'Big % tasty smoothy'},{key: '4', title: 'Tasty fatty burger'},
      {key: '5', title: 'Borning'},{key: '6', title: 'Tasty Spoonger'}];

    const minus20Tiles = [
      {key: '1', title: 'Breakfast'},{key: '2', title: 'Tasty burger'},{key: '3', title: 'Camera'},{key: '4', title: 'Borning'},
      {key: '5', title: 'Tasty Spoonger'}];

    return (<div className='diet__planner__content__step'>
    <Tabs style={{opacity: 1}} value={this.state.program} onChange={this.onChange}>
        <Tab label='-5 kg' value='-5' style={whiteStyle}>
          <div className='diet__planner__content__step__body'>
            <GridList cols={4} cellHeight={80}>
              {minus5Tiles.map(tile => (
                <Product key={tile.key} image={fruits} title={tile.title}/>
              ))}
            </GridList>
          </div>
        </Tab>
        <Tab label='-10 kg' value='-10' style={whiteStyle}>
          <div className='diet__planner__content__step__body'>
            <GridList cols={4} cellHeight={80}>
              {minus10Tiles.map(tile => (
                <Product key={tile.key} image={fruits} title={tile.title}/>
              ))}
            </GridList>
          </div>
        </Tab>
        <Tab label='-20 kg' value='-20' style={whiteStyle}>
          <div className='diet__planner__content__step__body'>
            <GridList cols={4} cellHeight={80}>
                {minus20Tiles.map(tile => (
                  <Product key={tile.key} image={fruits} title={tile.title}/>
                ))}
            </GridList>
          </div>
        </Tab>
      </Tabs>
    </div>);
  }
}
