import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styles from './App.module.css';

import { selectProduct, setProductOption } from './actions/actions';

import ExampleComponent from './ExampleComponent/ExampleComponent';
import ProductDetail from './ProductDetail/ProductDetail';

// <Route
//   path='/products'
//   render={() => <Products {...props} />}
// />
// <Route
//   path='/products/:id'
//   render={routerProps =>
//     <ProductDetail {...props} id={routerProps.match.params.id} />
//   }
// />
// <Route exact path='/order'>
//   <Route
//     exact path='/order/1'
//     render={() => <OrderStep1 {...props} />}
//   />
//   <Route
//     exact path='/order/2'
//     render={() => <OrderStep2 {...props} />}
//   />
//   <Route
//     exact path='/order/3'
//     render={() => <OrderStep3 {...props} />}
//   />
// </Route>
// <Route
//   exact path='/about'
//   render={() => <About {...props} />}
// />
// <Route
//   exact path='/contact'
//   render={() => <Contact {...props} />}
// />
// <Route component={NotFound} />

let App = (props) => (
  <Router>
    <div>
      <Link to='/'>Home</Link>

      <main className={styles.container}>
        <Switch>
          <Route
            exact path='/'
            render={() => <ExampleComponent {...props} />}
          />
        </Switch>
      </main>
    </div>
  </Router>
)
App = connect(
  (state) => state,
  (dispatch) => {
    return {
      selectProduct: (productId) => dispatch(selectProduct({ id: productId })),
      setProductOption: (optionId, e) => {
        console.log('SETTING', optionId);
        dispatch(setProductOption({ id: optionId, e }))
      }
    }
  }
)(App)

export default App;
