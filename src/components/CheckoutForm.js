// MIT License

import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
	}

	async submit(ev) {
		console.log("Reached submit async function");
		let {token} = this.props.createToken({name: "Name"});
		console.log(token);

		// let response = await fetch("/charge", {
		// 	method: "POST",
		// 	headers: {"Content-Type": "text/plain"},
		// 	body: token.id
		// });

		// if (response.ok) console.log("Purchase Complete!");
		// if (response.ok) this.setState({complete: true});

	}

	render() {
		return (
			<div className="checkout" style={styles}>
				<CardElement />
				<Link to="/ordercomplete">
					<Button onClick={this.submit} to="/contact">Purchase</Button>
				</Link>
			</div>
		);
	}
}

export default injectStripe(CheckoutForm);

const styles = {
	marginLeft: '1em',
	marginRight: '1em'
};