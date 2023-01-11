import {createContext, useState} from 'react';
import React, {}  from 'react';

export const CartContext = createContext([]);



const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    };
    
    const addToCart = (product, quantity) => {
        if (isInCart(product.id)){
            alert('El producto ya se encuentra en el carrito');
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
            setCart([...cart, { ...product, quantity }]);
        
    };

    

    // Remover un elemento del carrito
    const removeItem = (id) => {
        setCart(cart.filter((product) => product.id !== id));
    }

    // Vaciar el carrito de
    const clearCart = () => setCart([]);


    return (
        <CartContext.Provider value={{cart, addToCart, clearCart, removeItem}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;