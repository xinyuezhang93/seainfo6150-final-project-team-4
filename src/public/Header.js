import React from 'react';
import classes from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = () => (
    <div className={classes.head}>
        <Link to={`/`} style={{
            textDecoration: 'none',
            color:"silver"
        }}>
            True Car
        </Link>
        <Link to={`/products`} style={{
            textDecoration: 'none',
            color:"silver"
        }}>
        <button className = {classes.submit}>Products</button>
        </Link>
        <div>Sign In</div>
    </div>

);

export default Header;
