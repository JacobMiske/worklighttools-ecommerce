import React from 'react';
import InitState from "./InitState";
import TopMenu from "../components/TopMenu";
import {Container, Header} from "semantic-ui-react";
import Footer from "../components/Footer";

function Terms() {
	return(
		<div>
			<InitState/>
			<TopMenu/>
			<Container text style={{marginTop: '1em', marginBottom: '1em'}}>
				<Header as='h1' style={{textAlign: 'center'}}>
					Terms at WorkLight Tools
				</Header>
			</Container>
			<Footer style={{marginTop: '2em'}}/>
		</div>
	);
}

export default Terms;