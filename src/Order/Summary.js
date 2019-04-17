import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import classes from './Summary.module.css';
import TotalPrice from "./TotalPrice";
import CarOptions from './CarOptions';
import UserOptions from './UserOptions';
import Footer from '../public/Footer';

let categories = require('./../data/categories.json')

class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedSuccessfully: false
        }
    }

    handleSubmit() {
        this.setState({submittedSuccessfully: true});
    }

    print(){
        window.print();
    }

    render() {
        const {options, products, selectedOptions, selectedProductId, userInfo} = this.props;

        return this.state.submittedSuccessfully
            ? (<Redirect to="/order/thank-you"/>)
            : (
                <div>
                    <form
                        onSubmit={this
                        .handleSubmit
                        .bind(this)}>
                        <div className={classes.imgLeft}>
                            <img
                                key={categories[products[selectedProductId].categoryId].img.lg}
                                src={categories[products[selectedProductId].categoryId].img.lg}
                                alt="pic"/>
                        </div>
                        <div className={classes.wrapping}>
                            {/* This will iterate through all the selected options so you can see what the user chose. */}
                            <ul>
                                {Object
                                    .keys(selectedOptions)
                                    .map((option) => {
                                        const originalOption = options[option];
                                        const selectedValue = selectedOptions[option] === true
                                            ? "Yes"
                                            : selectedOptions[option];
                                        return (<CarOptions key = {originalOption.name} name={originalOption.name} value={selectedValue}/>);
                                    })
}
                            </ul>

                            {/* This will iterate through all the user info so you can see what the user entered. */}
                            <ul>
                                {Object
                                    .keys(userInfo)
                                    .map((info) => (<UserOptions key = {info} name={info} value={userInfo[info]}/>))
}
                            </ul>
                        </div>
                        <TotalPrice
                            options={options}
                            product={products[selectedProductId]}
                            selectedOptions={selectedOptions}/>
                        <input className={classes.submit} onClick = {() => this.print()} type="button" value="print"/>
                        <input className={classes.submit} type="submit" value="Submit order"/>
                    </form>
                    <Footer/>
                </div>
            )
    }
}

Summary.propTypes = {
    options: PropTypes.object.isRequired,
    products: PropTypes.object.isRequired,
    selectedOptions: PropTypes.object.isRequired,
    selectedProductId: PropTypes.string
};

export default Summary;
