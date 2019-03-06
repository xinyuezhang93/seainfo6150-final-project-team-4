import { omit, reject } from 'lodash';
import options from '../data/options.json';
import products from '../data/products.json';

export default (
  state={
    options,
    products,
    selectedOptions: {},
    selectedProduct: "jeep" //null
  },
  action={}
) => {
  switch (action.type) {
    case 'SELECT_PRODUCT':
      return {
        ...state,
        selectedProduct: action.payload.id
      }
    case 'REMOVE_OPTION':
      return {
        ...state,
        selectedOptions: omit(state.selectedOptions, [action.payload.id])
      }
    case 'SET_OPTION':
      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          ...action.payload
        }
      }
    default:
      return state
  }
}
