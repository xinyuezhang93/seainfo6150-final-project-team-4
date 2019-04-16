import React from 'react';
import PropTypes from 'prop-types';
import Products from '../Products/Products';
import './categoryProducts.css';

const CategoryProducts = ({ category, categories, products }) => (
	<div className="products-by-category">
		<Products categories={categories} products={products} />
	</div>
);

CategoryProducts.propTypes = {
	category: PropTypes.object.isRequired,
	products: PropTypes.array.isRequired
};

export default CategoryProducts;
