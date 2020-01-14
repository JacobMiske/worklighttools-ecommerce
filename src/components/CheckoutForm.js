// MIT License

import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
	}

	async submit(ev) {
		let {token} = await this.props.stripe.createToken({name: "Name"});
		let response = await fetch("/charge", {
			method: "POST",
			headers: {"Content-Type": "text/plain"},
			body: token.id
		});

		if (response.ok) console.log("Purchase Complete!")
		if (response.ok) this.setState({complete: true});
	}

	render() {
		return (
			<div className="checkout" style={styles}>
				<CardElement />
				<Button onClick={this.submit}>Purchase</Button>
			</div>
		);
	}
}

export default injectStripe(CheckoutForm);

const styles = {
	marginLeft: '1em',
	marginRight: '1em'
};