import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Categories = ({ categories }) => (
  <ul>
    {
      categories.map(category => {
        return (
          <li key={category.id}>
            <Link to={`/products/${category.id}`}>
              {category.name}
            </Link>
          </li>
        );
      })
    }
  </ul>
);

Categories.propTypes = {
  categories: PropTypes.array.isRequired
};

export default Categories;
