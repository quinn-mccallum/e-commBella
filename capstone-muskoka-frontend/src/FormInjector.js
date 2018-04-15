import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import Form from './Form';

class FormInjector extends Component {
  render(){
    return (
      <Elements>
        <Form />
      </Elements>
    )
  }
}

export default FormInjector;
