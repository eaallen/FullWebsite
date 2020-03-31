import React from 'react';
import { Row, Col,Jumbotron,} from 'react-bootstrap';


function Msg404(props) {
  
    return (
        <div
            className={props.className}
        >
            <Jumbotron className="text-center">
                <h1>ERROR</h1>
                
                <i className="fas fa-exclamation" style={{
                    fontSize: '800%',
                    color: 'red',
                    textAlign: 'center',
                    
                    padding: '2rem'
                    }}>
                </i>
                <p>
                    {props.msg} could not be found
                </p>
                
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

export default Msg404;
