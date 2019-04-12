import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './productDetail.css';

class ProductDetail extends PureComponent {
	componentDidMount() {
		this.props.viewProduct(this.props.product.id);
	}

	render() {
		const { categories, product, selectProductId } = this.props;

		const category = categories[product.categoryId];
		return (
			<div className="product-detail-section">
				<div>
					<div className="product-important-details">{product.title}</div>
					<img className="product-detailed-image" src={category.img.lg} />
				</div>
				<div className="product-pricing-details">
					<div>
						{' '}
						<div className="product-important-details">
							<div>Product Id </div>
							<div className="product-detail-field">{product.id} </div>
						</div>
					</div>
					<div>
						<div className="product-important-details">
							<div> MSRP </div>
							<div className="product-detail-field"> ${product.price} </div>
						</div>
					</div>
					<div>
						<div className="product-important-details">
							<div> Sale Price </div>
							<div className="product-detail-field"> ${product.sale} </div>
						</div>
					</div>
					<div className="product-description">{product.description}</div>

					{/* start order button */}
					<Link
						className="product-order-action"
						to="/order/1"
						onClick={selectProductId.bind(null, product.id)}>
						Place an order today
					</Link>
				</div>
				{/* end order button */}
			</div>
		);
	}
}

export default ProductDetail;