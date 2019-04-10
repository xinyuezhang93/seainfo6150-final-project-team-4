import React from 'react';
import classes from './Error.module.css';

const Error = ({ error }) => (
  <div className = {classes.error}>{error}</div>
);

export default Error;
