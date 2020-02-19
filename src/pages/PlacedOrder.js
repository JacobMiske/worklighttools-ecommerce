// MIT License

import React, { useContext } from 'react'
import { Grid, Header } from 'semantic-ui-react'
import TopMenu from "../components/TopMenu";
import AppContext from "../context/AppContext";
import styled from "styled-components";

function PlacedOrder(props) {
  // const { cart } = useContext(AppContext);
  // const listItems = items.map((number) =>
  //   <li>{number}</li>
  // );
  const { user } = props;
  // const { total } = props;

  function getAtt(name) {
    return user ? user[name] : ""
  }

  return (
      <Grid rows={2} style={topBanner}>
          <TopMenu/>
          <Grid.Row>
              <Grid.Column width={12} verticalAlign='middle' textAlign='center' style={headerStyle}>
                  <Header as='h1' textAlign='center'>
                    Order Placed
                  </Header>
              </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <NormalText>{getAtt('given_name') + ' ' + getAtt('family_name')}
                <br/>{getAtt('custom:street')}<br/>{getAtt('custom:city')}, {getAtt('custom:state')} {getAtt('custom:postcode')}
                <br/>{getAtt('custom:country')}
              </NormalText>
            </Grid.Column>
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

const NormalText = styled.div`
  font-size: 1em;
`;
