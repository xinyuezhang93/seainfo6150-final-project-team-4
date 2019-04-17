import React from 'react';
import logo from './thankyou.png';
import {Link} from 'react-router-dom';
import classes from './ThankYou.module.css';
import Footer from '../public/Footer';

const ThankYou = () => (
    <div>
        <img className={classes.thankyouLogo} src={logo} alt="pic"/>
        <h1>Thanks for buying!</h1>
        <div className={classes.subtext}>We'll do our best to serve every customer and offer the best service to you!</div>
        <Link to={`/`}>
            <button className = {classes.submit} type="button">Back to Home page</button>
        </Link>
        <Footer />
    </div>
);

export default ThankYou;
