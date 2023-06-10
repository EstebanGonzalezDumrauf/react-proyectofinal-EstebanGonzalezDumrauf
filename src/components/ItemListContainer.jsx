import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
//import productos from "./json/productos.json"
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, getFirestore, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    // useEffect(() => {
    //     const promesa = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(id ? productos.filter(producto => producto.categoria === id) : productos)
    //         }, 2000);
    //     });

    //     promesa.then(data => {
    //         setItems(data);
    //     })
    // }, [id]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then(resultado => {
            if (resultado.size == 0) {
                console.log("No hay productos");
            } else {
                setItems(resultado.docs.map(producto => ({ id: producto.id, ...producto.data() })));
            }
        });
    }, [id]);

    return (
        <div className="container my-5">
            <div className="row my-2">
                <ItemList items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer; 