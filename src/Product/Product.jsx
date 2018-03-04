import React from 'react';
import PropTypes from 'prop-types';
import s from './product.scss';

export class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='product'>
        <img alt='product image' src={this.props.image} className='product__image'/>
        <div className='product__title'>{this.props.title}</div>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
