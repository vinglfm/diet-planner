import React, {Component} from 'react';
import PropTypes from 'prop-types';
import s from './product.scss';

export class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <figure className='product'>
        <img className='product__image' alt='product image' src={this.props.image}/>
        <figcaption className='product__title'>{this.props.title}</figcaption>
      </figure>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
