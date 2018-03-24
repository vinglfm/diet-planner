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

    this.setGender = this.setGender.bind(this);
    this.setHeight = this.setHeight.bind(this);
    this.setWeight = this.setWeight.bind(this);
  }

  setGender(event, index, value) {
    this.props.onUpdate({gender: value});
  }

  setHeight(event, value) {
    this.props.onUpdate({height: value});
  }

  setWeight(event, value) {
    this.props.onUpdate({weight: value});
  }

  render() {
    const {gender, weight, height} = this.props.userInfo;
    return (<div className='diet__planner__content__step'>
      <SelectField style={{textAlign: 'left'}}
        floatingLabelText='Your gender?'
        floatingLabelStyle={whiteStyle}
        value={gender}
        onChange={this.setGender}>
        <MenuItem value={'none'} primaryText='Not Selected' />
        <MenuItem value={'Male'} primaryText='Male' />
        <MenuItem value={'Female'} primaryText='Female' />
      </SelectField>
      <br/>
      <TextField
        type='number'
        value={height}
        onChange={this.setHeight}
        textareaStyle={whiteStyle}
        floatingLabelStyle={whiteStyle}
        floatingLabelText='Enter your height:'/>
      <br/>
      <TextField
        type='number'
        value={weight}
        onChange={this.setWeight}
        textareaStyle={whiteStyle}
        floatingLabelStyle={whiteStyle}
        floatingLabelText='Enter your weight:'/>
    </div>);
  }
}
