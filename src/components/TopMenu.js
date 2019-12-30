// License MIT

import React, { useContext } from 'react'
import { Icon, Input, Menu, Button } from 'semantic-ui-react'
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
                    <p style={{ marginRight: '1.5em', marginLeft: '4em' }}> WorkLight Tools
                        <Link to="/about">About</Link>
                        <Link to="/about">Contact</Link>
                    </p>
                </Menu.Item>
                <Menu.Menu>
                    <Menu.Item>
                        <Input icon={<Icon name='search' 
                                           link color='yellow' 
                                           bordered 
                                           inverted />} placeholder='Search...' 
                                                        style={{ width: '40em' }} />
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
	background: '#232f3e'
}

const divStyle = {
	paddingTop: '6em'
}

const cartStyle = {
    marginRight: '1em'
}