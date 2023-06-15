import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ItemCount = ({ stock, inicial, producto, onAdd}) => {

    const [cantidad, setCantidad] = useState(inicial);
    const [itemStock, setitemStock] = useState(stock);
    const [itemAgregado, setitemAgregado] = useState(false);

    const incrementar = () => {
        if (cantidad < itemStock) {
            setCantidad(cantidad + 1);
        }
    }

    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    const addToCart = (cantidad) => {
        if (cantidad <= itemStock) {
            // console.log('Cantidad Agregada', cantidad);
            setCantidad(1);
            setitemAgregado(true);
            onAdd(cantidad);
            setitemStock(itemStock - cantidad);
        }
    }

    useEffect(() => {
        setitemStock(stock);
    }, [stock]);

    return (
        <div>
            <div className="Botones align-self-center mt-4">
                <h5 className="mx-3 ps-3">Cantidad</h5>
                <div className="d-flex">
                    <div className="btn-group ps-2" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-danger mx-3" onClick={decrementar}>-</button>
                        <p className="h3 text-center pt-2">{cantidad}</p>
                        <button type="button" className="btn btn-success mx-3" onClick={incrementar}>+</button>
                    </div>
                    <div> 
                        {itemAgregado ? <Link to={"/cart"} className="btn btn-dark my-2">Finalizar Compra </Link> : <button className="btn btn-dark my-2" onClick={() => addToCart(cantidad)}>Agregar Al Carrito</button>}
                    </div>
                </div>
                <h6 className="text-secondary mx-3 ps-4 my-1">Stock: {itemStock}</h6>
            </div>
        </div>
    )
}

export default ItemCount;