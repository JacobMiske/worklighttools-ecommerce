import React from 'react';
import InitState from "./InitState";
import TopMenu from "../components/TopMenu";
import {Container, Header} from "semantic-ui-react";
import Footer from "../components/Footer";

class SiteMap extends React.Component {
	render() {
		return(
			<div>
				<InitState/>
				<TopMenu/>
				<Container text style={{marginTop: '1em', marginBottom: '1em'}}>
					<Header as='h1' style={{textAlign: 'center'}}>
						Site map of WorkLight Tools
					</Header>
				</Container>
				<Footer style={{marginTop: '2em'}}/>
			</div>
		);
	}
}

export default SiteMap;