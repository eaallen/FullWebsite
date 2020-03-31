import React, {useContext} from 'react';
import AppContext from './context/AppContext'
import ProductCard from './ProductCard';
import { Container, Row, Col} from 'react-bootstrap';
// import { isTemplateSpan } from 'typescript';
import { useRouteMatch} from "react-router-dom";
import Msg404 from './Msg404'

function Filter(props) {
    const state = useContext(AppContext)
    
    let match = useRouteMatch("/filter/:cata");
    let category_id = match.params.cata
    const array =  state.product;
    
   const a_filtered = array.filter(obj =>  obj.category.title === category_id)
   
   if(a_filtered.length===0){
    return <Msg404 msg={category_id}></Msg404>
   }

   //these arries will hold the products in the columns
   let a_super=[]
   let rows = []
   for (let icount = 0; icount < a_filtered.length;icount = icount+4){
        let a_baby = a_filtered.slice(icount,icount+4)
        a_super.push(a_baby)
    }
    for (let item of a_super){
       rows.push(<Row key={item[0].id+'y'}>{item.map((col)=>{return <Col key={col.id} md={3}>
                    <ProductCard product={col} id={col.id} filename={col.filename} name={col.name} category={col.category.title}
                    price={col.price}/></Col>})}</Row>) 
    }
    
    //geting list of catagories
    let catagories = array.map(item => item.category)
    //making it a unique list
    let unique_catagories = catagories.filter((value, index, _self)=> _self.indexOf(value)===index);
    return (
        <div
            className={props.className}
        >
            <Container>        
                {rows}
            </Container>   
            </div>
  );
}

export default Filter;
