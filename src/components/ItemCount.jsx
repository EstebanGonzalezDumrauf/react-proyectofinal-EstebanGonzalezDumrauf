import { useState } from "react"

const ItemCount = ({ stock, inicial, onAdd }) => {

    const [cantidad, setearCantidad] = useState(inicial)

    const incrementar = () => {
        if (cantidad < stock) {
            setearCantidad(cantidad + 1);
        }
    }

    const decrementar = () => {
        if (cantidad > 1) {
            setearCantidad(cantidad - 1);
        }
    }

    return (
        <div className="Botones">
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-danger mx-3" onClick={decrementar}>-</button>
            <p className="h4 text-center pt-2">{cantidad}</p> 
            <button type="button" class="btn btn-success mx-3" onClick={incrementar}>+</button>
        </div>
        <div>
            <button className="btn btn-dark my-2" onClick={() => onAdd(cantidad)} disabled={!stock}>
                Agregar Al Carrito
            </button>
        </div>
        </div>
    )
}

export default ItemCount;