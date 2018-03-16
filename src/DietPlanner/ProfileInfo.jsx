import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import s from './diet-planner.scss';

export class ProfileInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: 'none'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event, index, value) {
    this.setState({gender: value});
  }

  render() {
    const whiteStyle = {
      color: 'white'
    };

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
  }
}
