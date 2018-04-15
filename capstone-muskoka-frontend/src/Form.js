import React, { Component } from 'react';
import CardSection from './CardSection';
import { injectStripe } from 'react-stripe-elements';;


class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.stripe.createToken({name: 'Quinn McCallum', type: 'card'})
                     .then(({token})=> {
                       console.log(`got`, token)
                     })
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <CardSection />
        <button>Submit Order</button>
      </form>
    )
  }
}

export default injectStripe(Form);
