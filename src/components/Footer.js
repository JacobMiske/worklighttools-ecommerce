// License MIT

import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import logo from '../../src/assets/logo192.png';

function Footer() {
	return (
		<div>
			<Menu fixed='bottom' stackable border inverted >
				<Menu.Item header>
					<Link to='/'>
						<img src={logo} className="App-logo" alt="logo" width="50" height="50"/>
					</Link>
					<p style={{ marginRight: '1.5em', marginLeft: '4em' }}> WorkLight Tools
						<Link to="/about">About</Link>
						<Link to="/about">Contact</Link>
					</p>
				</Menu.Item>
				<Menu.Menu>
					<p style={{ marginRight: '1.5em', marginLeft: '4em' }}> WorkLight Tools
						<Link to="/about">SiteMap</Link>
						<Link to="/about">Privacy</Link>
						<Link to="/about">Terms</Link>
					</p>
				</Menu.Menu>
			</Menu>
		</div>
	)
}

export default Footer;