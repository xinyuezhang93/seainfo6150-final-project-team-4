import React from 'react';
import style from './Footer.module.css';

const Footer = () => (
    <div className={style.foot}>
        <ul className={style.list}>
                <li><a className={style.contact} href='contact'>Contact</a></li>
                <li><a className={style.about} href='about'>About</a></li>
                <span></span>
                <li>Email:contact@truecar.com</li>
                <li>Phone:(206)757-9484</li>
                <li>Seattle, WA 98109</li>
            </ul>
    </div>
);

export default Footer;
