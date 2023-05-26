import Carrito from "./images/heading/carrito.png"
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <div>
            <Link to={"/"} className="btn btn-ligth" width="20" height="20">
            {/* carrito.html */}
                <button type="button" className="btn btn-ligth position-relative" width="20" height="20">
                    <img src={Carrito} alt="Logo de carrito de compras" width="35" height="35" />
                    <span id="cantidadProdu"
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span>
                </button>
            </Link>
        </div>
    )
}

export default CartWidget;