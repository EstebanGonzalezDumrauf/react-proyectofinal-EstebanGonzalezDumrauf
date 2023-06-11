import Papelera from "./images/heading/residuos.png"
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Cart = () => {
    const { cart, removeItem, clear, totalItems, totalMonto } = useContext(CartContext);

    if (totalItems() > 0) {
        return (
            <div className="container-fluid my-5">
                <div className="row my-2">
                    <div className="col text-center">
                        <h1>Productos Seleccionados</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <tbody>
                                {
                                    cart.map(item => (

                                        <tr key={item.id} className="align-middle">
                                            <td><img src={item.images} alt={item.descripcion} width={80} /></td>
                                            <td className="text-start">{item.descripcion}</td>
                                            <td className="text-start mx-5">Cantidad: {item.cantidad} x $ {item.precio} c/u</td>
                                            <td className="text-start">$ {item.cantidad * item.precio}</td>
                                            <td className="text-end"><button className="btn btn-ligth" onClick={() => { removeItem(item.id) }} title="Eliminar Producto"><img src={Papelera} alt="Eliminar Producto" width={35} /></button></td>
                                        </tr>

                                    ))
                                }
                            </tbody>
                        </table>
                        <div className="row">
                            <div className="col text-center">
                                <h5>Total de la compra: $ {totalMonto()} </h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <p>Total de prodcutos: {totalItems()} por un monto de {totalMonto()}</p> */}
            </div>
        )
    } else {
        return (
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-warning" role="warning">
                            <h1>Carrito Sin Productos</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;