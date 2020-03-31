import React from 'react';
import { Form,Button,Col} from 'react-bootstrap';

//import Footer from 'react-bootstrap/';



class PurchaseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name_on_card: '',
            card_number:  '',
            mm:           '',
            yy:           '',
            cvc_code:     '',
        }
    }
    handleChange =(e) => {
        e.preventDefault()
        // let name =e.target.getAttribute('name')
        
        let new_state={[e.target.getAttribute('name')]: e.target.value}
        this.setState(new_state)
        
    }
    submit_form =(e)=>{
        e.preventDefault()
        alert('This is a test \n'+ this.state.name_on_card +'\n' +
        this.state.card_number +'\n' +
        this.state.mm +'\n' +
        this.state.yy +'\n' +
        this.state.cvc_code)
        
    }

    render(){
    return (
        <div>
            {console.log('>>>----->', this.state)}
            <Form>
                <Form.Row>
                    
                        <Form.Group as={Col} md="4" controlId="formBasicEmail">
                            <Form.Label>Name on Card</Form.Label>
                            <Form.Control onChange={this.handleChange} name="name_on_card" value={this.state.name_on_card||""} placeholder="Enter Name" />
                        </Form.Group>
                        
                        <Form.Group as={Col} md="4" controlId="formBasicPassword">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control onChange={this.handleChange} name="card_number" value={this.state.card_number||""} type="number" placeholder="xxxx xxxx xxxx xxxx" />
                        </Form.Group>             
                    
                </Form.Row>
                <Form.Row>
                <Form.Group as={Col} md="2" controlId="formBasicPassword">
                    <Form.Label>MM</Form.Label>
                    <Form.Control onChange={this.handleChange} name="mm" value={this.state.mm||""} type="string" placeholder="mo"/>
                </Form.Group>             
                    <Form.Group as={Col} md="2" controlId="formBasicPassword">
                        <Form.Label>YY</Form.Label>
                        <Form.Control onChange={this.handleChange} name="yy" value={this.state.yy||""} type="string" placeholder="yr"/>
                    </Form.Group>             
                    <Form.Group as={Col} md="2" controlId="formBasicPassword">
                        <Form.Label> CVC Code</Form.Label>
                        <Form.Control onChange={this.handleChange} name="cvc_code" value={this.state.cvc_code||""} type="number" placeholder="xxx" />
                    </Form.Group>             

                </Form.Row>
                <Button type="submit" variant="warning" onClick={this.submit_form}>Buy ${this.props.product.price}</Button>
                <Form.Text className="text-muted">
                    We'll never share your data with anyone else.
                </Form.Text>
            </Form>
        </div>
  );}
}

export default PurchaseForm;
