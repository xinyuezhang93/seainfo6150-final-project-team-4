import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import classes from './OrderStep1.module.css'
import Footer from '../public/Footer';
import HoodOrnament from './HoodOrnament';
import Monkey from './Monkey';
import "./OrderStep1.css";
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
            mogOn: "no",
            fabricColor: 0,
            dashboardColor: 0
        }
    }

    handleSubmit() {
        this.setState({submittedSuccessfully: true});
    }

    purchaseHandler1 = (selectedOptions) => {
        if (selectedOptions.color === undefined) {
            alert("Color must be selected")
        } else if (selectedOptions.interiorFabricColor === undefined) {
            alert("intColor must be selected")
        } else if (selectedOptions.dashboardColor === undefined) {
            alert("dashColor must be selected")
        } else if (selectedOptions.numSeats === undefined) {
            alert("seats must be selected")
        } else if (selectedOptions.numExhausts === undefined) {
            alert("exhausts must be selected")
        } else if (selectedOptions.engine === undefined) {
            alert("engine must be selected")
        } else {
            this.setState({now: 2});
        }
    }

    purchaseHandler2 = (selectedOptions) => {
        if (selectedOptions.hubcapsMaterial === undefined) {
            alert("Material must be selected")
        } else if (selectedOptions.spareTire === undefined) {
            alert("sparetile must be selected")
        } else {
            this.setState({now: 3});
        }
    }

    purchaseHandler3 = (selectedOptions) => {
        if (selectedOptions.dashboardLightsColor === undefined) {
            alert("dashBoardLightColor must be selected")
        } else if (selectedOptions.floormatsColor === undefined) {
            alert("floormatsColor must be selected")
        } else {
            this.setState({now: 4});
        }
    }

    gobackHandler1 = () => {
        this.setState({now: 1})
    }

    gobackHandler2 = () => {
        this.setState({now: 2})
    }

    gobackHandler3 = () => {
        this.setState({now: 3})
    }

    gobackHandler4 = () => {
        this.setState({now: 4})
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

    InteriorcolorHandler = (num, e, setProductOption) => {
        this.setState({fabricColor: num})
        setProductOption('interiorFabricColor', e)
    }

    dashBoardcolorHandler = (num, e, setProductOption) => {
        this.setState({dashboardColor: num})
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

    colorHandler = (e, setProductOption) => {

        setProductOption('color', e)
    }

    seatsHandler = (e, setProductOption) => {

        setProductOption('numSeats', e)
    }

    exhaustsHandler = (e, setProductOption) => {

        setProductOption('numExhausts', e)
    }

    engineHandler = (e, setProductOption) => {

        setProductOption('engine', e)
    }

    checkChar(e, setProductOption) {
        var re = /\w{3}$/
        if (re.test(e.target.value)) {
            setProductOption('monogram', e)
        } else {
            alert("Wrong type of input");
        }
    }

    render() {
        const {options, selectedProductId, setProductOption, error, selectedOptions} = this.props;
        let fabricColor = this.state.fabricColor;
        let dashboardColor = this.state.dashboardColor;
        let choose;
        let seats = <input
            type="number"
            name="seats"
            min="1"
            max="10"
            defaultValue={selectedOptions.numSeats
            ? selectedOptions.numSeats
            : ""}
            onChange={(e) => {
            this.seatsHandler(e, setProductOption)
        }}/>;;
        let Tintedwindows = <select
            key="hasTintedWindows"
            defaultValue={selectedOptions.hasTintedWindows
            ? selectedOptions.hasTintedWindows
            : ""}
            onChange={setProductOption.bind(null, 'hasTintedWindows')}>
            <option value=""></option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>;
        let colors = <input
            type="color"
            name="favcolor"
            defaultValue={selectedOptions.color
            ? selectedOptions.color
            : ""}
            onChange={(e) => {
            this.colorHandler(e, setProductOption)
        }}/>;
        let radioOnList = this.state.radioOn === "yes"
            ? <div className={classes.block}>
                    <label htmlFor="Radio">Choose your Radio Type:</label>
                    <select
                        name="radioType"
                        defaultValue={selectedOptions.radioType
                        ? selectedOptions.radioType
                        : ""}
                        onChange={setProductOption.bind(null, 'radioType')}>
                        <option value=""></option>
                        <option value="Medium">Medium</option>
                    </select>
                </div>
            : <div></div>
        let radioOnList1 = this.state.radioOn === "yes"
            ? <div className={classes.block}>
                    <label htmlFor="Radio">Choose your Radio Type:</label>
                    <select
                        key="radioType"
                        defaultValue={selectedOptions.radioType
                        ? selectedOptions.radioType
                        : ""}
                        onChange={setProductOption.bind(null, 'radioType')}>
                        <option value=""></option>
                        <option value="Medium">Medium</option>
                        <option value="Fancy">Fancy</option>
                    </select>
                </div>
            : <div></div>
        let radioOnList2 = this.state.radioOn === "yes"
            ? <div className={classes.block}>
                    <label htmlFor="Radio">Choose your Radio Type:</label>
                    <select
                        key="radioType"
                        defaultValue={selectedOptions.radioType
                        ? selectedOptions.radioType
                        : ""}
                        onChange={setProductOption.bind(null, 'radioType')}>
                        <option value=""></option>
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
                <select
                    key="hasRadio"
                    defaultValue={selectedOptions.hasRadio
                    ? selectedOptions.hasRadio
                    : ""}
                    onChange={(e) => this.RadioHandler(e, setProductOption)}>
                    <option value=""></option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            {radioOnList}
        </div>;
        let airConditioning = <select
            key="hasAirConditioning"
            defaultValue={selectedOptions.hasAirConditioning
            ? selectedOptions.hasAirConditioning
            : ""}
            onChange={setProductOption.bind(null, 'hasAirConditioning')}>
            <option value=""></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>

        let numCups = this.state.cupHolderOn === "no"
            ? <div></div>
            : <input
                type="number"
                key="numberCup"
                placeholder="select your number"
                className={classes.inputmargin}
                defaultValue={selectedOptions.numCupholders
                ? selectedOptions.numCupholders
                : ""}
                onChange={setProductOption.bind(null, 'numCupholders')}/>

        let sigLight = this.state.cigOn === "no"
            ? <div></div>
            : <input
                type="number"
                key="numberCig"
                className={classes.inputmargin}
                placeholder="select your number"
                defaultValue={selectedOptions.numCigaretteLighters
                ? selectedOptions.numCigaretteLighters
                : ""}
                onChange={setProductOption.bind(null, 'numCigaretteLighters')}/>

        let modalContent1 = (this.state.modalContent1) === false
            ? <div className ={classes.modalnone}></div>
            : <div className={classes.modalon}>
                <div className={classes.block}>
                    <label htmlFor="modal">Make your choice:</label>
                    <select
                        key="hoodOrnament"
                        defaultValue={selectedOptions.hoodOrnament !== undefined
                        ? selectedOptions.hoodOrnament
                        : ""}
                        onChange={setProductOption.bind(null, 'hoodOrnament')}>
                        <option value=""></option>
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
                defaultValue={selectedOptions.monogram
                ? selectedOptions.monogram
                : ""}
                onBlur={(e) => this.checkChar(e, setProductOption)}/>

        let mkContent1 = (this.state.mkContent1) === false
            ? <div className ={classes.modalnone}></div>
            : <div className={classes.modalon}>
                <div className={classes.block}>
                    <label htmlFor="MK">Type in your choice:</label>
                    <select key="trunkMonkey" onChange={setProductOption.bind(null, 'trunkMonkey')}>
                        <option value=""></option>
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
                        <select
                            key="hasRadio"
                            defaultValue={selectedOptions.hasRadio
                            ? selectedOptions.hasRadio
                            : ""}
                            onChange={(e) => this.RadioHandler(e, setProductOption)}>
                            <option value=""></option>
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
                        <select
                            key="hasRadio"
                            defaultValue={selectedOptions.hasRadio
                            ? selectedOptions.hasRadio
                            : ""}
                            onChange={(e) => this.RadioHandler(e, setProductOption)}>
                            <option value=""></option>
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
                        <select
                            key="hasRadio"
                            defaultValue={selectedOptions.hasRadio
                            ? selectedOptions.hasRadio
                            : ""}
                            onChange={(e) => this.RadioHandler(e, setProductOption)}>
                            <option value=""></option>
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
                        <label htmlFor="color">*Color:</label>
                        {colors}
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="interiorFabricColor">*Interior Fabric Color:</label>
                        <input
                            className={fabricColor === 1
                            ? "colorTanSelected"
                            : "colorTan"}
                            defaultValue="Tan"
                            onClick={(e) => this.InteriorcolorHandler(1, e, setProductOption)}/>
                        <input
                            className={fabricColor === 2
                            ? "colorMaroonSelected"
                            : "colorMaroon"}
                            defaultValue="Maroon"
                            onClick={(e) => this.InteriorcolorHandler(2, e, setProductOption)}/>
                        <input
                            className={fabricColor === 3
                            ? "colorRedSelected"
                            : "colorRed"}
                            defaultValue="Red"
                            onClick={(e) => this.InteriorcolorHandler(3, e, setProductOption)}/>
                        <input
                            className={fabricColor === 4
                            ? "colorGreenSelected"
                            : "colorGreen"}
                            defaultValue="Green"
                            onClick={(e) => this.InteriorcolorHandler(4, e, setProductOption)}/>
                        <input
                            className={fabricColor === 5
                            ? "colorBlackSelected"
                            : "colorBlack"}
                            defaultValue="Black"
                            onClick={(e) => this.InteriorcolorHandler(5, e, setProductOption)}/>
                        <input
                            className={fabricColor === 6
                            ? "colorGraySelected"
                            : "colorGray"}
                            defaultValue="Gray"
                            onClick={(e) => this.InteriorcolorHandler(6, e, setProductOption)}/>
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="Dashboard color">*Dashboard color:</label>
                        <input
                            className={dashboardColor === 1
                            ? "colorTanSelected"
                            : "colorTan"}
                            defaultValue="Tan"
                            onClick={(e) => this.dashBoardcolorHandler(1, e, setProductOption)}/>
                        <input
                            className={dashboardColor === 2
                            ? "colorMaroonSelected"
                            : "colorMaroon"}
                            defaultValue="Maroon"
                            onClick={(e) => this.dashBoardcolorHandler(2, e, setProductOption)}/>
                        <input
                            className={dashboardColor === 3
                            ? "colorRedSelected"
                            : "colorRed"}
                            defaultValue="Red"
                            onClick={(e) => this.dashBoardcolorHandler(3, e, setProductOption)}/>
                        <input
                            className={dashboardColor === 4
                            ? "colorGreenSelected"
                            : "colorGreen"}
                            defaultValue="Green"
                            onClick={(e) => this.dashBoardcolorHandler(4, e, setProductOption)}/>
                        <input
                            className={dashboardColor === 5
                            ? "colorBlackSelected"
                            : "colorBlack"}
                            defaultValue="Black"
                            onClick={(e) => this.dashBoardcolorHandler(5, e, setProductOption)}/>
                        <input
                            className={dashboardColor === 6
                            ? "colorGraySelected"
                            : "colorGray"}
                            defaultValue="Gray"
                            onClick={(e) => this.dashBoardcolorHandler(6, e, setProductOption)}/>
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="seats">*Number of seats:</label>
                        {seats}
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="exhausts">*Number of exhausts:</label>
                        <input
                            type="number"
                            key="exhausts"
                            min="1"
                            max="4"
                            defaultValue={selectedOptions.numExhausts
                            ? selectedOptions.numExhausts
                            : ""}
                            onChange={(e) => {
                            this.exhaustsHandler(e, setProductOption)
                        }}/>
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="Engine">*Engine:</label>
                        <select
                            key="engine"
                            defaultValue={selectedOptions.engine
                            ? selectedOptions.engine
                            : ""}
                            onChange={(e) => {
                            this.engineHandler(e, setProductOption)
                        }}
                            required>
                            <option value="" disabled></option>
                            <option value="4-cylinder">4-cylinder</option>
                            <option value="6-cylinder">6-cylinder</option>
                            <option value="12-cylinder">12-cylinder</option>
                        </select>
                    </div>
                    <input
                        className={classes.submit}
                        onClick={() => this.purchaseHandler1(selectedOptions)}
                        type="button"
                        value="Next"/>
                </div>
                break;
            case 2:
                choose = <div>
                    <div className={classes.block}>
                        <label htmlFor="Hubcaps material">*Hubcaps material:</label>
                        <select
                            key="hubcapsMaterial"
                            defaultValue={selectedOptions.hubcapsMaterial
                            ? selectedOptions.hubcapsMaterial
                            : ""}
                            onChange={setProductOption.bind(null, 'hubcapsMaterial')}>
                            <option value=""></option>
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
                        <label htmlFor="Spare tire">*Spare tire:</label>
                        <select
                            key="Spare tire"
                            defaultValue={selectedOptions.spareTire
                            ? selectedOptions.spareTire
                            : ""}
                            onChange={setProductOption.bind(null, 'spareTire')}>
                            <option value=""></option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="Hood ornament">Hood ornament(premium):</label>
                        <select
                            key="hasHood"
                            defaultValue={selectedOptions.hasHoodOrnament !== undefined
                            ? selectedOptions.hasHoodOrnament
                            : ""}
                            onChange={(e) => this.hoodhandler(e, setProductOption)}>
                            <option value=""></option>
                            <option value="yes">Yes</option>
                            <option value="">No</option>
                        </select>
                        {buttonHood}
                        <div>{selectedOptions.hoodOrnament}</div>
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="Trunk monkey">Trunk monkey(premium):</label>
                        <select
                            key="hasMonkey"
                            defaultValue={selectedOptions.hasTrunkMonkey !== undefined
                            ? selectedOptions.hasTrunkMonkey
                            : ""}
                            onChange={(e) => this.monkeyHandler(e, setProductOption)}>
                            <option value=""></option>
                            <option value="yes">Yes</option>
                            <option value="">No</option>
                        </select>
                        {buttonMonkey}
                        <div>{selectedOptions.trunkMonkey}</div>
                    </div>
                    <input
                        className={classes.submit}
                        onClick={this.gobackHandler1}
                        type="button"
                        value="Back"/>
                    <input
                        className={classes.back}
                        onClick={() => this.purchaseHandler2(selectedOptions)}
                        type="button"
                        value="Next"/>

                </div>;
                break;
            case 3:
                choose = <div>
                    <div className={classes.block}>
                        <label htmlFor="Dashboard lights color">*Dashboard lights color:</label>
                        <input
                            type="color"
                            name="favcolor"
                            defaultValue={selectedOptions.dashboardColor
                            ? selectedOptions.dashboardColor
                            : ""}
                            onChange={setProductOption.bind(null, 'dashboardLightsColor')}/>
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="Cupholders">Cupholders:</label>
                        <select
                            name="hasCup"
                            defaultValue={selectedOptions.hasCupholders
                            ? selectedOptions.hasCupholders
                            : ""}
                            onChange={(e) => this.cupHolderOnHandler(e, setProductOption)}>
                            <option value=""></option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        {numCups}
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="Cigarette lighters">Cigarette lighters:</label>
                        <select
                            key="hasCig"
                            defaultValue={selectedOptions.hasCigaretteLighters
                            ? selectedOptions.hasCigaretteLighters
                            : ""}
                            onChange={(e) => this.cigOnHandler(e, setProductOption)}>
                            <option value=""></option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        {sigLight}
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="Glove box">Glove box:</label>
                        <select
                            key="hasGloveBox"
                            defaultValue={selectedOptions.hasGloveBox
                            ? selectedOptions.hasGloveBox
                            : ""}
                            onChange={setProductOption.bind(null, 'hasGloveBox')}>
                            <option value=""></option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className={classes.block}>
                        <label htmlFor="Floormats color">*Floormats color:</label>
                        <input
                            type="color"
                            name="favcolor"
                            defaultValue={selectedOptions.floormatsColor
                            ? selectedOptions.floormatsColor
                            : ""}
                            onChange={setProductOption.bind(null, 'floormatsColor')}/>
                    </div>
                    <input
                        className={classes.submit}
                        onClick={this.gobackHandler2}
                        type="button"
                        value="Back"/>

                    <input
                        className={classes.back}
                        onClick={() => this.purchaseHandler3(selectedOptions)}
                        type="button"
                        value="Next"/>
                </div>;
                break;
            case 4:
                choose = <div>
                    <div className={classes.block}>
                        <label htmlFor="GPS">GPS:</label>
                        <select
                            key="hasGPS"
                            defaultValue={selectedOptions.hasGPS
                            ? selectedOptions.hasGPS
                            : ""}
                            onChange={setProductOption.bind(null, 'hasGPS')}>
                            <option value=""></option>
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
                        <label htmlFor="Monogrammed steering wheel cover">Steering wheel cover(premium):</label>
                        <select
                            key="hasMog"
                            defaultValue={selectedOptions.hasMonogrammedSteeringWheelCover
                            ? selectedOptions.hasMonogrammedSteeringWheelCover
                            : ""}
                            onChange={(e) => this.mogOnhandler(e, setProductOption)}>
                            <option value=""></option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        {mogInput}
                    </div>
                    <input
                        className={classes.submit}
                        type="button"
                        onClick={this.gobackHandler3}
                        value="Back"/>
                    <input className={classes.back} type="submit" value="Go to step2"/>
                </div>;
                break;
            default:
                choose = <div>Select what you want to choose</div>;
        }

        return this.state.submittedSuccessfully
            ? (<Redirect to="/order/2"/>)
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
                            <div className={classes.wrapping}>
                                <div className={classes.nav}>
                                    <div
                                        className={this.state.now === 1
                                        ? classes.route12
                                        : classes.route1}>Basic</div>
                                    <div
                                        className={this.state.now === 2
                                        ? classes.route12
                                        : classes.route1}>Exterior</div>
                                    <div
                                        className={this.state.now === 3
                                        ? classes.route12
                                        : classes.route1}>Interior</div>
                                    <div
                                        className={this.state.now === 4
                                        ? classes.route12
                                        : classes.route1}
                                        onClick={this.purchaseHandler4}>Accessories</div>
                                </div>
                                {error}
                                <div className={classes.choosen} id="choosen">
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
