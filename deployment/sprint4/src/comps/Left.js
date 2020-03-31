import React, {useContext} from 'react';
import AppContext from './context/AppContext'
import { Nav,} from 'react-bootstrap';
import {Link} from "react-router-dom";
function Left(props) {
    const state = useContext(AppContext)
    
    
    const array =  state.product;
    //these arries will hold the products in the columns
    let a_super=[]
    let a_of_cata = []
    for (let icount = 0; icount < array.length;icount = icount+4){
           
         let a_baby = array.slice(icount,icount+4)
         a_super.push(a_baby)
    }
    //geting list of catagories
    let catagories = array.map(item => item.category.title)
    //making it a unique list
    let unique_catagories = catagories.filter((value, index, _self)=> _self.indexOf(value)===index);
    for(var u_item of unique_catagories){
        let a_items = []
        for(var item of catagories){
            if (item === u_item){
                a_items.push(item)
            }
        }
        a_of_cata.push(a_items)

    }
    return (
        
        <div
            className={props.className}
            
        >
            <Nav defaultActiveKey="/" className="flex-column">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div className='nav-card'>
                        All ({catagories.length})
                    </div>
                </Link>
                {a_of_cata.map((item,index)=>{ return (
                    <Link to={'/filter/'+item[0]}key={index} style={{ textDecoration: 'none' }}>
                        <div className="nav-card">
                            {item[0]} ({item.length})
                        </div>
                    </Link>
                
                )})}
            </Nav>

            
        </div>
        
  );
}

export default Left;
