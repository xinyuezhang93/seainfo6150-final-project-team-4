import React from 'react';
import PropTypes from 'prop-types';
import Products from '../Products/Products';
import './allProducts.css';

const AllProducts = ({ categories, products }) => (
	<div className="products-by-category">
		<Products categories={categories} products={products} />
	</div>
);

AllProducts.propTypes = {
	products: PropTypes.array.isRequired
};

export default AllProducts;
