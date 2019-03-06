import React from 'react';

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
