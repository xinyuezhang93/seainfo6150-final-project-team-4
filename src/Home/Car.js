import React from 'react';
import classes from './Car.module.css';
import {Link} from 'react-router-dom';

const Car = ({name, imgSrc}) => (
    <div>
        <Link to={`/products/${name}`}>
            <div className={classes.CarLink}>
                {name}
            </div>
        </Link>
        <br/>
        <Link to={`/products/${name}`}>
            <img className={classes.carPic} src={imgSrc} alt="pic"/></Link>
    </div>
);

export default Car;
