// MIT License

import React from 'react';
import InitState from "./InitState";
import TopMenu from "../components/TopMenu";
import {Container, Header} from "semantic-ui-react";
import Footer from "../components/Footer";

function Contact() {
	return(
		<div>
			<InitState/>
			<TopMenu/>
			<Container text style={{marginTop: '1em', marginBottom: '1em'}}>
				<Header as='h1' style={{textAlign: 'center'}}>
					Contact WLT
				</Header>
			</Container>
			<Container style={{marginTop: '2em'}}>
				<Header as='h2'>Who is behind this?</Header>
				<p>
					WorkLight Tools is a small online store built by J. Miske so he can try to sell some knick knacks.
				</p>
			</Container>
			<Footer style={{marginTop: '2em'}}/>
		</div>
	);
}

export default Contact;