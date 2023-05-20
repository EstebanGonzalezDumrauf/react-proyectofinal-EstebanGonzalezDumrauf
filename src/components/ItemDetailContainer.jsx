import productos from "./json/productos.json"
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                let producto = productos.find(item => item.id === "AT-6450")
                resolve(producto);
            }, 2000);
        });

        promesa.then(data => {
            setItem(data);
        }) 
    }, []);

    return (
    <>
    <ItemDetail producto={item} />
    </>
    )
        
}

export default ItemDetailContainer;