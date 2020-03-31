import React, {useContext} from 'react';
import { Nav,} from 'react-bootstrap';
import AppContext from './context/AppContext'
// import PRODUCTS from '../products'

//import Footer from 'react-bootstrap/';



function MyNav(props) {
    const state = useContext(AppContext)
    const array =  state.product;
    let category_count = {}
    for(let prod of array){        
        category_count[prod.category.title] = (category_count[prod.category.title]||0) +1        
    }

    return (
        <div
            className={props.className}
        >           
        <Nav defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link href={"/"}>All</Nav.Link>
                    </Nav.Item>
                    {Object.entries(category_count).map(item =>{return( <Nav.Item key={item[0]+'parent'}> 
                        <Nav.Link href={'/filter/'+item[0]} key={item}>{item[0]} ({item[1]})</Nav.Link> </Nav.Item>)})}
                </Nav>

        </div>
  );
}

export default MyNav;
