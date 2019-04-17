import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './viewedProducts.css';

const ViewedProducts = ({ categories, products }) => {
	if (!products.length) {
		return null;
	} else {
		return products.slice(0, 5).map((product, index) => {
			const category = categories[product.categoryId];
			return (
				<div className="viewed-items-section" key={`${product.id}-${index}`}>
					<Link
						className="viewed-items-link"
						to={`/products/${category.id}/${product.id}`}>
						<img className="viewed-product-image" src={category.img.sm} alt = {product.id} />
						<p>{product.title}</p>
					</Link>
				</div>
			);
		});
	}
};

ViewedProducts.propTypes = {
	categories: PropTypes.object.isRequired,
	products: PropTypes.array.isRequired
};

export default ViewedProducts;
