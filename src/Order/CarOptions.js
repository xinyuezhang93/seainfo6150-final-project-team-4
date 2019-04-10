import React from 'react';
import classes from './CarOpions.module.css';

const CarOptions = ({name,value}) => (
    <li className = {classes.lii} key={name}>{name}: {value}</li>
);

export default CarOptions;
