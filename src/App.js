import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import styles from './App.module.css';

import {selectProductId, setProductOption, setUserInfo, viewProduct} from './actions/actions';

// components
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import AllProducts from './AllProducts/AllProducts';
import Categories from './Categories/Categories';
import CategoryProducts from './CategoryProducts/CategoryProducts';
import Error from './Error/Error';
import ProductDetail from './ProductDetail/ProductDetail';
import ViewedProducts from './ViewedProducts/ViewedProducts';
import OrderStep1 from './Order/OrderStep1';
import OrderStep2 from './Order/OrderStep2';
import Summary from './Order/Summary';
import ThankYou from './Order/ThankYou';
import NotFound from './NotFound/NotFound';

let App = props => (
    <Router>
        <div className={styles.container}>

            {/* end 5 most recently viewed products */}
            <main>
                <Switch>
                    <Route exact path="/" render={() => <Home {...props}/>}/>
                    <Route
                        exact
                        path="/products"
                        render={() => {
                        const sortedProducts = Object
                            .values(props.products)
                            .sort((a, b) => b.year - a.year);
                        return (
                            <div>
                                {/* start example of link to route */}
                                <Link to="/">Home</Link>
                                {/* end example of link to route */}
                                {/* start list of product category links */}
                                <Categories categories={Object.values(props.categories)}/> {/* end list of product category links */}
                                {/* start 5 most recently viewed products */}
                                {props.viewedProducts.length > 0
                                    ? (
                                        <div>
                                            Already Viewed Products
                                        </div>
                                    )
                                    : null}
                                <ViewedProducts
                                    categories={props.categories}
                                    products={props
                                    .viewedProducts
                                    .map(productId => props.products[productId])}/>
                                <AllProducts categories={props.categories} products={sortedProducts}/>
                            </div>
                        );
                    }}/>
                    <Route
                        exact
                        path="/products/:category"
                        render={routerProps => {
                        const categoryId = routerProps.match.params.category;
                        const category = props.categories[categoryId];
                        const products = Object
                            .values(props.products)
                            .filter(product => product.categoryId === categoryId);
                        const sortedProducts = Object
                            .values(products)
                            .sort((a, b) => b.year - a.year);
                        return (
                            <div>
                                <Link to="/">Home</Link>
                                {/* end example of link to route */}
                                {/* start list of product category links */}
                                <Categories categories={Object.values(props.categories)}/> {/* end list of product category links */}
                                {/* start 5 most recently viewed products */}
                                {props.viewedProducts.length > 0
                                    ? (
                                        <div>
                                            Already Viewed Products
                                        </div>
                                    )
                                    : null}
                                <ViewedProducts
                                    categories={props.categories}
                                    products={props
                                    .viewedProducts
                                    .map(productId => props.products[productId])}/><CategoryProducts
                                    categories={props.categories}
                                    category={category}
                                    products={sortedProducts}/></div>
                        );
                    }}/>
                    <Route
                        path="/products/:category/:id"
                        render={routerProps => {
                        const id = routerProps.match.params.id;
                        const product = props.products[id];
                        return (
                            <div>{/* start example of link to route */}
                                <Link to="/">Home</Link>
                                {/* end example of link to route */}
                                {/* start list of product category links */}
                                <Categories categories={Object.values(props.categories)}/> {/* end list of product category links */}
                                {/* start 5 most recently viewed products */}
                                {props.viewedProducts.length > 0
                                    ? (
                                        <div>
                                            Already Viewed Products
                                        </div>
                                    )
                                    : null}
                                <ViewedProducts
                                    categories={props.categories}
                                    products={props
                                    .viewedProducts
                                    .map(productId => props.products[productId])}/><ProductDetail {...props} product={product}/></div>
                        );
                    }}/>
                    <Route exact path="/order/1" render={() => <OrderStep1 {...props}/>}/>
                    <Route exact path="/order/2" render={() => <OrderStep2 {...props}/>}/>
                    <Route exact path="/order/summary" render={() => <Summary {...props}/>}/>
                    <Route exact path="/order/thank-you" render={() => <ThankYou/>}/>
                    <Route exact path="/about" render={() => <About {...props}/>}/>
                    <Route exact path="/contact" render={() => <Contact {...props}/>}/>
                    <Route render={() => <NotFound {...props}/>}/>
                </Switch>
            </main>
        </div>
    </Router>
);

App = connect(state => state, dispatch => {
    return {
        selectProductId: (productId, e) => dispatch(selectProductId({id: productId})),
        setProductOption: (optionId, e) => {
            dispatch(setProductOption({id: optionId, e}));
        },
        setUserInfo: (infoId, e) => {
            dispatch(setUserInfo({id: infoId, e}));
        },
        viewProduct: productId => dispatch(viewProduct({id: productId}))
    };
})(App);

export default App;