import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        setItem(producto);
    }, [producto]);

    return (
    <div className="container">
        <div className="row align-items-center align-self-center">
            <div className="col-md-3 offset-md-3">
                <img src={item.images} alt={item.descripcion} className="img-fluid" />
            </div>
            <div className="col-md-4 text-center">
                <h3>{item.descripcion}</h3>
                <h1>$ {item.precio}</h1>
                <h4 className="text-secondary mb-3">{item.marca}</h4>
                <ItemCount inicial={1} stock={item.stock} agregar={(cantidad) => console.log('Cantidad Agregada', cantidad)} />
            </div>
        </div>
    </div>
    )
        
}

export default ItemDetail;