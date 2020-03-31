import React from 'react';
import axios from 'axios';
import App from '../../App'
import AppContext from './AppContext'
import Spinner from 'react-bootstrap/Spinner'
import produce from 'immer'
import ProductDetail from '../ProductDetail';
//import immer
class AppProvider extends React.Component{
    constructor(props){
        super(props)
        this.actions={
            addToCart: this.addToCart,
            removeFromCart: this.removeFromCart,
            getCartCount: this.getCartCount, 
            getCartTotalPrice: this.getCartTotalPrice, 
            emptyCart: this.emptyCart,  
            addToRecentViews: this.addToRecentViews,
            takeFromCart: this.takeFromCart,
        }
        this.state = {
            categories: null,
            product: null,
            cart: {
                
            },
            recentViews:[], 
            
        }
        //.....where pid is the id of the product.....
    }
    addToCart = (pid) =>{
        this.setState(state=> produce(state, draft=>{
            if(!draft.cart[pid]){
                draft.cart[pid] = 1
            }else{
                draft.cart[pid]++
            }
        }))
        
    }
    takeFromCart = (pid) =>{
        this.setState(state=> produce(state, draft=>{
            if(draft.cart[pid]){
                draft.cart[pid]--
            }
        }))
        
    }
    addToRecentViews = (pid) =>{
        this.setState(state=> produce(state, draft=>{
            if(draft.recentViews.indexOf(pid)===-1){
                draft.recentViews.unshift(pid)
            }else{
                draft.recentViews.splice(draft.recentViews.indexOf(pid),1)
                draft.recentViews.unshift(pid)
            }
        }))

    }
    removeFromCart = (prodID) =>{
        this.setState(state=>produce(state,draft =>{
            delete draft.cart[prodID]
        }))
    }
    getCartCount = () =>{
        let arr_cart = Object.entries(this.state.cart)
        let count = null
        for(const item of arr_cart){
            if(!count)count=0
            count += item    
        }
        if(count <= 0){
            return null
        }else{
            return count
        }
        
    }
    getCartTotalPrice = () =>{
        let arr_cart = Object.entries(this.state.cart)
        let total_price = 0
        for(const item of arr_cart){
            let item_info = this.state.product.find(x=> x.id===parseInt(item[0]))
            let price = parseFloat(item_info.price) * item[1]
            total_price += price
        }
        return total_price
    }    
    emptyCart = (prodID) =>{
        this.setState(state=>produce(state,draft =>{
            draft.cart={}
        }))
    }
    render(){
        if(!this.state.product){
            return(
                <>
                    <Spinner animation="border" variant="danger" />                    
                </>
            ) 
    
        }      
        return(
            <>
                <AppContext.Provider  value={{...this.state, ...this.actions}}>
                    <App/>
                </AppContext.Provider>
                
            </> 
        )
        
    }
    async componentDidMount(){
        const cate =  await axios.get('http://localhost:8000/category/')
        const prod =  await axios.get('http://localhost:8000/product/')
        this.setState({...this.state, categories: cate.data, product: prod.data})
    }
}
export default AppProvider