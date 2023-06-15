import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { collection, getFirestore, addDoc, doc, updateDoc } from "firebase/firestore";

const CheckOut = () => {
    const { cart, totalMonto } = useContext(CartContext);

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderID, setOrderID] = useState("");

    const GenerarOrden = () => {

        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }

        const buyer = { name: nombre, phone: telefono, email: email };
        const items = cart.map(item => ({ id: item.id, title: item.descripcion, price: item.precio }));

        //probar modifi Stock
        const stocks = cart.map(item => ({ id: item.id, title: item.nuevostock }));



        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = totalMonto();

        const order = { buyer: buyer, items: items, date: date, total: total };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(resultado => {
            setOrderID(resultado.id);
        }).catch(
            resultado => {
                console.log("Error!! NO SE PUDO COMPLETAR LA COMPRA");
            }
        )
        
        //probar modifi STOCK
        const dbStock = getFirestore();
        const orderDoc = doc(db, "orders", "4IJ6d9fDYgZ0exZR14sa");
        updateDoc(orderDoc, {stock: cart.cantidad}).then(resultado => {
            console.log("Stock Actualizado");
        }).catch(
            resultado => {
                console.log("Error!! NO SE PUDO COMPLETAR LA COMPRA");
            }
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 offset-md-1">
                    <form>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">E-mail</label>
                            <input type="text" className="form-control" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label for="telefono" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>
                        <button type="button" className="btn btn-success" onClick={GenerarOrden}>Generar Pedido</button>
                    </form>
                </div>
                <div className="col-md-7 ">
                    <table className="table mx-2">
                        <tbody>
                            {
                                cart.map(item => (
                                    <tr key={item.id} className="align-middle">
                                        <td><img src={item.images} alt={item.descripcion} width={80} /></td>
                                        <td className="text-start">{item.descripcion}</td>
                                        <td className="text-start mx-5">Cantidad: {item.cantidad}</td>
                                        <td className="text-start mx-3">$ {item.cantidad * item.precio}</td>
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
            {orderID ? 
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-warning">
                            <h1>GRACIAS POR TU COMPRA!!</h1>
                            <h3>Tu orden de compra es {orderID}</h3>
                        </div>
                    </div> 
                </div>
            </div> : ""}
        </div>
    )
}

export default CheckOut;