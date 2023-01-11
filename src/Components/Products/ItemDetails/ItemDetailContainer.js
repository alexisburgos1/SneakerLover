import React, {useState, useEffect} from "react";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from "./ItemDetails";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [productSelected, setProductSelected] = useState();
    const { id } = useParams();


    const getProduct = () => {
        const db = getFirestore();
        const query = doc(db, 'Items', id);
        getDoc(query)
        .then((response) => {
            console.log(response.data());
            setProductSelected({id: response.id, ...response.data() });
        })
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        getProduct();
    }, [id]);

    return (
        <div>
        {productSelected && <ItemDetail productSelected={productSelected} />}
        </div>
    );
}

export default ItemDetailContainer;