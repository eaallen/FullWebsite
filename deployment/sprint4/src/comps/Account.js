import React from 'react';
import { Row, Col,Jumbotron,Button } from 'react-bootstrap';


function Account(props) {
  
    return (
        <div
            className={props.className}
        >
            <Jumbotron className="text-center">
                <div>
                    <h1>Acount</h1> <br></br>
                    <i className="fas fa-user-tie circle-icon" style={{
                        fontSize: '800%',
                        color: 'white',
                        textAlign: 'center',
                        backgroundColor: 'lightblue',
                        padding: '2rem'
                        }}>
                    </i>  
                </div><br/>        
                <h4>Elijah Allen</h4>
                <Row className='center-row'>
                    <Col>
                    </Col>
                    <Col>
                        <Button href='/Help'>Change Password</Button> <br/><br/>
                        <Button href='/Login'>Sign Out</Button>
                    
                    </Col>
                    <Col>
                    </Col>
                    
                </Row>
            </Jumbotron>

            <Row>
                <Col></Col>
                <Col>
                </Col>
                <Col></Col>
            </Row>    
            </div>
  );
}

export default Account;
