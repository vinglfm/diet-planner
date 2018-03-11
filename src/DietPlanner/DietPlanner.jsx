import React, {Component} from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import {GridList} from 'material-ui/GridList';
import {Product} from '../Product';
import {Tabs, Tab} from 'material-ui/Tabs';
import s from './diet-planner.scss';
import dietPlannerImg from '../../static/diet_planner.jpg';
import fruits from '../../static/fruits.png';


//TODO: separate to different component
export class DietPlanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      finished: false,
      stepIndex: 2,
      gender: 'none',
      expectedWeightLoss: '-5'
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleWeightLossChange = this.handleWeightLossChange.bind(this);
  }

  handleNext() {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  }

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  handleChange (event, index, value) {
    this.setState({gender: value});
  }

  handleWeightLossChange (event, index, tab) {
    this.setState({expectedWeightLoss: tab.props.value});
  }

  getStepContent(stepIndex) {
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

    switch (stepIndex) {
      case 0:
        return (<div className='diet__planner__content__step'>
          <SelectField style={{textAlign: 'left'}}
            floatingLabelText='Your gender?'
            floatingLabelStyle={whiteStyle}
            value={this.state.gender}
            onChange={this.handleChange}>
            <MenuItem value={'none'} primaryText='Not Selected' />
            <MenuItem value={'Male'} primaryText='Male' />
            <MenuItem value={'Female'} primaryText='Female' />
          </SelectField>
          <br/>
          <TextField
            textareaStyle={whiteStyle}
            floatingLabelStyle={whiteStyle}
            floatingLabelText='Enter your height:'/>
          <br/>
          <TextField
            textareaStyle={whiteStyle}
            floatingLabelStyle={whiteStyle}
            floatingLabelText='Enter your weight:'/>
        </div>);
      case 1:
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
      case 2:
        return (<div className='diet__planner__content__step'>
          <GridList cols={8} cellHeight={80}>
            <Subheader style={whiteStyle}>Products</Subheader>
            {tilesData.map((tile) => (
              <Product key={tile.key} image={fruits} title={tile.title}/>
            ))}
          </GridList>
        </div>);
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
              <a href='#' onClick={(event) => {
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