// MIT License

import React, { useContext } from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import styled from 'styled-components';
import AppContext from "../context/AppContext";

// import axios from 'axios';
import { toast } from 'react-toastify';
import CheckoutForm from "./CheckoutForm";
import {Elements} from "react-stripe-elements";

toast.configure();

function CheckoutSummary(props) {
    const { cart } = useContext(AppContext);
    // const listItems = items.map((number) =>
    //   <li>{number}</li>
    // );
    const { user } = props;
    const { total } = props;
    // const [product] = React.useState({
    //     name: "PCB1",
    // });

    function getAtt(name) {
        return user ? user[name] : ""
    }

    // async function handleToken(token, addresses) {
    //     const response = await axios.post('https://nrv4g.sse.codesandbox.io/checkout', {
    //         token,
    //         product
    //     })
    //     const { status } = response.data
    //     if (status === 'success') {
    //         toast('Success, check email for details!',
    //           { type: 'success'})
    //     } else {
    //         toast('something went wrong',
    //           { type: "error"});
    //     }
    //     console.log({token, addresses})
    // }

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
                                    {cart.items.map(item => <div>{item.name}</div>)}
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
