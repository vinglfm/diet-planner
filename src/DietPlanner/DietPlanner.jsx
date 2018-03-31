import React, {Component} from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {updateProfile} from '../reducers/profileReducer.js';
import {ProfileInfo} from './ProfileInfo.jsx';
import {Diets} from './Diets.jsx';
import {Products} from './Products.jsx';
import './diet-planner.scss';
import dietPlannerImg from '../../static/diet_planner.jpg';

const stepLabel = {color: 'white', fontWeight: 'bold'};
const dietPlannerStyle = {
  backgroundImage: `url(${dietPlannerImg})`
};

class DietPlanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      disableNext: true
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.onUpdateInfo = this.onUpdateInfo.bind(this);
    this.getChild = this.getChild.bind(this);
    this.isDisable = this.isDisable.bind(this);
  }

  handleNext() {
    const {step} = this.state;
    if(step >= 2) {
      //TODO: move to next component
    } else {
      this.setState({
        step: step + 1,
        disableNext: this.isDisable(this.props.profile)
      });
    }
  }

  handlePrev() {
    const {step} = this.state;
    if (step > 0) {
      this.setState({step: step - 1});
    }
  }

  onUpdateInfo(profile) {
    this.props.updateProfile(profile);
  }

  isDisable(profile) {
    switch(this.state.step) {
      case 0:
        return !this.validateUserInfo(profile);
      default:
        return false;
    }
  }

  validateUserInfo(profile) {
    return profile.gender !== 'none' && profile.height > 120 && profile.weight > 20;
  }

  getChild() {
    switch(this.state.step) {
      case 0:
        return <ProfileInfo userInfo={this.props.profile} onUpdate={this.onUpdateInfo}/>;
      case 1:
        return <Diets/>;
      case 2:
        return <Products/>;
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      disableNext: this.isDisable(props.profile)
    });
  }

  render() {
    const {step} = this.state;
    return (
      <div className='diet__planner' style={dietPlannerStyle}>
        <Stepper activeStep={step}>
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
          {this.getChild()}
        </div>
        <div className='diet__planner__nav__group'>
          <FlatButton
            label='Back'
            disabled={step === 0}
            onClick={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label='Next'
            primary={true}
            disabled={this.state.disableNext}
            onClick={this.handleNext}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.user
  };
};

export default connect(mapStateToProps, {updateProfile})(DietPlanner);
