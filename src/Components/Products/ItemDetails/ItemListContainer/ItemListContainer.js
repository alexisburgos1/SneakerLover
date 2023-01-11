import React,{ useState, useEffect } from 'react';
import ItemList from "./../ItemList";
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import './ItemListContainer.css'


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection (db, "Items");
    if (categoryName){
      const queryFilter = query(
        querySnapshot,
        where('brand', '==', categoryName)
      );
      getDocs(queryFilter)
      .then((response) => {
        const data = response.docs.map((item) => {
          //console.log(item.data());
          //console.log(item.id);
          return {id: item.id, ...item.data() };
        });
        //console.log(data);
        setItems(data);
      })
      .catch((error) => {
        //console.log(error);
      });
    } else{
      getDocs(querySnapshot)
      .then((response) => {
        const data = response.docs.map((item) => {
          //console.log(item.data());
          //console.log(item.id);
          return { id: item.id, ...item.data() };
        });
        console.log(data);
        setItems(data);
      })
      .catch((error) => {
        //console.log(error);
      });
    }
  };
  useEffect (() => {
    getProducts();
  }, [categoryName]);
  
  
  return (
  <div style={{
                       
            
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    

}}><div className="wholeContainer">{<ItemList products ={items} />}</div>
<div><br></br><br></br><br></br><br></br></div>
</div>

); 
};

export default ItemListContainer;