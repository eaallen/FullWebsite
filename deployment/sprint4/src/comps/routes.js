import React from 'react';
import { Container, Row, Col,Jumbotron } from 'react-bootstrap';
import AppContext from './context/AppContext'   
import { useHistory } from "react-router-dom";

function CheckOutRoute(props){
    const history = useHistory()
    const context = React.useContext(AppContext) 
    
    if(context.cart){
        history.push("/PointOfSale")
    }

    return(<div></div>)
}
export default CheckOutRoute;