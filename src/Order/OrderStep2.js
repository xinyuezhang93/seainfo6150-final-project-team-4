import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";

class OrderStep2 extends Component {
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
      setUserInfo
    } = this.props;

    return this.state.submittedSuccessfully
      ? (<Redirect to="/order/summary" />)
      : (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <input type="submit" value="Go to summary" />
        </fieldset>
      </form>
    )
  }
}

OrderStep2.propTypes = {
  options: PropTypes.object.isRequired,
  selectedProductId: PropTypes.string
};

export default OrderStep2;
