import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import classes from './OrderStep1.module.css'
import Header from './../public/Header';
import Footer from '../public/Footer';
import HoodOrnament from './HoodOrnament';
import Monkey from './Monkey';
import Error from './../Error/Error';
let categories = require('./../data/categories.json')
let products = require('./../data/products.json');

class OrderStep1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedSuccessfully: false,
            now: 1,
            modalContent1: false,
            mkContent1: false,
            radioOn: "no",
            hoodOn: "no",
            monkeyOn: "no",
            cupHolderOn: "no",
            cigOn: "no",
            mogOn: "no"
        }
    }

    handleSubmit() {
        this.setState({submittedSuccessfully: true});
    }

    purchaseHandler1 = (e) => {
        this.setState({now: 1});

    }

    purchaseHandler2 = () => {
        this.setState({now: 2});
    }

    purchaseHandler3 = () => {
        this.setState({now: 3});
    }

    purchaseHandler4 = () => {
        this.setState({now: 4});
    }

    choosehoodHandler = (e) => {
        this.setState({
            modalContent1: !this.state.modalContent1
        });
    }

    chooseMkHandler = (e) => {
        this.setState({
            mkContent1: !this.state.mkContent1
        });
    }

    hoodhandler = (e, setProductOption) => {
        this.setState({hoodOn: e.target.value})
        setProductOption('hasHoodOrnament', e)
    }

    mogOnhandler = (e, setProductOption) => {
        this.setState({mogOn: e.target.value})
        setProductOption('hasMonogrammedSteeringWheelCover', e)
    }

    monkeyHandler = (e, setProductOption) => {
        this.setState({monkeyOn: e.target.value})
        setProductOption('hasTrunkMonkey', e)
    }

    RadioHandler = (e, setProductOption) => {
        this.setState({radioOn: e.target.value})
        setProductOption('hasRadio', e)
    }

    cupHolderOnHandler = (e, setProductOption) => {
        this.setState({cupHolderOn: e.target.value})
        setProductOption('hasCupholders', e)
    }

    cigOnHandler = (e, setProductOption) => {
        this.setState({cigOn: e.target.value})
        setProductOption('hasCigaretteLighters', e)
    }

    colorHandler = (e, setProductOption) => {
        e.target.style.border = "5px solid paleturquoise"
        setProductOption('color', e)
    }

    InteriorcolorHandler = (e, setProductOption) => {
        e.target.style.border = "5px solid paleturquoise"
        setProductOption('interiorFabricColor', e)
    }

    dashBoardcolorHandler = (e, setProductOption) => {
        e.target.style.border = "5px solid paleturquoise"
        setProductOption('dashboardColor', e)
    }

    dashBoardLightcolorHandler = (e, setProductOption) => {
        e.target.style.border = "5px solid paleturquoise"
        setProductOption('dashboardLightsColor', e)
    }

    floorcolorHandler = (e, setProductOption) => {
        e.target.style.border = "5px solid paleturquoise"
        setProductOption('floormatsColor', e)
    }

    render() {
        const {options, selectedProductId, setProductOption, error} = this.props;
        let choose;
        let seats = <input
            type="number"
            name="seats"
            min="1"
            max="10"
            onChange={setProductOption.bind(null, 'numSeats')}/>;;
        let Tintedwindows = <select
            name="hasTintedWindows"
            onChange={setProductOption.bind(null, 'hasTintedWindows')}>
            <option disabled selected value></option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>;
        let colors = <div>
            <input
                className={classes.colorRed}
                value="Red"
                onClick={(e) => this.colorHandler(e, setProductOption)}/>
            <input
                className={classes.colorGreen}
                value="Green"
                onClick={(e) => this.colorHandler(e, setProductOption)}/>
            <input
                className={classes.colorBlack}
                value="Black"
                onClick={(e) => this.colorHandler(e, setProductOption)}/>
            <input
                className={classes.colorGray}
                value="Gray"
                onClick={(e) => this.colorHandler(e, setProductOption)}/>
        </div>;
        let radioOnList = this.state.radioOn === "yes"
            ? <div className={classes.block}>
                    <label htmlFor="Radio">Choose your Radio Type:</label>
                    <select name="" onChange={setProductOption.bind(null, 'radioType')}>
                        <option disabled selected value></option>
                        <option value="Medium">Medium</option>
                    </select>
                </div>
            : <div></div>
        let radioOnList1 = this.state.radioOn === "yes"
            ? <div className={classes.block}>
                    <label htmlFor="Radio">Choose your Radio Type:</label>
                    <select name="" onChange={setProductOption.bind(null, 'radioType')}>
                        <option disabled selected value></option>
                        <option value="Medium">Medium</option>
                        <option value="Fancy">Fancy</option>
                    </select>
                </div>
            : <div></div>
        let radioOnList2 = this.state.radioOn === "yes"
            ? <div className={classes.block}>
                    <label htmlFor="Radio">Choose your Radio Type:</label>
                    <select name="" onChange={setProductOption.bind(null, 'radioType')}>
                        <option disabled selected value></option>
                        <option value="Basic">Basic</option>
                        <option value="Medium">Medium</option>
                    </select>
                </div>
            : <div></div>
        let buttonHood = this.state.hoodOn === "yes"
            ? <button
                    type="button"
                    className={classes.inputmargin}
                    onClick=
                    {(e) => this.choosehoodHandler(e)}>Choose</button>
            : <div></div>
        let buttonMonkey = this.state.monkeyOn === "yes"
            ? <button
                    type="button"
                    className={classes.inputmargin}
                    onClick=
                    {(e) => this.chooseMkHandler(e)}>Choose</button>
            : <div></div>
        let radio = <div>
            <div className={classes.block}>
                <label htmlFor="Radio">Radio:</label>
                <select name="" onChange={(e) => this.RadioHandler(e, setProductOption)}>
                    <option disabled selected value></option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            {radioOnList}
        </div>;
        let airConditioning = <select name="" onChange={setProductOption.bind(null, 'hasAirConditioning')}>
            <option disabled selected value></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>

        let numCups = this.state.cupHolderOn === "no"
            ? <div></div>
            : <input
                type="number"
                name="numberCup"
                placeholder="select your number"
                className={classes.inputmargin}
                onChange={setProductOption.bind(null, 'numCupholders')}/>

        let errorarea = error
            ? <Error error={error}/>
            : <Error error="Enjoy your selecting"/>

        let sigLight = this.state.cigOn === "no"
            ? <div></div>
            : <input
                type="number"
                name="numberCig"
                className={classes.inputmargin}
                placeholder="select your number"
                onChange={setProductOption.bind(null, 'numCigaretteLighters')}/>

        let modalContent1 = (this.state.modalContent1) === false
            ? <div className ={classes.modalnone}></div>
            : <div className={classes.modalon}>
                <div className={classes.block}>
                    <label htmlFor="modal">Make your choice:</label>
                    <select name="" onChange={setProductOption.bind(null, 'hoodOrnament')}>
                        <option disabled selected value></option>
                        <option value="battleship">battleship</option>
                        <option value="boot">boot</option>
                        <option value="cannon">cannon</option>
                        <option value="horse">horse</option>
                        <option value="iron">iron</option>
                        <option value="racecar">racecar</option>
                        <option value="dog">dog</option>
                        <option value="thimble">thimble</option>
                        <option value="hat">hat</option>
                        <option value="wheelbarrow">wheelbarrow</option>
                    </select>
                </div>
                {Object
                    .values(options.hoodOrnament.values)
                    .map(data => {
                        return <HoodOrnament hoodhandlerkey={data.id} name={data.id}/>
                    })}
                <button
                    className={classes.back}
                    type="button"
                    onClick=
                    {(e) => this.choosehoodHandler(e)}>Ok</button>
            </div>;

        let mogInput = (this.state.mogOn) === "no"
            ? <div></div>
            : <input
                type="text"
                className={classes.inputmargin}
                name="monogram"
                placeholder="Enter the monogram"
                onChange={setProductOption.bind(null, 'monogram')}/>

        let mkContent1 = (this.state.mkContent1) === false
            ? <div className ={classes.modalnone}></div>
            : <div className={classes.modalon}>
                <div className={classes.block}>
                    <label htmlFor="MK">Type in your choice:</label>
                    <select name="" onChange={setProductOption.bind(null, 'trunkMonkey')}>
                        <option disabled selected value></option>
                        <option value="capuchin">capuchin</option>
                        <option value="spider">spider</option>
                        <option value="rhesus">rhesus</option>
                        <option value="macaque">macaque</option>
                        <option value="baboon">baboon</option>
                    </select>
                </div>
                {Object
                    .values(options.trunkMonkey.values)
                    .map(data => {
                        return <Monkey key={data.id} name={data.id}/>
                    })}
                <button
                    className={classes.back}
                    type="button"
                    onClick=
                    {(e) => this.chooseMkHandler(e)}>Ok</button>
            </div>;
        switch (products[selectedProductId].categoryId) {
            case "sportsCar":
                seats = <div>You can only have 2 seats</div>;
                radio = <div>
                    <div className={classes.block}>
                        <label htmlFor="Radio">Radio:</label>
                        <select name="" onChange={(e) => this.RadioHandler(e, setProductOption)}>
                            <option disabled selected value></option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    {radioOnList1}
                </div>
                break;
            case "fireEngine":
                seats = <div>You can only have 2 seats</div>;
                Tintedwindows = <div>You can not have Tinted windows</div>
                colors = <div>You can not choose color on this type</div>
                radio = <div className={classes.block}>
                    <label htmlFor="Radio">Choose your Radio Type:</label>
                    <div>You can not choose radio on this type</div>
                </div>
                break;
            case "limousine":
                seats = <div>You can only have 8 seats</div>;
                break;
            case "jeep":
                Tintedwindows = <div>You can not have Tinted windows</div>;
                airConditioning = <div>You can not have airConditioning in Jeep</div>
                break;
            case "taxi":
                colors = <div>You can not choose color on this type</div>;
                break;
            case "sedan":
                radio = <div>
                    <div className={classes.block}>
                        <label htmlFor="Radio">Radio:</label>
                        <select name="" onChange={(e) => this.RadioHandler(e, setProductOption)}>
                            <option disabled selected value></option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    {radioOnList2}
                </div>;
                break;
            case "stationWagon":
                radio = <div>
                    <div className={classes.block}>
                        <label htmlFor="Radio">Radio:</label>
                        <select name="" onChange={(e) => this.RadioHandler(e, setProductOption)}>
                            <option disabled selected value></option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    {radioOnList2}
                </div>;
                break;
            default:

        }

        switch (this.state.now) {
            case 1:
                choose = <div>
                    <div className={classes.block}>
                        <label htmlFor="color">Color:</label>
                        {colors}
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="interiorFabricColor">Interior Fabric Color:</label>
                        <input
                            className={classes.colorTan}
                            value="Tan"
                            onClick={(e) => this.InteriorcolorHandler(e, setProductOption)}/>
                        <input
                            className={classes.colorMaroon}
                            value="Maroon"
                            onClick={(e) => this.InteriorcolorHandler(e, setProductOption)}/>

                        <input
                            className={classes.colorRed}
                            value="Red"
                            onClick={(e) => this.InteriorcolorHandler(e, setProductOption)}/>

                        <input
                            className={classes.colorGreen}
                            value="Green"
                            onClick={(e) => this.InteriorcolorHandler(e, setProductOption)}/>

                        <input
                            className={classes.colorBlack}
                            value="Black"
                            onClick={(e) => this.InteriorcolorHandler(e, setProductOption)}/>

                        <input
                            className={classes.colorGray}
                            value="Gray"
                            onClick={(e) => this.InteriorcolorHandler(e, setProductOption)}/>

                    </div>
                    <div className={classes.block}>
                        <label htmlFor="Dashboard color">Dashboard color:</label>
                        <input
                            className={classes.colorTan}
                            value="Tan"
                            onClick={(e) => this.dashBoardcolorHandler(e, setProductOption)}/>
                        <input
                            className={classes.colorMaroon}
                            value="Maroon"
                            onClick={(e) => this.dashBoardcolorHandler(e, setProductOption)}/>

                        <input
                            className={classes.colorRed}
                            value="Red"
                            onClick={(e) => this.dashBoardcolorHandler(e, setProductOption)}/>
                        <input
                            className={classes.colorGreen}
                            value="Green"
                            onClick={(e) => this.dashBoardcolorHandler(e, setProductOption)}/>
                        <input
                            className={classes.colorBlack}
                            value="Black"
                            onClick={(e) => this.dashBoardcolorHandler(e, setProductOption)}/>

                        <input
                            className={classes.colorGray}
                            value="Gray"
                            onClick={(e) => this.dashBoardcolorHandler(e, setProductOption)}/>

                    </div>
                    <div className={classes.block}>
                        <label htmlFor="seats">Number of seats:</label>
                        {seats}
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="exhausts">Number of exhausts:</label>
                        <input
                            type="number"
                            name="exhausts"
                            min="1"
                            max="4"
                            onChange={setProductOption.bind(null, 'numExhausts')}/>
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="Engine">Engine:</label>
                        <select name="" onChange={setProductOption.bind(null, 'engine')}>
                            <option disabled selected value></option>
                            <option value="4-cylinder">4-cylinder</option>
                            <option value="6-cylinder">6-cylinder</option>
                            <option value="12-cylinder">12-cylinder</option>
                        </select>
                    </div>
                    <input className={classes.submit} onClick = {this.purchaseHandler2} type="button" value="Next"/>
                </div>
                break;
            case 2:
                choose = <div>
                    <div className={classes.block}>
                        <label htmlFor="Hubcaps material">Hubcaps material:</label>
                        <select
                            name="hubcapsMaterial"
                            onChange={setProductOption.bind(null, 'hubcapsMaterial')}>
                            <option disabled selected value></option>
                            <option value="chrome">chrome</option>
                            <option value="steel">steel</option>
                            <option value="plastic">plastic</option>
                        </select>
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="Tinted windows">Tinted windows:</label>
                        {Tintedwindows}
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="Spare tire">Spare tire:</label>
                        <select name="Spare tire" onChange={setProductOption.bind(null, 'spareTire')}>
                            <option disabled selected value></option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="Hood ornament">Hood ornament:</label>
                        <select name="" onChange={(e) => this.hoodhandler(e, setProductOption)}>
                            <option disabled selected value></option>
                            <option value="yes">Yes</option>
                            <option value="">No</option>
                        </select>
                        {buttonHood}
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="Trunk monkey">Trunk monkey:</label>
                        <select name="" onChange={(e) => this.monkeyHandler(e, setProductOption)}>
                            <option disabled selected value></option>
                            <option value="yes">Yes</option>
                            <option value="">No</option>
                        </select>
                        {buttonMonkey}
                    </div>
                    <input className={classes.submit} onClick = {this.purchaseHandler3} type="button" value="Next"/>

                </div>;
                break;
            case 3:
                choose = <div>
                    <div className={classes.block}>
                        <label htmlFor="Dashboard lights color">Dashboard lights color:</label>
                        <input
                            className={classes.colorRed}
                            value="Red"
                            onClick={(e) => this.dashBoardLightcolorHandler(e, setProductOption)}/>
                        <input
                            className={classes.colorGreen}
                            value="Green"
                            onClick={(e) => this.dashBoardLightcolorHandler(e, setProductOption)}/>
                        <input
                            className={classes.colorBlack}
                            value="Black"
                            onClick={(e) => this.dashBoardLightcolorHandler(e, setProductOption)}/>
                        <input
                            className={classes.colorGray}
                            value="Gray"
                            onClick={(e) => this.dashBoardLightcolorHandler(e, setProductOption)}/>
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="Cupholders">Cupholders:</label>
                        <select name="" onChange={(e) => this.cupHolderOnHandler(e, setProductOption)}>
                            <option disabled selected value></option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        {numCups}
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="Cigarette lighters">Cigarette lighters:</label>
                        <select name="" onChange={(e) => this.cigOnHandler(e, setProductOption)}>
                            <option disabled selected value></option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        {sigLight}
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="Glove box">Glove box:</label>
                        <select name="" onChange={setProductOption.bind(null, 'hasGloveBox')}>
                            <option disabled selected value></option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="Floormats color">Floormats color:</label>
                        <input
                            className={classes.colorRed}
                            value="Red"
                            onClick={(e) => this.floorcolorHandler(e, setProductOption)}/>
                        <input
                            className={classes.colorGreen}
                            value="Green"
                            onClick={(e) => this.floorcolorHandler(e, setProductOption)}/>
                        <input
                            className={classes.colorBlack}
                            value="Black"
                            onClick={(e) => this.floorcolorHandler(e, setProductOption)}/>
                        <input
                            className={classes.colorGray}
                            value="Gray"
                            onClick={(e) => this.floorcolorHandler(e, setProductOption)}/>
                    </div>
                    <input className={classes.submit} onClick = {this.purchaseHandler4} type="button" value="Next"/>

                </div>;
                break;
            case 4:
                choose = <div>
                    <div className={classes.block}>
                        <label htmlFor="GPS">GPS:</label>
                        <select name="" onChange={setProductOption.bind(null, 'hasGPS')}>
                            <option disabled selected value></option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    {radio}
                    <div className={classes.block}>
                        <label htmlFor="Air conditioning">Air conditioning:</label>
                        {airConditioning}
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="Monogrammed steering wheel cover">Monogrammed steering wheel cover:</label>
                        <select name="" onChange={(e) => this.mogOnhandler(e, setProductOption)}>
                            <option disabled selected value></option>
                            <option value="yes">Yes</option>
                            <option value="">No</option>
                        </select>
                        {mogInput}
                    </div>
                    <input className={classes.submit} type="submit" value="Go to Step2  "/>
                </div>;
                break;
            default:
                choose = <div>Select what you want to choose</div>;
        }

        return this.state.submittedSuccessfully
            ? (<Redirect to="/order/2"/>)
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
                            <div className={classes.wrapping}>
                                <div className={classes.nav}>
                                    <div
                                        className={this.state.now === 1
                                        ? classes.route12
                                        : classes.route1}
                                        onClick={(e) => this.purchaseHandler1(e)}>Basic</div>
                                    <div
                                        className={this.state.now === 2
                                        ? classes.route12
                                        : classes.route1}
                                        onClick={this.purchaseHandler2}>Exterior</div>
                                    <div
                                        className={this.state.now === 3
                                        ? classes.route12
                                        : classes.route1}
                                        onClick={this.purchaseHandler3}>Interior</div>
                                    <div
                                        className={this.state.now === 4
                                        ? classes.route12
                                        : classes.route1}
                                        onClick={this.purchaseHandler4}>Accessories</div>
                                </div>
                                {errorarea}
                                <div className={classes.choosen}>
                                    {choose}
                                </div>

                            </div>
                            {modalContent1}
                            {mkContent1}
                        </div>
                    </form>
                    <Footer/>
                </div>
            )
    }
}

OrderStep1.propTypes = {
    options: PropTypes.object.isRequired,
    selectedProductId: PropTypes.string
};

export default OrderStep1;
