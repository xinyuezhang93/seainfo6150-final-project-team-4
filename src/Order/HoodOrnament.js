import React from 'react';
import classes from './HoodOrnament.module.css';
let options = require('./../data/options.json');

const HoodOrnament = ({name,clicked}) => (
    <div className={classes.block} >
        <div onClick={clicked}>{name}</div>
        <img src={options.hoodOrnament.values[name].img} alt="pic"/>
    </div>
);

export default HoodOrnament;
