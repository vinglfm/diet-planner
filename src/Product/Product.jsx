import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './product.scss';

export class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    };

    this.click = this.click.bind(this);
  }

  click() {
    this.setState({selected: !this.state.selected});
  }

  render() {
    return (
      <div onClick={this.click} className='product' style={this.state.selected ? {opacity: .6}: {opacity: 1}}>
        <img className='product__image' alt='product image' src={this.props.image}/>
        <div className='product__title'>{this.props.title}</div>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
