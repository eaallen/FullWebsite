import React from 'react';
import {Row, Col,Jumbotron, Button,Form } from 'react-bootstrap';


function SignUp(props) {
  
    return (
        <div
            className={props.className}
        >
            <Jumbotron className="text-center">
                <h1>Sign up</h1> <br></br>
                <i className="fas fa-user-tie circle-icon bg-warning" style={{
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
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Get notifications" />
                    </Form.Group>
                    <Button variant="warning" type="submit">
                        Submit
                    </Button>
                    </Form>                </div>  
            </Jumbotron>

            <Row className='center-row'>
                <Col>
                    <h1>Hopes</h1>
                    <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur

                    </p>
                </Col>
                <Col>
                <h1>Dreams</h1>
                    <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur

                    </p>
                
                </Col>
                <Col>
                
                <h1>Success</h1>
                    <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur

                    </p>
                </Col>
            </Row>    
            </div>
  );
}

export default SignUp;
