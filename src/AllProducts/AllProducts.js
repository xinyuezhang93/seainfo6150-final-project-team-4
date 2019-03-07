import React from 'react';
import PropTypes from 'prop-types';

import Products from '../Products/Products';

const AllProducts = ({ categories, products }) => (
  <Products categories={categories} products={products} />
);

AllProducts.propTypes = {
  products: PropTypes.array.isRequired
};

export default AllProducts;
