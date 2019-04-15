import React from 'react';
import styles from './Contact.module.css';

const Contact = () => (
  <div>
    <h1 className = {styles.headl}>Need help? Pick one of the following:</h1>
    <div className = {styles.background_image}></div>
    <div className = {styles.div_s}>
      <div className = {styles.cont_block}>
        <i className="fas fa-comments"></i>  Live Chat - We are online 24/7
        <br></br>
        <p>Not ready yet...Coming soon.</p>
      </div>
      <div className = {styles.cont_block}>
        <i className="fas fa-map-marked-alt"></i>  Address 
        <br></br>
      </div>
      <div className = {styles.cont_block}><i className="fas fa-phone-square"></i>  Call now at 2062060206</div>
      <div className = {styles.cont_block}><i className="fab fa-facebook-square"></i>  <a href = 'https://www.facebook.com/'>Facebook </a></div>
      <div className = {styles.cont_block}><i className="fas fa-envelope"></i>  Send us E-mail at SEAINFO6150@TRUECAR.COM</div>
      <div className = {styles.cont_block}><i className="fab fa-twitter-square"></i> <a href = 'https://twitter.com/'>Twitter </a></div>
      </div>
  </div>
);

export default Contact;
