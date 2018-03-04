import React from 'react';
import {Product} from '../src/Product/Product.jsx';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {expect} from 'chai';

test('render product component with product title and img', () => {
  const product = Enzyme.mount(<Product title='prods' image='img.jpg'/>);

  const title = product.find('.product__title');
  expect(title).to.have.property('length', 1);
  expect(title.props().children).to.equal('prods');

  const img = product.find('.product__image');
  expect(img).to.have.property('length', 1);
  expect(img.props().src).to.equal('img.jpg');
});
