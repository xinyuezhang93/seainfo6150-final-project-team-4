import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './products.css';

const Products = ({ categories, products }) => {
	return products.map(product => {
		const category = categories[product.categoryId];
		return (
			<div key={product.id}>
				<Link
					className="product-image-container"
					to={`/products/${product.categoryId}/${product.id}`}>
					<img className="product-image" src={category.img.sm} />
				</Link>
				<div className="product-title">{product.title}</div>
			</div>
		);
	});
};

Products.propTypes = {
	products: PropTypes.array.isRequired
};

export default Products;
