// License MIT

import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import logo from '../../src/assets/logo192.png';

function Footer() {
		return (
				<div style={divStyle}>
						<Menu stackable borderless inverted style={menuStyle}>
								<Menu.Item header>
										<Link to='/'>
												<img src={logo} className="App-logo" alt="logo" width="50" height="50"/>
										</Link>
										<p class="black text" style={{ marginRight: '1.5em', marginLeft: '4em' }}>
											  WorkLight Tools
											<b />
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

const menuStyle = {
		// HTML lightgray / lightgrey
		background: '#D3D3D3'
}

const divStyle = {
		paddingTop: '6em'
}
