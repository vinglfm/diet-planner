import React, {Component} from 'react';

export class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
