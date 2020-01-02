// MIT License

import React from 'react';
import InitState from "./InitState";
import TopMenu from "../components/TopMenu";
import {Container, Header} from "semantic-ui-react";
import Footer from "../components/Footer";

function Privacy() {
	return(
		<div>
			<InitState/>
			<TopMenu/>
			<Container text style={{marginTop: '1em', marginBottom: '1em'}}>
				<Header as='h1' style={{textAlign: 'center'}}>
					Privacy at WorkLight Tools
				</Header>
			</Container>
			<Container style={{marginTop: '2em'}}>
				<Header as='h2'>Privacy for all user's information</Header>
				<p>
					The purchase data of any given user is run through APIs built by PayPal and Stripe.
					These are respected and trustworthy industry leaders in payment handling. No personnel data is seen by WLT.
				</p>
			</Container>
			<Footer style={{marginTop: '2em'}}/>
		</div>
	);
}

export default Privacy;