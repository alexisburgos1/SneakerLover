import {useState, useContext} from 'react';
import { CartContext } from '../../../context/CartProvider';
import ItemCount from "./ItemCount";

const ItemDetail = ({productSelected}) => {
    const [count, setCount] = useState(1);
    const{cart, addToCart} = useContext(CartContext);
    console.log(cart);
    console.log(productSelected.name);
    return (
        <div style={{
                       
            
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            

        }}>
        <div className="productsContainerBig">
            
            <div className="ItemDetailStyleBig">
            <img alt={productSelected.name} src = {`/img/${productSelected.img}`}/>

            <div className="ItemDetailStyleBig_Data">
                <h1>{productSelected.name}</h1>
                <br></br>
                <br></br>
                <p>color: {productSelected.color}</p>
                <p className="priceData">U$D {productSelected.price}</p>
                <br></br>
                <h3>cantidad  de Sneakers en el carrito: {cart.length}</h3>

                </div>
                <div className="ItemDetailStyleBig_footer">
                
                    

                    
                    <br></br>
                    <h3>{count}</h3>
                    <ItemCount setCount={setCount}/>
                    
                    <button className="btnCarro" onClick={()=> addToCart(productSelected,count)}>Agregar al Carrito</button>
                    
                </div>
            
                </div>  
                
        </div>
        </div>
      );
  };
  
  export default ItemDetail;