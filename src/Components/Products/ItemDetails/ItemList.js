import Item from './Item';
import React from 'react';
const ItemList = ({products}) => {
    return (
      <>
      
      {products.map( (product)=>(
      <Item key={product.id} product={product}/>
    ) )}
  
      </>
    );
  };
  
  export default ItemList;