import React from 'react';
import CompareToggle from './CompareToggle';

const ProductDetail = ({
  id,
  products
}) => {
  const product = products[id];
  return (
    <li>
      {id}
    </li>
  );
}

export default ProductDetail;
