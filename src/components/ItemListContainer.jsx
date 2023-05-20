import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import productos from "./json/productos.json"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000);
        });

        promesa.then(data => {
            setItems(data);
        })
    }, []);

    return (
        <div className="container my-5">
            <div className="row my-2">
                <ItemList items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer; 