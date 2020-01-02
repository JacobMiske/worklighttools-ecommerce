// MIT License

import React from 'react';
import InitState from "./InitState";
import TopMenu from "../components/TopMenu";
import {Container, Header} from "semantic-ui-react";
import Footer from "../components/Footer";

function About() {
	return(
		<div>
			<InitState/>
			<TopMenu/>
			<Container text style={{marginTop: '1em', marginBottom: '1em'}}>
				<Header as='h1' style={{textAlign: 'center'}}>
					About WLT
				</Header>
			</Container>
			<Container style={{marginTop: '2em'}}>
				<Header as='h2'>What do you do here?</Header>
				<p>
					WorkLight Tools is a method to sell a few inventions and products I have built.
				</p>
			</Container>
			<Footer style={{marginTop: '2em'}}/>
		</div>
	);
}

export default About;