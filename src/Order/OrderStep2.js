import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import classes from './OrderStep2.module.css';
import Header from './../public/Header';
import Footer from '../public/Footer';
let categories = require('./../data/categories.json')
let products = require('./../data/products.json');

class OrderStep2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedSuccessfully: false,
            formisValid: true,
            startDate: new Date()
        };
        this.handleChange = this
            .handleChange
            .bind(this);
    }

    handleSubmit() {
        this.setState({submittedSuccessfully: true});

    }

    handleChange(date) {
        this.setState({startDate: date});
    }

    render() {
        const {options, selectedProductId, setUserInfo} = this.props;
        return this.state.submittedSuccessfully
            ? (<Redirect to="/order/summary"/>)
            : ( 
                <div>
                <Header/>
                <form
                    onSubmit={this
                    .handleSubmit
                    .bind(this)}>
                    <div className={classes.container}>
                        <div className={classes.imgLeft}>
                            <div className={classes.title}>
                                {products[selectedProductId].description}
                            </div>
                            <img
                                key={categories[products[selectedProductId].categoryId].img.lg}
                                src={categories[products[selectedProductId].categoryId].img.lg}
                                alt="pic"/>
                        </div>
                        <div className={classes.ContactData}>
                            <h4>Enter your Contact Data</h4>
                            <div className={classes.block}>
                                <input
                                    className={classes.InputText}
                                    required="required"
                                    type="text"
                                    name="buyerName"
                                    placeholder="Your name"
                                    onChange={setUserInfo.bind(null, 'Name')}/>
                            </div>
                            <div className={classes.block}>
                                <input
                                    className={classes.InputText}
                                    required="required"
                                    type="text"
                                    name="buyerSAddress"
                                    placeholder="Shipping Address"
                                    onChange={setUserInfo.bind(null, 'Shipping Address')}/></div>
                            <div className={classes.block}>
                                <input
                                    className={classes.InputText}
                                    required="required"
                                    type="text"
                                    name="buyerBAddress"
                                    placeholder="Billing Address"
                                    onChange={setUserInfo.bind(null, 'Billing Address')}/></div>
                            <div className={classes.block}>
                                <input
                                    className={classes.InputText}
                                    required="required"
                                    type="text"
                                    name="buyerNumber"
                                    placeholder="Your Phone Number"
                                    onChange={setUserInfo.bind(null, 'Phone Number')}/></div>
                            <div className={classes.block}>
                                <input
                                    className={classes.InputText}
                                    required="required"
                                    type="text"
                                    name="buyerCellNumber"
                                    placeholder="Your Cell Number"
                                    onChange={setUserInfo.bind(null, 'Cell Number')}/></div>
                            <div className={classes.block}>
                                <input
                                    className={classes.InputText}
                                    required="required"
                                    type="date"
                                    name="buyerBirthday"
                                    onChange={setUserInfo.bind(null, 'Birthday')}/>
                            </div>
                            <input
                                className={classes.submit}
                                disabled={!this.state.formisValid}
                                type="submit"
                                value="Go to Summary"/>
                        </div>
                    </div>
                </form>
                <Footer/>
                </div>
            )
    }
}

OrderStep2.propTypes = {
    options: PropTypes.object.isRequired,
    selectedProductId: PropTypes.string
};

export default OrderStep2;
