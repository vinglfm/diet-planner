import React from 'react';
import PropTypes from 'prop-types';

export class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='product'>
        <div className='product__title'>{this.props.title}</div>
        <img alt='product image' src={this.props.image} className='product__image'/>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
