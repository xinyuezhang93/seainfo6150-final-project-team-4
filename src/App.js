import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styles from './App.module.css';

import { selectProduct } from './actions/actions';

import ExampleComponent from './ExampleComponent/ExampleComponent';
import ProductDetail from './ProductDetail/ProductDetail';

let App = (props) => (
  <Router>
    <div>
      <Link to='/'>Home</Link>

      <main className={styles.container}>
        <Switch>
          <Route
            exact path='/'
            render={routerProps => <ExampleComponent {...props} />}
          />
          <Route
            path='/products/:id'
            render={routerProps =>
              <ProductDetail {...props} id={routerProps.match.params.id} />
            }
          />
          <Route exact path='/order'>
            <Route
              exact path='/order/1'
              render={routerProps => <OrderStep1 {...props} />}
            />
            <Route
              exact path='/order/2'
              render={routerProps => <OrderStep2 {...props} />}
            />
            <Route
              exact path='/order/3'
              render={routerProps => <OrderStep3 {...props} />}
            />
          </Route>
          <Route
            exact path='/about'
            render={routerProps => <About {...props} />}
          />
          <Route
            exact path='/contact'
            render={routerProps => <Contact {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  </Router>
)
App = connect(
  (state) => state,
  (dispatch) => {
    return {
      selectProduct: (id) => dispatch(selectProduct({ id }))
    }
  }
)(App)

export default App;
