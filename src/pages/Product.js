// MIT License

import React, { useState, useContext } from 'react'
import { Button, Grid, Icon, Image, Header, Card, Divider, Dropdown } from 'semantic-ui-react'
import styled from 'styled-components'
import { Analytics } from 'aws-amplify'

import AppContext from '../context/AppContext'

import InitState from './InitState'
import TopMenu from '../components/TopMenu'
import Footer from "../components/Footer";

function Product(props) {
    const [quantity, setQuantity] = useState(1);

    const {items, cart, addItemToCart} = useContext(AppContext);

    const { params } = props.match;

		const _product = items.filter(function (el) {
			return el.id === parseInt(params.id)
		});

		let product = "";
			if (_product.length === 1) product = _product[0];

			if (product) {
                var features = product.info.map((item) => {
                    return <li key={item.length}>{item}</li>
                })
			}

			let quant = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
					return { key: item, value: item, text: item }
			});

    function addItem(product, quantity) {
        addItemToCart(product, quantity);

        Analytics.updateEndpoint({
            attributes: {
                hasShoppingCart: ['true']
            },
            metrics: {
                itemsInCart: cart.items.length
            }
        })
    }

    return (
        <div style={styles}>
            <InitState/>
            <TopMenu />
            <Grid columns={3} stackable style={{marginTop: '1em'}}>
                <Grid.Row>
                    <Grid.Column>
                        <Image src={product.mainImage} />
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header as='h2'>{product.title}</Header>
                        by WorkLight Tools
                    <Divider />
                        <Grid columns={2}>
                            <Grid.Column width={1} style={{ marginRight: '5px' }}>
                                Price
                            </Grid.Column>
                            <Grid.Column width={2} textAlign='left'>
                                <PriceText> ${product.price}</PriceText>
                            </Grid.Column>
                        </Grid>
                        <StockText>In Stock.</StockText>
                        <BoldText>Want it delivered in two weeks? We can do that.</BoldText>
                        <BoldText> Features: </BoldText>
                        <InfoText>
                            <ul>
                                {features}
                            </ul>
                        </InfoText>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Card fluid>
                            <Card.Content>
                                <div>
                                    Quantity: <Dropdown floating
                                                       inline options={quant} 
                                                       defaultValue={1} 
                                                       onChange={(e, {value}) => setQuantity(value)}/>
                                </div>
                                <Divider />
                                <Button icon 
                                        labelPosition='left' 
                                        color='blue'
                                        fluid
                                        onClick={() => addItem(product, quantity)}>
                                    <Icon name='cart' />
                                    <ButtonStyle>Add to Cart</ButtonStyle>
                                </Button>
                                {/*<Divider />*/}
                                {/*<Button icon */}
                                {/*        labelPosition='left' */}
                                {/*        color='grey' */}
                                {/*        fluid*/}
                                {/*    >*/}
                                {/*    <Icon name='list' />*/}
                                {/*    <ButtonStyle>Add to Wish List</ButtonStyle>*/}
                                {/*</Button>*/}
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Footer style={{marginTop: '2em'}}/>
        </div>
    )
}

export default Product

const styles = {
    marginLeft: '1em',
    marginRight: '1em',
    marginTop: '2em'
};

const PriceText = styled.div`
    font-size: 14pt;
    color: #B12704;
`;

const StockText = styled.div`
    padding-top: 1em;
    padding-bottom: 1em;
    font-size: 14pt;
    color: #008a00;
`;

const BoldText = styled.div`
    font-size: 10pt;
    font-weight: bold;
    padding-bottom: 1em;
`;

const InfoText = styled.div`
    font-size: 10pt;
`;

const ButtonStyle = styled.div`
    padding-left: 2em;
`;