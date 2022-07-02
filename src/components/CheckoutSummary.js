// MIT License

import React from 'react' // , { useContext}
import { Grid, Divider } from 'semantic-ui-react'
import styled from 'styled-components';
// import AppContext from "../context/AppContext";

import { toast } from 'react-toastify';
import CheckoutForm from "./CheckoutForm";
import {Elements} from "react-stripe-elements";

toast.configure();

function CheckoutSummary(props) {
    // const { cart } = useContext(AppContext);
    // const { items } = useContext(AppContext);
    const { user } = props;
    const { total } = props;

    function getAtt(name) {
        return user ? user[name] : ""
    }

    return (
        <div>
            <Grid columns={3}>
                    <Grid.Row>

                        <Grid.Column width={1}>
                            <BoldText>1</BoldText>
                        </Grid.Column>

                        <Grid.Column width={4}>
                            <BoldText>Shipping address</BoldText>
                        </Grid.Column>

                        <Grid.Column width={7}>
                            <NormalText>{getAtt('given_name') + ' ' + getAtt('family_name')}
                            <br/>{getAtt('custom:street')}<br/>{getAtt('custom:city')}, {getAtt('custom:state')} {getAtt('custom:postcode')}
                            <br/>{getAtt('custom:country')}
                            </NormalText>
                        </Grid.Column>

                    </Grid.Row>

                    <Divider/>

                    <Grid.Row>

                        <Grid.Column width={1}>
                            <BoldText>2</BoldText>
                        </Grid.Column>

                        <Grid.Column width={4}>
                            <BoldText>Cart Details</BoldText>
                        </Grid.Column>

                        <Grid.Column width={7} verticalAlign='middle'>
                            <Grid columns={3}>
                                <Grid.Column width={10}>
                                    <p>Items:</p>
                                </Grid.Column>
                            </Grid>
                            <br/>
                        </Grid.Column>

                    </Grid.Row>

                    <Divider/>

                    <Grid.Row>

                        <Grid.Column width={1}>
                            <BoldText>3</BoldText>
                        </Grid.Column>

                        <Grid.Column width={4}>
                            <BoldText>Payment With Stripe</BoldText>
                        </Grid.Column>

                        <Grid.Column width={7} verticalAlign='middle'>
                            <p> Order total: ${total} </p>
                            <br/>
                            <Elements>
                                <CheckoutForm/>
                            </Elements>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
        </div>
    )
}

export default CheckoutSummary

const BoldText = styled.div`
  font-size: 17px;
  font-weight: bold;
`;

const NormalText = styled.div`
  font-size: 1em;
`;
