import React from 'react';
import classes from './Home.module.css';
import Car from './Car';
import mainPhoto from './mainPhoto.png';
import Header from './../public/Header';
import Footer from '../public/Footer';
let Data = require('./../data/categories.json');


const Home = () => (
    <div className ={classes.background_image}>
        <Header />
        <div>
            <h3 className = {classes.slogan}>Get the TruePrice—the Actual Price You Will Pay at the Dealership.</h3>
            <img className = {classes.main_picture}
                src={mainPhoto}
                alt="Main Picture"/>
            <h3 className = {classes.slogan}>Shopping for a Car? Choose a Type</h3>
        </div>
        <ul className={classes.wrapping}>
            {// this iterates through the articles JSON and calls your ArticleListItem
            // component for each article
            Object
                .values(Data)
                .map(data => {
                    return <Car key={data.id} name={data.id} imgSrc={data.img.sm}/>
                })}
        </ul>
        <Footer />
    </div>
);

export default Home;
