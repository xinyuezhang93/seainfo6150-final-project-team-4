import React from 'react';
import classes from './HoodOrnament.module.css';
let options = require('./../data/options.json');

const Monkey = ({name}) => (
    <div className={classes.block}>
        <div>{name}</div>
        <img src={options.trunkMonkey.values[name].img.sm} alt="pic"/>
    </div>
);

export default Monkey;
