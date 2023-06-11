import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, getFirestore, getDocs, query, where } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then(resultado => {
            if (resultado.size == 0) {
                console.log("No hay productos");
            } else {
                setItems(resultado.docs.map(producto => ({ id: producto.id, ...producto.data() })));
                setLoading(false);
            }
        });
    }, [id]);

    return (
        <div className="container my-5">
            <div className="row my-2">
                {loading ? <Loading /> : <ItemList items={items} />}
            </div>
        </div>
    )
}

export default ItemListContainer; 