import React from 'react';
import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <div className = {styles.bock}>
    <h1>Wrong way! </h1>
    <h2>Please Drive Back to <Link to={`/`} className = {styles.link}>HomePage</Link>
    <br></br>
    Or have a rest here.</h2></div>
    <div className = {styles.background_image}></div>
  </div>
);

export default NotFound;
