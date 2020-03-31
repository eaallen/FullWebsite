

import React, { useState, useContext } from 'react';
import CheckOut from './CheckOut'
import AppContext from './context/AppContext'   
function PointOfSale(props){
    const context = useContext(AppContext)

    return(
        <div>
           <CheckOut/>                    
        </div>
    )
}
export default PointOfSale;