// License MIT

import React, { useContext } from 'react';
import { Auth } from 'aws-amplify';
import { Menu, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import AppContext from '../context/AppContext';
import logo from '../../src/assets/logo192.png';

function SignOutButton() {
	Auth.signOut()
		.then(data => console.log(data))
		.catch(err => console.log(err));
}

function TopMenu() {
	const { cart } = useContext(AppContext);

	function CheckoutClick() {
		console.log(cart.items)
	}

	return (
		<div style={divStyle}>
			<Menu fixed='top' style={menuStyle} fluid widths={5}>
				<Menu.Item header style={headerStyle}>
					<Link to='/'>
						<img src={logo} className="App-logo" alt="logo" width="50" height="50"/>
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to='/'>
						<p className="large black text" style={{marginRight: '1.5em', marginLeft: '0.5em'}}>
							WorkLight Tools
						</p>
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/about" style={{marginRight: '1.5em', marginLeft: '0.5em'}}>
						<p className="large blue text">About</p>
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link className="large blue text" to="/contact" style={{marginRight: '1.5em', marginLeft: '0.5em'}}>
						<p className="large blue text">Contact</p>
					</Link>
				</Menu.Item>
				<Menu.Item position='right'>
					<Link to={'/Checkout'}>
						<Button
							color='blue'
							icon='cart'
							label={cart.items.length}
							labelPosition='right'
							style={cartStyle}
							onClick={CheckoutClick}
						/>
					</Link>
					<Button onClick={SignOutButton}>Sign Out</Button>
				</Menu.Item>
			</Menu>
		</div>
	)
}

export default TopMenu;

const menuStyle = {
	// HTML lightgray / lightgrey
	background: '#D3D3D3',
	borderColor: '#D3D3D3',
	borderStyle: 'solid',
	borderWidth: '0 0 1px 0'
};

const headerStyle = {
	borderBottom: '1em',
	borderColor: '#D3D3D3',
	borderStyle: 'solid',
	borderWidth: '0 0 1px 0'
};

const divStyle = {
	paddingTop: '6em',
	borderColor: '#D3D3D3',
	borderStyle: 'solid',
	borderWidth: '0 0 1px 0'
};

const cartStyle = {
	marginRight: '2rem'
};