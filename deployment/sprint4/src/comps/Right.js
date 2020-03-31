import React from 'react';
import {Link} from "react-router-dom";
import AppContext from './context/AppContext'

function Right(props) {
    const context = React.useContext(AppContext)
    const recentViewIDs = context.recentViews 
    
    return (
        <div className={props.className} style={{paddingLeft:'10px'}}>
            <div className="">
                <h6>Recent Products</h6>
            </div>
            {recentViewIDs.map(item=>{
                let product = context.product.find(x=> x.id===parseInt(item))
                return(
                    <Link to={"/product/"+product.id} style={{ textDecoration: 'none' }} onClick={e=>context.addToRecentViews(product.id)} key={item.toString()+product.name}>
                        <div className="nav-card">
                            {product.name}
                        </div>
                    </Link>
            )})}
       
        </div>
  );
}

export default Right;
