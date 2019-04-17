import React from 'react';
import classes from './About.module.css';
import Footer from '../public/Footer';
const About = () => (
    <div>

        <div className={classes.About_part}>
            <h2>About Us</h2>
            <img
                src="https://di-uploads-development.dealerinspire.com/daviddodge/uploads/2018/03/Homepage-Hero.jpg"
                alt="Company Picture"/>
            <p>The car home provides car owners with a comprehensive, accurate and fast
                one-stop service for all aspects of car selection, car purchase, car use, and
                car change. The car home is committed to empowering users and customers through
                product services, data technology, ecological rules and resources, and building
                “car media, car e-commerce, car finance, car life” 4 circles, from
                “content-based vertical field companies” "Transformation and upgrade to
                "data-based 'car' company"
            </p>
        </div>

        <div className={classes.Team_part}>
            <h2>Our Teams</h2>
            <img
                src="https://www.dynamarkmonitoring.com/wp-content/uploads/2014/09/Build-A-Team-4.4.2.06.jpg"
                alt="Team Picture"/>
            <p>The professional evaluation team of the car home website was established in
                2005. The team consists of automotive professional media practitioners and
                professional drivers. The test pursues the principle of “professional, objective
                and fair”. Once launched, it has been unanimously recognized by netizens,
                manufacturers and peers. It also shows the absolute leading position of car
                testing in automotive network media, so that everyone can see that car network
                media can also make world-class car testing.
            </p>
        </div>

        <div className={classes.Careers_part}>
            <h2>Careers</h2>
            <img
                src="https://www.crh.org/images/default-source/default-album/find-a-career-650.png?sfvrsn=0"
                alt="Career Picture"/>
            <p>Dreamers Wanted:<br/>
                We exist to be the most transparent brand in automotive, to serve as a catalyst
                that dramatically improves the way people discover, buy, and sell cars. Our
                amazing team of people, the very heart of our company, breathe life into our
                vision every day with their ingenuity and collaborative spirit.
            </p>
        </div>
        <Footer/>

    </div>

);

export default About;
