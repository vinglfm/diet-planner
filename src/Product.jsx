import React from 'react';

export class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='product_title'>{this.props.title}</div>
        <img alt='product image' src={this.props.image} className='product_img'/>
      </div>
    );
  }
}
