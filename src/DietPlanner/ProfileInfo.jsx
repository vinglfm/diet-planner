import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import s from './diet-planner.scss';

const whiteStyle = {
  color: 'white'
};

export class ProfileInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: 'none',
      height: 0,
      weight: 0
    };

    this.setGender = this.setGender.bind(this);
    this.setHeight = this.setHeight.bind(this);
    this.setWeight = this.setWeight.bind(this);
    this.validate = this.validate.bind(this);
  }

  setGender(event, index, value) {
    this.setState({gender: value}, () => this.validate());

  }

  setHeight(event, value) {
    this.setState({height: value}, () => this.validate());
  }

  setWeight(event, value) {
    this.setState({weight: value}, () => this.validate());
  }

  validate() {
    const {gender, height, weight} = this.state;
    this.props.onValidate(gender !== 'none' && height > 120 && weight > 20);
  }

  render() {
    return (<div className='diet__planner__content__step'>
      <SelectField style={{textAlign: 'left'}}
        floatingLabelText='Your gender?'
        floatingLabelStyle={whiteStyle}
        value={this.state.gender}
        onChange={this.setGender}>
        <MenuItem value={'none'} primaryText='Not Selected' />
        <MenuItem value={'Male'} primaryText='Male' />
        <MenuItem value={'Female'} primaryText='Female' />
      </SelectField>
      <br/>
      <TextField
        type='number'
        value={this.state.height}
        onChange={this.setHeight}
        textareaStyle={whiteStyle}
        floatingLabelStyle={whiteStyle}
        floatingLabelText='Enter your height:'/>
      <br/>
      <TextField
        type='number'
        value={this.state.weight}
        onChange={this.setWeight}
        textareaStyle={whiteStyle}
        floatingLabelStyle={whiteStyle}
        floatingLabelText='Enter your weight:'/>
    </div>);
  }
}
