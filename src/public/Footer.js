import React from 'react';
import style from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className={style.foot}>
        <ul className={style.list}>
                <li className = {style.listcontent}><Link to={`/contact`} className={style.contactabout}>Contact</Link></li>
                <li className = {style.listcontent}><Link to={`/about`} className={style.contactabout}>About</Link></li>
                <span></span>
                <li className = {style.listcontent}>Email:contact@truecar.com</li>
                <li className = {style.listcontent}>Phone:(206)757-9484</li>
                <li className = {style.listcontent}>Seattle, WA 98109</li>
            </ul>
    </div>
);

export default Footer;
