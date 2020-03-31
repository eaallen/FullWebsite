import React, { useState, useContext } from 'react';
import { useRouteMatch} from "react-router-dom";
import AppContext from './context/AppContext'
import { Container, Row, Col, Button} from 'react-bootstrap';
import Msg404 from './Msg404';
import { useHistory } from "react-router-dom";
// import PRODUCTS from '../products'

function ProductDetail(props) {
    const state = useContext(AppContext)
    let history = useHistory();
    let [_img, set_img] = useState(1) 
    let match = useRouteMatch("/product/:id");
    let prod_id = match.params.id
    
    const array1 =  state.product;

    let product = array1.find(x=> x.id===parseInt(prod_id))
    if(!product){
        return <Msg404 msg={prod_id}></Msg404>
    }
    let arr = [1,2,3,4];
    const handle_change = e =>{        
        set_img(e.target.id)        
    }
    const handleClick =(e) => {
        
        history.push("/Cart");
      }


    return (
        <div style={{padding: '2rem'}}>
            <Container>
                <Row>
                    <Col md={10}>
                    
                        
                        <div> <div className="float-right text-center">
                                <img src={`../product_images/${product.filename}-${_img}.png`} style={{marginLeft: '15px'}} alt="uh-oh"/>
                                <br/>
                                {arr.map(item => {return <img src={`../product_images/${product.filename}-${item}.png`} style={{width: '50px'}} id={item} key={item+3} onMouseEnter={handle_change} alt="uh-oh"/>
                                })}
                            </div>
                            <br></br>
                            <h3>
                                {product.name}
                            </h3>
                            {product.description}
                            
                        </div>
                        <br/>
                        <div>
                            <Button type="submit" variant="warning" onClick={e =>{                                
                                state.addToCart(product.id)
                                handleClick()
                            }}
                            >Add to cart</Button>
                        {/* <PurchaseForm product = {product}></PurchaseForm> */}
                        </div>
                        
                    
                        
                       
                    </Col>
                </Row> 
            </Container>   
        </div>
  );
}

export default ProductDetail;
