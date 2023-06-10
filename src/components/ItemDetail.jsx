import { useContext, useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext"; 

const ItemDetail = ({producto}) => {
    const {addItem} = useContext(CartContext);
    const [item, setItem] = useState({});

    //const onAdd = (quantity) => {
    const onAdd = (quantity) => {
        console.log("Cantidad" + quantity + item.id);
        addItem(item, quantity);
    };

    useEffect(() => { 
        setItem(producto);
    }, [producto]);

    return (
    <div className="container my-4">
        <div className="row align-items-center align-self-center">
            <div className="col-md-6 offset-md-1">
                <img src={item.images} alt={item.descripcion} className="img-fluid" />
            </div>
            <div className="col-md-5">
                <h3>{item.descripcion}</h3>
                <h1>$ {item.precio}</h1>
                <h4 className="text-secondary mb-3">{item.marca}</h4>
                <div className="text-right mx-5">
                <ItemCount inicial={1} stock={item.stock} producto={item} onAdd={onAdd} />
                </div>

                
            </div>
        </div>
    </div>
    )
        
}

export default ItemDetail;