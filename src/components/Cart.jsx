import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Cart = () => {
    const {cart, removeItem, clear, totalItems, totalMonto} = useContext(CartContext);

    return (
        <div>
            <h1>Carrito, Espero</h1>

            <ul>
                {cart.map(items => <li> {items.descripcion + " (" + items.cantidad + ")" } </li>)}
            </ul>
            <p>Total de prodcutos: {totalItems()} por un monto de {totalMonto()}</p>
        </div>
    )
}

export default Cart;