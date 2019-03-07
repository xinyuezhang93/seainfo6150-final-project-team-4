import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class ProductDetail extends PureComponent {
  componentDidMount() {
    this.props.viewProduct(this.props.product.id);
  }

  render() {
    const {
      categories,
      product,
      selectProductId
    } = this.props;
    
    const category = categories[product.categoryId];
    return (
      <div>
        <img src={category.img.sm} />
        <Link to="/order/1" onClick={selectProductId.bind(null, product.id)}>Order</Link>
      </div>
    );
  }

}

export default ProductDetail;
