import { Link, useParams } from "react-router-dom";

const Order = () => {
    const {orderId} = useParams();
    
    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-success">
                        <h1>MUCHAS GRACIAS POR TU COMPRA!!</h1>
                        <h3>Se generó la Orden de Compra {orderId}.</h3>
                        <p><Link to="/" className="btn btn-outline-success text-decoration-none text-center mt-2">Volver a HOME</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;