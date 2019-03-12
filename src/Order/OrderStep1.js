import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";

class OrderStep1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedSuccessfully: false
    }
  }

  handleSubmit() {
    this.setState({
      submittedSuccessfully: true
    });
  }

  render() {
    const {
      options,
      selectedProductId,
      setProductOption
    } = this.props;

    return this.state.submittedSuccessfully
      ? (<Redirect to="/order/2" />)
      : (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <input type="submit" value="Go to step 2" />
        </fieldset>
      </form>
    )
  }
}

OrderStep1.propTypes = {
  options: PropTypes.object.isRequired,
  selectedProductId: PropTypes.string
};

export default OrderStep1;
