import React from "react";
import { SignIn } from "aws-amplify-react";
import { Container, Form, Button, Header } from 'semantic-ui-react'

export class CustomSignIn extends SignIn {
	constructor(props) {
		super(props);
		this._validAuthStates = ["signIn", "signedOut", "signedUp"];
	}

	showComponent(theme) {
		return (
			<Container style={signInStyle}>
				<Header as="h1"> WorkLight Tools Sign In</Header>
				<Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
					<div className="mb-4">
						<label
							className="block text-grey-darker text-sm font-bold mb-2"
							htmlFor="username"
						>
							Username
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
							id="username"
							key="username"
							name="username"
							onChange={this.handleInputChange}
							type="text"
							placeholder="Username"
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-grey-darker text-sm font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							key="password"
							name="password"
							onChange={this.handleInputChange}
							type="password"
							placeholder="******************"
						/>
						<p className="text-grey-dark text-xs">
							Forgot your password?{" "}
							<Button
								className="text-indigo cursor-pointer hover:text-indigo-darker"
								onClick={() => super.changeState("forgotPassword")}
							>
								Reset Password
							</Button>
						</p>
					</div>
					<div className="flex items-center justify-between">
						<Button
							className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="button"
							onClick={() => super.signIn()}
						>
							Login
						</Button>
						<p className="text-grey-dark text-xs">
							No Account?{" "}
							<Button
								className="text-indigo cursor-pointer hover:text-indigo-darker"
								onClick={() => super.changeState("signUp")}
							>
								Create account
							</Button>
						</p>
					</div>
				</Form>
			</Container>
		);
	}
}

const signInStyle = {
	// HTML lightgray / lightgrey
	background: '#D3D3D3',
	borderColor: '#D3D3D3',
	borderStyle: 'solid',
	borderWidth: '1em 1em 1em 1em'
};
