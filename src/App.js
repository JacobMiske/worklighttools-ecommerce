// MIT License

import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
// import signUpConfig from './config/signUpConfig'

import InitState from './pages/InitState'
import TopMenu from './components/TopMenu'
import Footer from './components/Footer';
import Carousel from './components/Carousel'
import ItemTable from './components/ItemTable'
import './App.css';

Amplify.configure(awsconfig);

class App extends React.Component {
  // constructor(props, context) {
  //   super(props, context);
  // }

  render() {
    if (this.props.authState === "signedIn") {
      return (
        <div style={styles}>
          <InitState/>
          <TopMenu/>
          <Container text style={{marginTop: '1em', marginBottom: '1em'}}>
            <Header as='h1' style={{textAlign: 'center'}}>
              News at WorkLight Tools
            </Header>
          </Container>
          <Container fluid>
            <Carousel/>
          </Container>
          <Container style={{marginTop: '2em'}}>
            <Header as='h2'>Electronics</Header>
            <p>Add to your existing prototype boards</p>
          </Container>
          <Container style={{marginTop: '2em'}}>
            <ItemTable type='shield'/>
          </Container>
          <Container style={{marginTop: '2em'}}>
            <Header as='h2'>Mechanical</Header>
            <p>Mount motors, frame speakers, and drape LEDs</p>
          </Container>
          <Container style={{marginTop: '2em'}}>
            <ItemTable type='companion'/>
          </Container>
          <Footer style={{marginTop: '2em'}}/>
        </div>
      );
    }
    else {
      // If a user is not signed in, display this.
      return (
        <div style={styles}>
          <InitState/>
          <TopMenu/>
          <Container text style={{marginTop: '1em', marginBottom: '1em'}}>
            <Header as='h1' style={{textAlign: 'center'}}>
              News at WorkLight Tools
            </Header>
          </Container>
          <Container fluid>
            <Carousel/>
          </Container>
          <Container style={{marginTop: '2em'}}>
            <Header as='h2'>Electronics</Header>
            <p>Add to your existing prototype boards</p>
          </Container>
          <Container style={{marginTop: '2em'}}>
            <ItemTable type='shield'/>
          </Container>
          <Container style={{marginTop: '2em'}}>
            <Header as='h2'>Mechanical</Header>
            <p>Mount motors, frame speakers, and drape LEDs</p>
          </Container>
          <Container style={{marginTop: '2em'}}>
            <ItemTable type='companion'/>
          </Container>
          <Footer style={{marginTop: '2em'}}/>
        </div>
      );
    }
  }
}

export default App;

const styles = {
    marginLeft: '1em',
    marginRight: '1em'
};
