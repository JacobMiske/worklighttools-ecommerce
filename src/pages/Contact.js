// MIT License

import React from 'react';
import InitState from "./InitState";
import TopMenu from "../components/TopMenu";
import {Container, Header, Form} from "semantic-ui-react";
import Footer from "../components/Footer";

class Contact extends React.Component {
	state = {};

	handleChange = (e, { value }) => this.setState({ value });

	render() {
		// const { value } = this.state;
		return (
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
					<Form>
						<Form.Group widths='equal'>
							<Form.Input
								fluid label='First name'
								placeholder='First name'
								onChange={this.handleChange}
							/>
							<Form.Input
								fluid label='Last name'
								placeholder='Last name'
								onChange={this.handleChange}
							/>
						</Form.Group>
						<Form.TextArea label='Message' placeholder='Tell us more...' />
						<Form.Checkbox label='I agree to the WLT Terms and Conditions' />
						<Form.Button>Submit</Form.Button>
					</Form>
				</Container>
				<Footer style={{marginTop: '2em'}}/>
			</div>
		);
	}
}

export default Contact;