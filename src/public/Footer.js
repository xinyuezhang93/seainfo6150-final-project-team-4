import React from 'react';
import style from './Footer.module.css';

const Footer = () => (
    <div className={style.foot}>
        <ul className={style.list}>
                <li className = {style.listcontent}><a className={style.contactabout} href='contact'>Contact</a></li>
                <li className = {style.listcontent}><a className={style.contactabout} href='about'>About</a></li>
                <span></span>
                <li className = {style.listcontent}>Email:contact@truecar.com</li>
                <li className = {style.listcontent}>Phone:(206)757-9484</li>
                <li className = {style.listcontent}>Seattle, WA 98109</li>
            </ul>
    </div>
);

export default Footer;
