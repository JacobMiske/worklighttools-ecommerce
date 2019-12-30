// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import { withAuthenticator } from 'aws-amplify-react'

import signUpConfig from './config/signUpConfig'

import InitState from './pages/InitState'
import TopMenu from './components/TopMenu'
import Carousel from './components/Carousel'
import ItemTable from './components/ItemTable'
import './App.css';

function App() {
    return (
        <div style={styles}>
            <InitState/>
            <TopMenu />
            <Container text style={{ marginBottom: '1em' }}>
                <Header as='h1' style={{ textAlign: 'center' }}>News at WorkLight Tools</Header>
            </Container>
            <Container fluid>
                <Carousel />
            </Container>
            <Container style={{ marginTop: '2em' }}>
                <Header as='h2'>Electronics</Header>
                <p>Add to your existing prototype boards</p>
            </Container>
            <Container style={{ marginTop: '2em' }}>
                <ItemTable type='echo' />
            </Container>
            <Container style={{ marginTop: '2em' }}>
                <Header as='h2'>Mechanical</Header>
                <p>Mount motors, frame speakers, and drape LEDs</p>
            </Container>
            <Container style={{ marginTop: '2em' }}>
                <ItemTable type='companion' />
            </Container>
        </div>
    );
}

export default withAuthenticator(App, { usernameAttributes: 'email', signUpConfig });

const styles = {
    marginLeft: '1em',
    marginRight: '1em'
}