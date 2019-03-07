import React from 'react';
import PropTypes from 'prop-types';

import Products from '../Products/Products';

const CategoryProducts = ({ category, categories, products }) => (
  <Products categories={categories} products={products} />
);

CategoryProducts.propTypes = {
  category: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
};

export default CategoryProducts;
