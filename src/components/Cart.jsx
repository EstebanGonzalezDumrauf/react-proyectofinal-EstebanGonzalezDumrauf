import Papelera from "./images/heading/residuos.png"
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, totalItems, totalMonto } = useContext(CartContext);

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
                                            <td className="text-start"><h5>{item.descripcion}</h5></td>
                                            <td className="text-start mx-5"><h5>Cantidad: {item.cantidad} x $ {item.precio} c/u</h5></td>
                                            <td className="text-start"><h5>$ {item.cantidad * item.precio}</h5></td>
                                            <td className="text-end"><button className="btn btn-ligth" onClick={() => { removeItem(item.id) }} title="Eliminar Producto"><img src={Papelera} alt="Eliminar Producto" width={25} /></button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className="row">
                            <div className="col text-center">
                                <h5>Total de la compra: $ {totalMonto()} </h5>
                                <Link to={"/checkout"} className="btn btn-outline-success text-decoration-none text-center my-2"><h5>Hacer Pedido</h5></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-warning">
                            <h1>Carrito Sin Productos</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;