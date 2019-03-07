import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styles from './App.module.css';

import { selectProductId, setProductOption, viewProduct } from './actions/actions';


import ExampleComponent from './ExampleComponent/ExampleComponent';
import AllProducts from './AllProducts/AllProducts';
import Categories from './Categories/Categories';
import CategoryProducts from './CategoryProducts/CategoryProducts';
import ProductDetail from './ProductDetail/ProductDetail';
import ViewedProducts from './ViewedProducts/ViewedProducts';

let App = (props) => (
  <Router>
    <div>
      <Link to='/'>Home</Link>

      <Categories categories={Object.values(props.categories)} />
      <ViewedProducts
        categories={props.categories}
        products={
          props.viewedProducts.map(productId => props.products[productId])
        }
      />

      <main className={styles.container}>
        <Switch>
        <Route
          exact path='/'
          render={() => <ExampleComponent {...props} />}
        />
        {/*
          <Route
            exact path='/'
            render={() => <Home {...props} />}
          />
        */}
          <Route
            exact path='/products'
            render={() => {
              const sortedProducts = Object.values(props.products).sort((a,b) => b.year - a.year);
              return (
                <AllProducts
                  categories={props.categories}
                  products={sortedProducts}
                />
              );
            }}
          />
          <Route
            exact path='/products/:category'
            render={routerProps => {
              const categoryId = routerProps.match.params.category;
              const category = props.categories[categoryId];

              const products = Object.values(props.products).filter(product =>
                product.categoryId === categoryId
              );
              const sortedProducts = Object.values(products).sort((a,b) => b.year - a.year);


              return (
                <CategoryProducts
                  categories={props.categories}
                  category={category}
                  products={sortedProducts}
                />
              );
            }}
          />
          <Route
            path='/products/:category/:id'
            render={routerProps => {
              const id = routerProps.match.params.id;
              const product = props.products[id];

              return (
                <ProductDetail {...props} product={product} />
              );
            }}
          />
          {/*
            <Route
              exact path='/order/1'
              render={() => <OrderStep1 {...props} />}
            />
            <Route
              exact path='/order/2'
              render={() => <OrderStep2 {...props} />}
            />
            <Route
              exact path='/order/3'
              render={() => <OrderStep3 {...props} />}
            />
            <Route
              exact path='/about'
              render={() => <About {...props} />}
            />
            <Route
              exact path='/contact'
              render={() => <Contact {...props} />}
            />
            <Route component={NotFound} />
          */}


        </Switch>
      </main>
    </div>
  </Router>
)
App = connect(
  (state) => state,
  (dispatch) => {
    return {
      selectProductId: (productId, e) => dispatch(selectProductId({ id: productId })),
      setProductOption: (optionId, e) => {
        dispatch(setProductOption({ id: optionId, e }))
      },
      viewProduct: (productId) => dispatch(viewProduct({ id: productId }))
    }
  }
)(App)

export default App;
