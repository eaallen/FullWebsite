import React from 'react';
import Bottom from './comps/Bottom';
import Help from './comps/Help';
import About from './comps/About';
import Left from './comps/Left';
import Right from './comps/Right';
import Center from './comps/Center';
import Top from './comps/Top';
import Account from './comps/Account';
import Login from './comps/Login';
import SignUp from './comps/SignUp';
import Filter from './comps/Filter';
import ProductDetail from './comps/ProductDetail';
import Cart from './comps/Cart'
import PointOfSale from './comps/PointOfSale'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import './index.scss'
import { Row, Col,Container} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Msg404 from './comps/Msg404';
import Thankyou from './comps/Thankyou';
import AppContext from './comps/context/AppContext'   

function App() {
  const context = React.useContext(AppContext)  
  return (
    <div className="App">
    <Router>
      <Container fluid >
        <Row>
          <Col xl={12}>
            {/* <Navbar> */}
              <Top className="bg-primary"></Top>
            {/* </Navbar>  */}
          </Col>
        </Row>
        <Row noGutters>
          <Col xl={2}>
            <Left className=" h-100 w-100"></Left>
          </Col>
          <Col xl={8} >
            
               <div>
                
                <Switch>
                  
                  <Route path="/filter/:cata" key='filter' >
                    <Filter />
                  </Route>
                  <Route path="/product/:id" >
                    <ProductDetail />
                  </Route>
                  <Route path="/SignUp">
                    <SignUp />
                  </Route>
                  <Route path="/Account">
                    <Account />
                  </Route>
                  <Route path="/Login">
                    <Login />
                  </Route>
                  <Route path="/About">
                    <About />
                  </Route>
                  <Route path="/Help">
                    <Help />
                  </Route>
                  <Route path="/Cart">
                    <Cart />
                  </Route>
                  <Route path ={!context.getCartCount()?'PointOfSale':'/'}>
                    <PointOfSale/>  
                  </Route>
                  <Route path ="/Thankyou">
                    <Thankyou/>  
                  </Route>
                  <Route exact path="/" key='error'>
                    <Center style={{padding: '2rem'}} />
                  </Route>
                  <Route>
                    <Msg404 />
                  </Route>
                </Switch>
              </div>
                      
          </Col>
          <Col xl={2}>
            <Right className=" h-100"></Right>
          </Col>         
          
        </Row>
        <Row>
          <Col xl={12}>
            <Bottom className="text-light bg-danger text-center"></Bottom>
          </Col>
        </Row>      
      
      </Container>
    </Router> 
    </div>
  );
}

export default App;
