// License MIT

import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import logo from '../../src/assets/logo192.png';

function Footer() {
	return (
		<div style={divStyle}>
			<Menu style={menuStyle} fluid widths={5}>
				<Menu.Item header>
					<Link to='/'>
							<img src={logo} className="App-logo" alt="logo" width="50" height="50"/>
					</Link>
					<p className="black text" style={{ marginRight: '1.5em', marginLeft: '2.5em' }}>
							WorkLight Tools
					</p>
				</Menu.Item>
				<Menu.Item>
					<p className="black text" style={{ marginRight: '1.5em', marginLeft: '2.5em' }}>
							3 Ames Street, Cambridge MA 02142
					</p>
				</Menu.Item>
				<Menu.Item>
					<Link className="large blue text" to="/privacy" style={{marginRight: '1.5em', marginLeft: '2.5em'}}>
						<p className="large blue text">Privacy</p>
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link className="large blue text" to="/terms" style={{marginRight: '1.5em', marginLeft: '2.5em'}}>
						<p className="large blue text">Terms</p>
					</Link>
				</Menu.Item>
			</Menu>
		</div>
	)
}

export default Footer;

const menuStyle = {
		// HTML lightgray / lightgrey
		background: '#D3D3D3'
};

const divStyle = {
		paddingTop: '6em',
		bottom: 0,
};
