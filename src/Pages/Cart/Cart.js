import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { addDoc, getFirestore, collection, doc, updateDoc } from "firebase/firestore";
import moment from 'moment';

    const Cart = () => {
    const {cart, removeItem, clearCart} = useContext(CartContext);
    const [total, setTotal] = useState (0);
    const [formValues, setFormValues] = useState({
        name: '',
        phone: '',
        email: '',
    })

    const getTotalPrice = () => {
        setTotal(
            cart.reduce((acc,product) => acc + product.price * product.quantity, 0)
        );
    };



    const createOrder = () => {
        const db = getFirestore();
        const query = collection(db, 'Order');
        const newOrder = {
            buyer: {
                name: formValues.name,
                phone: formValues.phone,
                email: formValues.email,
            },
            date: moment().format('DD/MM/YYYY'),
            items: cart,
            total: total,
        };
        addDoc(query, newOrder)
        .then((response) => {

            alert (`Orden creada con el id ${response.id}`);
            clearCart();
            return response;
            
        })
        .then((res) => {
            cart.forEach((product) => {
                const query = doc(db, 'Items', product.id);
                updateDoc(query, {
                stock: product.stock - product.quantity,
            });
                
            });
            
        })
        
    
        .catch((error) => console.log (error));
    };
    useEffect(() => {
        getTotalPrice();
    }, [cart]);


    const handleInputChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name] : event.target.value,
        });
    }

    return(
        <div style={{
                       
            
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            

        }}>
        <div className="wholeContainer" >
            
            {cart.map((product) => (

                <div key={product.id}>

                    <div className="productsContainer">
                    <div className="ItemDetailStyle">
                    <button onClick={() => removeItem(product.id)}>Remove from Cart</button>
                    
                        <img alt={product.name} src = {`./../../img/${product.img}`}/>
                    
                    <div className="ItemDetailStyle_footer">
                        <h1>{product.name}</h1>
                        <p>Color: {product.color}</p>
                        <p className="price">U$D {product.price}</p>
                        <p>Pares de sneakers: {product.quantity}</p>
                    </div>
                </div>
            </div>
        </div>
                 ))}
                 
        </div>
        
        <div className="formulario">
            <h2>Formulario</h2> 
            <input name= 'name' type="text" placeholder="Nombre" value={formValues.name} onChange={handleInputChange} />
            <input name= 'phone' type="text" placeholder="Telefono" value={formValues.phone} onChange={handleInputChange}/>
            <input name= 'email' type="text" placeholder="Email" value={formValues.email} onChange={handleInputChange}/>
        </div>

        <div className="CartTotal">
            <h2>Total de la orden de compra: U$D {total}</h2>
            <button onClick={createOrder}>Create Order</button>
            
            </div>
        

    </div>
        );     
    
};

export default Cart;