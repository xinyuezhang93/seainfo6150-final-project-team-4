import React from 'react';
import classes from './UserOpions.module.css';

const UserOptions = ({name,value}) => (
    <li key={name}>{name}: {value}</li>
);

export default UserOptions;
