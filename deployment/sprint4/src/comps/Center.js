import React, {useContext} from 'react';
import ProductCard from './ProductCard';
import AppContext from './context/AppContext';
import { Container, Row, Col,} from 'react-bootstrap';

function Center(props) {
    const state = useContext(AppContext)
    const array =  state.product;
   //these arries will hold the products in the columns
   let a_super=[]
   let a_rows = []
   for (let icount = 0; icount < array.length;icount = icount+4){
        let a_baby = array.slice(icount,icount+4)
        a_super.push(a_baby)
    }
    for (let item of a_super){
       a_rows.push(<Row key={item[0].id+'z'}>{item.map((col)=>{return <Col key={col.id}  md={3}>
                    <ProductCard product={col} key={col.id+'a'} id={col.id} filename={col.filename} name={col.name} category={col.category.title}
                    price={col.price}/></Col>})}</Row>) 
    }
    return (
        <div
            className={props.className}
        >
            <Container>
                {a_rows}
            </Container>   
            </div>
  );
}

export default Center;
