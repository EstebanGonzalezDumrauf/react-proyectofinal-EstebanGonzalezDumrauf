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
        <div>
            <div className="Botones align-self-center mt-3">
                <h5 className="mx-3 ps-3">Cantidad</h5>
                <div className="btn-group ps-2" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-danger mx-3" onClick={decrementar}>-</button>
                    <p className="h4 text-center pt-2">{cantidad}</p>
                    <button type="button" className="btn btn-success mx-3" onClick={incrementar}>+</button>
                </div>
                <div>
                    <button className="btn btn-dark my-2" onClick={() => onAdd(cantidad)} disabled={!stock}>
                        Agregar Al Carrito
                    </button>
                </div>
            </div>
        </div>



    )
}

export default ItemCount;