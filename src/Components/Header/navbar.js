import React from "react";
import sneakersLover from "../../img/sneakers_lover.png"
import {CartWidget} from "./CartWidget"
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return(
        
       <div className="headerStyle">
        <header>
                
            <a href="/">
                <div className="logo">
                    <img src ={sneakersLover} alt="" width="140" className="logosneaker"/>                
                </div>
            </a>
            <ul>
                <li>

                <Link to="/detail/" className="navbar">All Products</Link>
                
                </li>
                <li>

                <Link to="/detail/Nike" className="navbar">Nike</Link>
                
                </li>
                <li>
                <Link to="/detail/Adidas" className="navbar">Adidas</Link>
                </li>
            </ul>
            <CartWidget />
            
            </header>
            
        </div>  
        

    )
}