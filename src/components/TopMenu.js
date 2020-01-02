// License MIT

import React, { useContext } from 'react'
// import { Icon, Input, Menu, Button } from 'semantic-ui-react'
import { Menu, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import AppContext from '../context/AppContext';
import logo from '../../src/assets/logo192.png';

function TopMenu() {
    const {cart} = useContext(AppContext)

    return (
        <div style={divStyle}>
            <Menu fixed='top' stackable borderless inverted style={menuStyle}>
                <Menu.Item header>
                    <Link to='/'>
                        <img src={logo} className="App-logo" alt="logo" width="50" height="50"/>
                    </Link>
                </Menu.Item>
                <Menu.Menu>
                    <Menu.Item>
                        {/*<Input icon={<Icon name='search' */}
                        {/*                   link color='yellow' */}
                        {/*                   bordered */}
                        {/*                   inverted />} placeholder='Search...' */}
                        {/*                                style={{ width: '40em' }} />*/}
                    </Menu.Item>
                    <Menu.Item>
                        <p class="large black text" style={{ marginRight: '1.5em', marginLeft: '0.5em' }} >
                            WorkLight Tools
                        </p>
                    </Menu.Item>
                    <Menu.Item>
                        <Link class="large blue text" to="/about" style={{ marginRight: '1.5em', marginLeft: '0.5em' }}>
                            About
                        </Link>
                        <span />
                        <Link class="large blue text" to="/about" style={{ marginRight: '1.5em', marginLeft: '0.5em' }}>
                            Contact
                        </Link>
                    </Menu.Item>
                </Menu.Menu>
                <Menu.Item position='right'>
                    <Link to={'/Checkout'}>
                        <Button
                            color='yellow'
                            icon='cart'
                            label={cart.items.length}
                            labelPosition='right'
                            style={cartStyle}
                        />
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default TopMenu

const menuStyle = {
    // HTML lightgray / lightgrey
	  background: '#D3D3D3'
}

const divStyle = {
	  paddingTop: '6em'
}

const cartStyle = {
    marginRight: '2rem'
}