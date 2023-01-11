import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navbar} from "./Components/Header/navbar";
import CartProvider from './context/CartProvider';
import Home from "./Pages/Home/Home";
import ItemListContainer from "./Components/Products/ItemDetails/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/Products/ItemDetails/ItemDetailContainer";
import Cart from './../src/Pages/Cart/Cart'
function App() {
  return (
    
    <div className="App">
      
        <BrowserRouter> 
        <CartProvider>
          <Navbar /> 
          
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br><br></br>
            <br></br>
            <div className="Cards">
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/detail' element={<ItemListContainer/>} />
              <Route path='/detail/:categoryName' element={<ItemListContainer/>} />
              <Route path='/item/:id' element={<ItemDetailContainer/>} />
              <Route path='/cart' element = {<Cart/>}/>
            </Routes>
            </div>
            </CartProvider>
        </BrowserRouter>
      
      
        
    </div>
    
  );
}

export default App;
