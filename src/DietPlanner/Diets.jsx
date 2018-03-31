import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import './diet-planner.scss';

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

    return (<div className='diet__planner__content__step'>
    <Tabs style={{opacity: 1}}
      value={this.state.program}
      onChange={this.onChange}>
        <Tab label='-5 kg' value='-5' style={whiteStyle}>
          <div className='diet__planner__content__step__body'>
            Lightweight quick program where you can eat whatever you want
          </div>
        </Tab>
        <Tab label='-10 kg' value='-10' style={whiteStyle}>
          <div className='diet__planner__content__step__body'>
            Average on duration and nutrition limitation
          </div>
        </Tab>
        <Tab label='-15 kg' value='-15' style={whiteStyle}>
          <div className='diet__planner__content__step__body'>
            Intense program for the best results 
          </div>
        </Tab>
      </Tabs>
    </div>);
  }
}
