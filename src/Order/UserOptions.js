import React from 'react';
import classes from './UserOpions.module.css';

const UserOptions = ({name,value}) => (
    <li className = {classes.lii}>{name}: {value}</li>
);

export default UserOptions;
