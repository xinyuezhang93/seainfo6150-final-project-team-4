import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './categories.css';
import classes from './categories.css';

const Categories = ({ categories }) => (
	<ul className="category-list">
		{categories.map(category => {
			return (
				<li key={category.id}>
					<Link to={`/products/${category.id}`}>
						<div className="category-image-container">
							<img className="category-option" src={category.img.sm} />
							<div className="categoryName-overlay">
								<div className="categoryName-text">{category.name}</div>
							</div>
						</div>
					</Link>
				</li>
			);
		})}
	</ul>
);

Categories.propTypes = {
	categories: PropTypes.array.isRequired
};

export default Categories;
