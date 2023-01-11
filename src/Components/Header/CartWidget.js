import React from "react";
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import {CartContext} from '../../context/CartProvider'
export const CartWidget = () => {

    const { cart, artsAtCart } = useContext(CartContext);
    return(
            <Link to="/cart" className="navbar">
            <div className="cart">
                <box-icon name='cart' color='white' animation='tada'></box-icon>
                <span className="ir" {...cart.length === 0 ? 'hide' : ''} >{cart.length}</span>
            </div>
            </Link>
    )
}