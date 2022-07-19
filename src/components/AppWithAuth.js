import React from "react";
import { SignIn } from "aws-amplify-react";
import config from "../aws-exports";
import { CustomSignIn } from "./CustomSignIn";
import App from "../App";
import { Authenticator } from "aws-amplify-react";
import signUpConfig from '../config/signUpConfig'

class AppWithAuth extends React.Component {
	render() {
		return (
			<div>
				<App />
				<Authenticator hide={[SignIn]} amplifyConfig={config} signUpConfig={signUpConfig} >
					<CustomSignIn />
				</Authenticator>
			</div>
		);
	}
}

export default AppWithAuth;
