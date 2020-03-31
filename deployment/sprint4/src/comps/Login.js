import React from 'react';
import {  Row, Col,Jumbotron, Button,Form } from 'react-bootstrap';


function Login(props) {
  
    return (
        <div
            className={props.className}
        >
            <Jumbotron className="text-center">
                <h1>Login</h1>
                <a href="/SignUp"> or sign up</a>
                <br/> <br/>
                <i className="fas fa-user-tie circle-icon bg-primary" style={{
                    fontSize: '800%',
                    color: 'white',
                    textAlign: 'center',
                    
                    padding: '2rem'
                    }}>
                </i>
                <div className='custform'>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>                </div>  
            </Jumbotron>

            <Row className='center-row'>
                <Col></Col>
                <Col>
                </Col>
                <Col></Col>
            </Row>    
            </div>
  );
}

export default Login;
