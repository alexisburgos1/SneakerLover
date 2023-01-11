import {Link} from 'react-router-dom';
// import ItemList from "../ItemList/ItemList";
import React, {}  from 'react';
const Item = ({product}) => {
    return(
        <Link to={`/item/${product.id}`} style={{textDecoration: 'none',}}>
        
        <div className="productsContainer">
            <div className="ItemDetailStyle">
                
                    <img alt={product.name} src = {`./../../img/${product.img}`}/>
                
                <div className="ItemDetailStyle_footer">
                    <h1>{product.name}</h1>
                    <p>COLOR: {product.color}</p>
                    <p className="price">U$D {product.price}</p>
                </div>
                <p>stock disponible: {product.stock}</p>
                <div className="buttom">
                    
                    <Link to={`/item/${product.id}`}><button className="btn">Information</button></Link>

                </div> 
            </div>
            
        </div>
         
        </Link>
         
        
    );
};

export default Item;