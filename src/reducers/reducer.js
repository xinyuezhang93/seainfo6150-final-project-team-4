import { reject } from 'lodash';
import options from '../data/options.json';
import products from '../data/products.json';

export default (
  state={
    options,
    products,
    selectedProduct: null
  },
  action={}
) => {
  switch (action.type) {
    case 'SELECT_PRODUCT':
      return {
        ...state,
        selectedProduct: action.payload.id
      }
    default:
      return state
  }
}
