// MIT License

import React from 'react'
import { Grid, Divider, Segment, Button } from 'semantic-ui-react'
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';
import { toast } from 'react-toastify';

toast.configure();

function CheckoutSummary(props) {
    const {user, total} = props

    const [product] = React.useState({
        name: "PCB1",
    });

    function getAtt(name) {
        return user ? user[name] : ""
    }

    async function handleToken(token, addresses) {
        const response = await axios.post('https://nrv4g.sse.codesandbox.io/checkout', {
            token,
            product
        })
        const { status } = response.data
        if (status === 'success') {
            toast('Success, check email for details!',
              { type: 'success'})
        } else {
            toast('something went wrong',
              { type: "error"});
        }
        console.log({token, addresses})
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
                            <BoldText>Payment methods</BoldText>
                        </Grid.Column>
                        <Grid.Column width={7} verticalAlign='middle'>
                            <Grid columns={3}>
                                <Grid.Column width={10}>
                                    <b>PayPal</b>
                                </Grid.Column>
                                <Grid.Column>
                                    <b>Stripe</b>
                                  <StripeCheckout
                                    stripeKey="pk_test_revWelj4x1RBFQdPL0ctqDH000sejhBjYK"
                                    token={handleToken}
                                    billingAddress
                                    shippingAddress
                                    amount={total}
                                    currency="USD"
                                    name="WLT Product"
                                  />
                                </Grid.Column>
                            </Grid>
                            <br/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <Segment>
                                <Grid columns={2}>
                                    <Grid.Column width={4}>
                                        <Button color='orange' loading={props.placedOrder} onClick={props.onOrder}>Place your order</Button>
                                    </Grid.Column>
                                    <Grid.Column width={8} verticalAlign='middle'>
                                        <TotalText>Order total: ${total}</TotalText>
                                    </Grid.Column>
                                </Grid>
                            </Segment>
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
`
const NormalText = styled.div`
  font-size: 1em;
`
const TotalText = styled.div`
  font-size: 1.2em;
  font-weight: bold
  color: #B12704;
`