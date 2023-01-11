import React,{useEffect, useState} from 'react';

    const ItemCount = ({setCount}) => {
        const addItem = () => {
            setCount((currentValue) => currentValue + 1);
        };
        const removeItem = () => {
            setCount((currentValue) => {
                if(currentValue > 1) {
                    return currentValue - 1;
                } else {
                    return currentValue;
                } 
            });
        };
        return (
            <div className="buttom">
            <button  className="btn" onClick={removeItem}>-</button>
            
            <button className="btn" onClick={addItem}>+</button>
            <br></br>
            </div>

        );
    };

export default ItemCount;