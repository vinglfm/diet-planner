import React, {Component} from 'react';

export class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main__button' onClick={this.props.click}>Sign up</div>
    )
  }
}
