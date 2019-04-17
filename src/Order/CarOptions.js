import React from 'react';
import classes from './CarOpions.module.css';

const CarOptions = ({name,value}) => (
    <li className = {classes.lii}>{name}: {value}</li>
);

export default CarOptions;
