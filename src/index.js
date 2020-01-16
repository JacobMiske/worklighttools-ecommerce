// MIT License

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import {StripeProvider} from 'react-stripe-elements';
import Amplify, { Analytics } from 'aws-amplify'
import * as serviceWorker from './serviceWorker';
import AppProvider from './context/AppProvider'
import App from './App';
import Product from './pages/Product'
import Checkout from './pages/Checkout'
import PlacedOrder from './pages/PlacedOrder'
import About from "./pages/About";
import Contact from "./pages/Contact";
import SiteMap from "./pages/SiteMap";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import awsconfig from './aws-exports';
import AppWithAuth from "./components/AppWithAuth";

Amplify.configure(awsconfig)

Analytics.record('Store_Load');
        
Analytics.autoTrack('pageView', {
    enable: true,
    type: 'SPA'
})

const routing = (
    <AppProvider>
        <StripeProvider apiKey="pk_test_revWelj4x1RBFQdPL0ctqDH000sejhBjYK">
            <Router>
                <Switch>
                    <Route exact path="/" component={AppWithAuth} />
                    <Route exact path="/home" component={App} />
                    <Route path="/product/:id" component={Product} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/ordercomplete" component={PlacedOrder}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/sitemap" component={SiteMap}/>
                    <Route path="/privacy" component={Privacy}/>
                    <Route path="/terms" component={Terms}/>
                    <Route component={App} />
                </Switch>
            </Router>
        </StripeProvider>
    </AppProvider>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
