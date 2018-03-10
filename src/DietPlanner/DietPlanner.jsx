import React, {Component} from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import s from './diet-planner.scss';
import dietPlannerImg from '../../static/diet_planner.jpg';

export class DietPlanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      finished: false,
      stepIndex: 0,
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleNext() {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <div>'Set your profile info'</div>;
      case 1:
        return 'Specify your goals';
      case 2:
        return 'Choose your preferable products';
      default:
        return 'Please, reset your profile';
    }
  }
  render() {
    const {finished, stepIndex} = this.state;
    const dietPlannerStyle = {
      backgroundImage: `url(${dietPlannerImg})`
    };
    const stepLabelClass = {color: 'white', fontWeight: 'bold'};

    return (
      <div className='diet__planner' style={dietPlannerStyle}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel style={stepLabelClass}>Set your profile info</StepLabel>
          </Step>
          <Step>
            <StepLabel style={stepLabelClass}>Specify your goals</StepLabel>
          </Step>
          <Step>
            <StepLabel style={stepLabelClass}>Choose your preferable products</StepLabel>
          </Step>
        </Stepper>
        <div>
          {finished ? (
            <p>
              <a href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}>
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div>
              <div className='diet__planner__content'>
                {this.getStepContent(stepIndex)}
              </div>
              <div className='diet__planner__nav__group'>
                <FlatButton
                  label='Back'
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  onClick={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
