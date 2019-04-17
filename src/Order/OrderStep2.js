import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import classes from './OrderStep2.module.css';
import Footer from '../public/Footer';
let categories = require('./../data/categories.json')
let products = require('./../data/products.json');

class OrderStep2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedSuccessfully: false,
            formisValid: true,
            billingAddress: false,
            phoneisValid: false,
            cellisValid: false,
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

    billingHandler() {
        this.setState({
            billingAddress: !this.state.billingAddress
        });
    }

    streetHandler(e, setUserInfo) {
        setUserInfo('Shipping Street Address', e);
        setUserInfo('Billing Street Address', e);
    }

    cityHandler(e, setUserInfo) {
        setUserInfo('Shipping City', e);
        setUserInfo('Billing City', e);
    }

    stateHandler(e, setUserInfo) {
        setUserInfo('Shipping State', e);
        setUserInfo('Billing State', e);
    }

    checkMobile(e, setUserInfo) {
        if (e.target.value == "") {
            alert("Phone number can not be null");
        } else {
            var re = /\d{10}$/
            if (re.test(e.target.value)) {
                setUserInfo('Phone Number', e);
                this.setState({phoneisValid: true})
            } else {
                alert("Wrong type of phone number");
            }
        }
    }

    checkZip(e, setUserInfo) {
        if (e.target.value == "") {
            alert("Zip code can not be null");
        } else {
            var re = /\d{5}$/
            if (re.test(e.target.value)) {
                setUserInfo('Shipping Zip code', e);
                setUserInfo('Billing Zip code', e);
            } else {
                alert("Wrong type of zip code");
            }
        }
    }

    checkBillingZip(e, setUserInfo) {
        if (e.target.value == "") {
            alert("Zip code can not be null");
        } else {
            var re = /\d{5}$/
            if (re.test(e.target.value)) {
                setUserInfo('Billing Zip code', e);
            } else {
                alert("Wrong type of zip code");
            }
        }
    }

    checkCell(e, setUserInfo) {
        if (e.target.value == "") {
            alert("Cell number can not be null");
        } else {
            var re = /\d{10}$/
            if (re.test(e.target.value)) {
                setUserInfo('Phone Number', e);
                this.setState({cellisValid: true})
            } else {
                alert("Wrong type of cell number");
            }
        }
    }

    render() {
        const {options, selectedProductId, setUserInfo} = this.props;

        let billingAddress1 = (this.state.billingAddress === false)
            ? <div>
                    <div className={classes.block}>
                        <input
                            className={classes.InputText}
                            required="required"
                            type="text"
                            name="buyerSAddress"
                            placeholder="Billing Street Address"
                            onChange={setUserInfo.bind(null, 'Billing Street Address')}/></div>
                    <div className={classes.block}>
                        <input
                            className={classes.InputText}
                            required="required"
                            type="text"
                            name="buyerSAddress"
                            placeholder="Billing City"
                            onChange={setUserInfo.bind(null, 'Billing City')}/></div>
                    <div className={classes.block}>
                        <input
                            className={classes.InputText}
                            required="required"
                            type="text"
                            name="buyerSAddress"
                            placeholder="Billing State"
                            onChange={setUserInfo.bind(null, 'Billing State')}/></div>
                    <div className={classes.block}>
                        <input
                            className={classes.InputText}
                            required="required"
                            type="text"
                            name="buyerSAddress"
                            placeholder="Billing 5 digit zip code"
                            onChange={(e) => this.checkBillingZip(e, setUserInfo)}/></div>
                </div>
            : <div></div>;

        return this.state.submittedSuccessfully
            ? (<Redirect to="/order/summary"/>)
            : (
                <div>
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
                                        placeholder="Street Address"
                                        onChange={(e) => this.streetHandler(e, setUserInfo)}/></div>
                                <div className={classes.block}>
                                    <input
                                        className={classes.InputText}
                                        required="required"
                                        type="text"
                                        name="buyerSAddress"
                                        placeholder="City"
                                        onChange={(e) => this.cityHandler(e, setUserInfo)}/></div>
                                <div className={classes.block}>
                                    <input
                                        className={classes.InputText}
                                        required="required"
                                        type="text"
                                        name="buyerSAddress"
                                        placeholder="State"
                                        onChange={(e) => this.stateHandler(e, setUserInfo)}/></div>
                                <div className={classes.block}>
                                    <input
                                        className={classes.InputText}
                                        required="required"
                                        type="text"
                                        name="buyerSAddress"
                                        placeholder="5 digit zip code"
                                        onBlur={(e) => this.checkZip(e, setUserInfo)}/></div>
                                <div className={classes.block}>
                                    <input
                                        type="checkbox"
                                        id="scales"
                                        name="scales"
                                        onChange={() => this.billingHandler()}/>
                                    <label htmlFor="scales">Billing Address same as shipping address</label>
                                </div>
                                {billingAddress1}
                                <div className={classes.block}>
                                    <input
                                        className={classes.InputText}
                                        required="required"
                                        type="text"
                                        name="buyerNumber"
                                        placeholder="Your Phone Number"
                                        onBlur={(e) => this.checkMobile(e, setUserInfo)}/></div>
                                <div className={classes.block}>
                                    <input
                                        className={classes.InputText}
                                        required="required"
                                        type="text"
                                        name="buyerCellNumber"
                                        placeholder="Your Cell Number"
                                        onBlur={(e) => this.checkCell(e, setUserInfo)}/></div>
                                <div className={classes.block}>
                                    <div>Your birthday</div>
                                    <input
                                        className={classes.InputText}
                                        required="required"
                                        type="date"
                                        name="buyerBirthday"
                                        placeholder="Your birthday"
                                        onChange={setUserInfo.bind(null, 'Birthday')}/>
                                </div>

                                <input
                                    className={classes.submit}
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
