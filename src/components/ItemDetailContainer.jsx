import productos from "./json/productos.json"
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                let producto = productos.find(item => item.id === id)
                resolve(producto);
            }, 2000);
        });

        promesa.then(data => {
            setItem(data);
        }) 
    }, [id]);

    return (
    <>
    <ItemDetail producto={item} />
    </>
    )
        
}

export default ItemDetailContainer;