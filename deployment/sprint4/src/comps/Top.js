import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import {Row, Col,Navbar,DropdownButton,Dropdown,ButtonGroup, Nav } from 'react-bootstrap';
import AppContext from './context/AppContext' 

function Top(props) {
    const context = useContext(AppContext)
    const[user, setUser] = React.useState(true) 
    const history = useHistory()
    const log_out = e =>{
        // e.preventDefault()
        setUser(false)
        // console.log('user in', user)
    }
    const cart = context.cart
    let arr_cart = Object.values(cart)
    let count = null
    for(const item of arr_cart){
        if(!count)count=0
        count += item
    }
    return (
        <div
            className={props.className}
        >
            <Row>
                <Col sm={5} style={{
                    fontSize: '3rem',
                    color: 'white',
                    paddingLeft: '1rem',
                    }}
                >
                Rat Tunnels
                   
                    
                </Col>
                <Col className='text-light' sm={4}>
                   
                            <Link className='text-light margin-left nav-row' to="/">Home</Link>
                            <Link className='text-light margin-left nav-row' to="/About">About</Link>
                            <Link className='text-light margin-left nav-row' to="/Help">Help</Link>                                
                      
                     
                </Col>
                <Col sm={3}> 
                    <Navbar className="text-light text-right">
                        <div className="mb-2">
                            {['right'].map(direction => (
                            <div key='xx6'>
                                <DropdownButton
                                    as={ButtonGroup}
                                    
                                    id={`dropdown-button-drop-${direction}`}
                                    drop='right'
                                    variant="primary"
                                    title= {<i  className="fas fa-chess-king"
                                                style={{
                                                    fontSize: '3rem',
                                                    textAlign: 'right'                                                    
                                                }}
                                            ></i>}
                                    
                                >
                                <Dropdown.Item className='text-primary'>Elijah Allen</Dropdown.Item>
                                <Dropdown.Item href="/Help">Assay Stats</Dropdown.Item>
                                <Dropdown.Item href="/Account">Account</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item className='text-danger' href='/Login' onClick={log_out}>Sign Out</Dropdown.Item>
                                </DropdownButton>{''}
                            </div>
                            ))}
                        </div>
                        <i className="fas fa-shopping-bag text-left" onClick={e=>history.push('/Cart')} style={{fontSize:'3rem', position:'relative'}}></i>
                        <div style={{position:'relative',left:'-26px',top:'10px', color:'rgb(108, 12, 121)',textAlign:'center'}}>{count}</div>
                    </Navbar>
                </Col>
                       
            
            </Row>
        </div>
  );
}

export default Top;
