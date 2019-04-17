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
		let availability;
		let saleCheck;
		if (product.available) {
			availability = 'Yes';
		} else {
			availability = 'No';
		}
		if (product.sale === undefined) {
			saleCheck = 'No';
		} else {
			saleCheck = 'Yes';
		}
		return (
			<div className="product-detail-section">
				<div>
					<div className="product-important-details">{product.title}</div>
					<img
						className="product-detailed-image"
						src={category.img.lg}
						alt="product"
					/>
				</div>
				<div className="product-pricing-details">
					<div>
						{' '}
						<div className="product-important-details">
							<div>Product Availability </div>
							{availability === 'Yes' ? (
								<div className="product-detail-field">{availability} </div>
							) : (
								<div className="product-availability">{availability} </div>
							)}
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
							{saleCheck === 'Yes' ? (
								<div>
									{' '}
									<span className="product-OnSale">
										{' '}
										Sale Price ${product.sale}{' '}
									</span>
								</div>
							) : null}
						</div>
					</div>
					<div className="product-description">{product.description}</div>

					{/* start order button */}
					{availability === 'Yes' ? <Link
					className="product-order-action"
					to="/order/1"
					onClick={selectProductId.bind(null, product.id)}>
					Place an order today
				</Link> : null}
				</div>
				{/* end order button */}
			</div>
		);
	}
}

export default ProductDetail;
