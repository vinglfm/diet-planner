import React, {Component} from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {ProfileInfo} from './ProfileInfo.jsx';
import {Diets} from './Diets.jsx';
import {Products} from './Products.jsx';
import s from './diet-planner.scss';
import dietPlannerImg from '../../static/diet_planner.jpg';

const stepLabel = {color: 'white', fontWeight: 'bold'};
const dietPlannerStyle = {
  backgroundImage: `url(${dietPlannerImg})`
};

export class DietPlanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stepIndex: 0
    };

    this.childs = [<ProfileInfo/>, <Diets/>, <Products/>];

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleNext() {
    const {stepIndex} = this.state;
    if(stepIndex >= 2) {
      //TODO: move to next component
    } else {
      this.setState({
        stepIndex: stepIndex + 1
      });
    }
  }

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div className='diet__planner' style={dietPlannerStyle}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel style={stepLabel}>Set your profile info</StepLabel>
          </Step>
          <Step>
            <StepLabel style={stepLabel}>Specify your goals</StepLabel>
          </Step>
          <Step>
            <StepLabel style={stepLabel}>Choose your preferable products</StepLabel>
          </Step>
        </Stepper>
        <div className='diet__planner__content'>
          {this.childs[stepIndex]}
        </div>
        <div className='diet__planner__nav__group'>
          <FlatButton
            label='Back'
            disabled={stepIndex === 0}
            onClick={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label='Next'
            primary={true}
            disabled={false}
            onClick={this.handleNext}
          />
        </div>
      </div>
    );
  }
}
