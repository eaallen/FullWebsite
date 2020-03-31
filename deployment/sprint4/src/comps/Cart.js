

import React, { useState, useContext } from 'react';
import { Container, Row, Col, Button,} from 'react-bootstrap';
import AppContext from './context/AppContext'   
import { useHistory } from "react-router-dom";

function Cart(props){
    const context = useContext(AppContext)
    let history = useHistory();
    const cart = context.cart
    const arr_cart = Object.entries(cart)
    const handleClick =(e) => {
        if(context.getCartCount() !== null){
            history.push("/PointOfSale");
        }else{
            alert('You must have an item in the cart.')
        }
    }

    return(
        <div>

            <div className='text-center'>
                <h1></h1>
                <div style={{backgroundColor:'white'}}>
                <Container>
                    <Row>
                        <Col sm={1}></Col><Col><h6>Name</h6></Col><Col><h6>Quantity</h6></Col><Col><h6>Price</h6></Col><Col><h6>Remove Row</h6></Col>
                    </Row>
                </Container>
                
                    {arr_cart.map(item => {
                        let item_info = context.product.find(x=> x.id===parseInt(item[0]))
                        return(
                        <div key={item[0]+'ID'}>
                            <Container>
                                <Row className='div-underline-lite'>
                                    <Col sm={1}><img src={`../product_images/${item_info.filename}-1.png`} style={{width: '30px'}}/></Col>
                                    <Col><p>{item_info.name}</p> </Col>
                                    <Col> 
                                        {item[1]===1?'':<i style={{color:'rgb(108, 12, 121)'}} className="fas fa-minus-circle" onClick={e=>{context.takeFromCart(item[0])}}/>} 
                                        {item[1]} 
                                        <i style={{color:'rgb(108, 12, 121)'}} className="fas fa-plus-circle" onClick={e=>{context.addToCart(item[0])}}/></Col>
                                    <Col> ${(item_info.price*item[1]).toFixed(2)}   </Col>
                                    <Col><i className="fas fa-times-circle" onClick={e=>{context.removeFromCart(item[0])}}> </i></Col>
                                </Row>
                            </Container>
                        </div>
                    )})}
                </div>
                <Button type="submit" className='button-spacing' variant="warning" onClick={e =>{
                    handleClick()}}
                >
                    Proceed to Check Out
                </Button>
    
            </div>

            







        </div>
    )
}
export default Cart;