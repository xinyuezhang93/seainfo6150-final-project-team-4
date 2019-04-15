import React from 'react';
import classes from './Car.module.css';
import { Link } from 'react-router-dom';

const Car = ({name,imgSrc}) => (
  <div>
      <Link to={`/products/${name}`} className={classes.CarLink} >
          {name}
      </Link>
    <br/>
    <img className = {classes.carPic} src = {imgSrc} alt="pic"/>
  </div>
);

export default Car;
