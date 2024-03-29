// MIT License

import React, {useState, useEffect, useContext} from 'react'
import { Grid } from 'semantic-ui-react'
import {Analytics} from 'aws-amplify';

import AppContext from '../context/AppContext'

import InitState from './InitState'
import CheckoutBanner from '../components/CheckoutBanner'
import CheckoutSummary from '../components/CheckoutSummary'
import Footer from '../components/Footer'
// import CheckoutPayment from '../components/CheckoutPayment'
// var product_data = require('../products.json');
// const uuidv4 = require('uuid/v4');

function Checkout(props) {
    // eslint-disable-next-line
    const [ordering, setOrdering] = useState(false);
    // eslint-disable-next-line
    const [card, setCard] = useState(0);
    const [totalPurchase, setTotal] = useState(0);
    const [orderComplete, setOrderComplete] = useState(false);

    const {user, cart, items, clearCart} = useContext(AppContext);

    const quantText = (cart.items.length === 1) ? '1 item' : cart.items.length + ' items'

    function handleCardUpdate(e) {
        setCard(e.value)
    }

    function submitOrder() {
        setOrderComplete(true)
    }

    useEffect(() => {
        function calculateTotal() {
            var total = 0;
            var _item = null;
    
            cart.items.map((item) => {
                var _product = items.filter(function (el) {
                    return el.id === item.id
                });
    
                _product.length === 1 ? _item = _product[0] : _item = null;
                total += (_item.price * item.quantity);
                return null
            });
    
            setTotal(parseFloat(total).toFixed(2));
            return parseFloat(total).toFixed(2)
        }

        calculateTotal()
    }, [cart.items, items]);

    useEffect(() => {
        if (orderComplete) {
            Analytics.updateEndpoint({
                attributes: {
                    hasShoppingCart: ['false'],
                    completedOrder: ['true']
                },
                metrics: {
                    itemsInCart: 0,
                    orderNumber: "1001"
                }
            });

            console.log("Purchase price", totalPurchase);

            const _mTotal = parseFloat(totalPurchase).toFixed(2);
            Analytics.record('_monetization.purchase', {
                _currency: 'USD',
                _product_id: 'XYZ',
              }, {
                _item_price: _mTotal,
                _quantity: 1.0,
              });

            clearCart();

            props.history.push('/')
        }
    }, [orderComplete, props.history, clearCart, totalPurchase]);

    return (
        <div>
            <InitState/>
            <CheckoutBanner quantity={quantText}/>
            <div style={mainDiv}>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column floated='left' width={15}>
                            <CheckoutSummary placedOrder={ordering}
                                             onCardUpdate={handleCardUpdate}
                                             onOrder={submitOrder}
                                             user={user}
                                             cart={cart}
                                             total={totalPurchase}
                                             />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
            <div
                style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0
                }}>
                <Footer style={{bottom: 0, marginTop: '2em'}}/>
            </div>
        </div>
    )
}

export default Checkout

const mainDiv = {
    marginLeft: '5em',
    marginRight: '1em',
    marginTop: '2em'
};