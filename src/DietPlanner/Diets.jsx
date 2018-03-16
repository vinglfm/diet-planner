import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import s from './diet-planner.scss';

export class Diets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expectedWeightLoss: '-5'
    };

    this.handleWeightLossChange = this.handleWeightLossChange.bind(this);
  }

  handleWeightLossChange (event, index, tab) {
    this.setState({expectedWeightLoss: tab.props.value});
  }

  render() {
    const whiteStyle = {
      color: 'white'
    };

    return (<div className='diet__planner__content__step'>
    <Tabs style={{opacity: 1}}
      value={this.state.expectedWeightLoss}
      onChange={this.handleWeightLossChange}>
        <Tab label='-5 kg' value='-5' style={whiteStyle}>
          <div>
            <p>
              Page with advises and budges to specify(your active status, some other)
            </p>
          </div>
        </Tab>
        <Tab label='-10 kg' value='-10' style={whiteStyle}>
          <div>
            <p>
              Page with advises and budges to specify(your active status, some other)
            </p>
          </div>
        </Tab>
        <Tab label='-15 kg' value='-15' style={whiteStyle}>
          <div>
            <p>
              Page with advises and budges to specify(your active status, some other)
            </p>
          </div>
        </Tab>
      </Tabs>
    </div>);
  }
}
