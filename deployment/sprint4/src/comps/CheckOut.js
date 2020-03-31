import React,{useContext} from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field} from 'formik'
import axios from 'axios'
import AppContext from './context/AppContext' 
import Spinner from 'react-bootstrap/Spinner'
import {useStripe, CardElement, Elements, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { Container, Row, Col,} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const stripePromise = loadStripe("pk_test_uvsUqlNRjAmg0WiBpMSZik8c00R8NDmpAS");
function Checkout(props) {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutController />
        </Elements>
    )
}
export default Checkout


const CheckoutController = props => {
    const context = useContext(AppContext)
    const stripe = useStripe()
    const elements = useElements();
    const [getError, setError] = React.useState(null)
    const history = useHistory()
    
    const total = context.getCartTotalPrice()

    return (
        <Formik
            initialValues={{
                name: 'Conrad Fox',
                address1: '1234',
                address2: '5678',
                city: 'Provo',
                state: 'UT',
                zipcode: '84602',
                total: context.getCartTotalPrice(),
                items: context.cart,
                payment_intent: {data:'this is data'}
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {}
                let arr_values = Object.keys(values)
                arr_values.map( item =>{
                    if(!values[item]){
                        errors[item] = 'Required'
                    }
                })
                
                return errors
            }}
            onSubmit={async (values, actions) => {
                setError(null)
                const resp = await axios.post('http://localhost:8000/sale/',values)
                const stripe_resp = await stripe.confirmCardPayment(resp.data.client_secret,{
                    payment_method: {
                        card: elements.getElement(CardElement),
                        billing_details: {
                            name: values.name,
                        }, 
                    } 
                })
                if(stripe_resp.error){
                    setError(stripe_resp.error.message)
                }else{
                    if(stripe_resp.paymentIntent.status==='succeeded'){
                        //more code here
                        context.emptyCart()
                        history.push("/Thankyou");

                    }
                }
                await new Promise( resolve =>{
                    setTimeout(() => {  // wait 2 seconds, then set the form as "not submitting"
                        resolve()
                        // actions.setSubmitting(false)
                    }, 2000)

                })
            }}
        >{form => (
            <PaymentForm form={form} total={total} context={context} stripe_error={getError}/>
        )}</Formik>
    )
}


/**
 * The form layout/html.
 * This component needs finishing.
 */
const PaymentForm = props => (
    <Form >
        <div className='purchase-from'>
            <Container>
                <Row>
                    <Col>
                        <div className='shipping-form'>
                            <h2>Shipping</h2>
                            <Input title="Name:" name="name" type="text" disabled={props.form.isSubmitting}/>
                            <Input title="Address 1:" name="address1" type="text" disabled={props.form.isSubmitting}/>
                            <Input title="Address 2:" name="address2" type="text" disabled={props.form.isSubmitting}/>
                            <Row>
                                <Col>
                                    <Input title="City:" name="city" type="text" disabled={props.form.isSubmitting}/>
                                </Col>
                                <Col>
                                    <Input title="State:" name="state" type="text" disabled={props.form.isSubmitting}/>
                                </Col>
                                <Col>
                                    <Input title="Zipcode:" name="zipcode" type="text" disabled={props.form.isSubmitting}/>                                       
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col>
                        <h2>Payment</h2>
                        <div className='div-underline-lite scroll-div'>
                            {Object.entries(props.context.cart).map(item =>{
                                let item_info = props.context.product.find(x=> x.id===parseInt(item[0]))
                                return(
                                    <Row key={item[0]+'ID'} className='div-underline-extra-lite'>
                                        <Col>
                                            {item_info.name}
                                        </Col>
                                        <Col>
                                            {item[1]}
                                        </Col>
                                        <Col>
                                            ${(item_info.price*item[1]).toFixed(2)}
                                        </Col>
                                    </Row>
                                )
                            })}
                        </div>
                        <Row><Col></Col><Col className="text-right">Total Price:</Col><Col>${props.context.getCartTotalPrice().toFixed(2)}</Col></Row>
                        <CardElement options={CARD_ELEMENT_OPTIONS}/>        
                        <div className='text-center'>
                            <bs.Button variant="warning" className="button-spacing" type='submit' disabled={props.form.isSubmitting}>{props.form.isSubmitting? <Spinner animation="border" variant="primary" size="sm"/>: 'BUY! BUY! BUY!'}</bs.Button>
                            <p className="text-muted">All sales are fake.</p>
                        </div>
                        <p className='text-center' style={{color:'red'}}>{props.stripe_error}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </Form>
)


/**
 * A form input.
 *   props.title - the title that shows above the input box
 *   props.type - the type of input (see React Bootstrap Form.Control)
 *   props.placeholder - placeholder text in the input.
 * This component is finished and doesn't need additional work.
 */
const Input = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
           
            <bs.Form.Control
                disabled={props.disabled}
                type={props.type}
                placeholder={props.title}
                {...rProps.field}
            />
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)

const CARD_ELEMENT_OPTIONS = {
    style: {
        base:{
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    }
    
}