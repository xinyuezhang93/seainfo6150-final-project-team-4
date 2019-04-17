import React, {Component} from 'react';
import styles from './Header.module.css';
import PropTypes from 'prop-types';
import ViewedProducts from '../ViewedProducts/ViewedProducts.js';
import { Link } from 'react-router-dom';
import { SyncWaterfallHook } from 'tapable';

class Header extends Component {
    render() {
        const {
          categories,
          viewedProducts,
          allProducts
        } = this.props;

      return (
        <div className = {styles.two}>
            <div className={styles.navbar}>
              
                <Link to={`/`} className = {styles.logo}>
                      True Car
                </Link>
              <div className = {styles.boxes}>
                <Link to={`/products`} className = {styles.products}>
                Products
                </Link></div>
                <div className = {styles.boxes}>
                <a className = {styles.button} href="#popup1">Recently Viewed</a></div>
            </div>

            <div id = 'popup1' className = {styles.overlay}>
            <div className = {styles.popup}>
                {viewedProducts.length === 0 ? <h1>Welcome!</h1>: <h2 className={styles.Title}>Viewed Products</h2>}
                <ViewedProducts className = {styles.vpdiv}
                    categories={categories}
                    products={
                    viewedProducts
                    .map(productId => allProducts[productId])
                    }
                />
                <a className={styles.close} href="#">&times;</a>

            </div>
            </div> 
        </div>
      )
    }
  }
  
    Header.propTypes = {
      categories: PropTypes.object.isRequired,
    };

export default Header;
