// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import TopMenu from "../components/TopMenu";

function PlacedOrder() {
    return (
        <Grid rows={2} style={topBanner}>
            <TopMenu/>
            <Grid.Row>
                <Grid.Column width={12} verticalAlign='middle' textAlign='center' style={headerStyle}>
                    <Header as='h1' textAlign='center'>
                      Order Complete
                    </Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <p>
                Hello world
              </p>
            </Grid.Row>
        </Grid>
    )
}

export default PlacedOrder

const topBanner = {
    background: 'url(/images/header-bkg.png)',
    borderColor: '#DDD',
    borderStyle: 'solid',
    borderWidth: '0 0 1px 0',
    height: '73px'
};

const headerStyle = {
    marginTop: '5px'
};