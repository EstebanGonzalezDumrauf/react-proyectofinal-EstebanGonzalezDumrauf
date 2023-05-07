import Shining from "./images/heading/shining.png"
import Papelera from "./images/heading/residuos.png"
import Navbar from "./Navbar"
import CartWidget from "./CartWidget"
import Carrousel from "./Carrousel"

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-light">
                <div className="col-md-6 mt-2">
                    <a href=""><img src={Shining} alt={"ShiningLife"} width={32}/></a>
                </div>
                <div className="col-md-6 mt-2 text-end">
                <a href="" className="text-dark text-decoration-none">Quienes Somos</a> | <a href="" className="text-dark text-decoration-none">Ayuda</a>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8 d-flex align-items-left">
                    <Navbar />
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-end">
                    <CartWidget />
                    <a href="#" className="btn btn-ligth" width="20" height="20">
                        <button type="button" className="btn btn-ligth position-relative" width="20"
                            height="20">
                            <img src={Papelera} alt="Logo de carrito de compras" width="22" height="22" />
                        </button>
                    </a>
                    <a id="user" className="btn btn-ligth" width="20" height="20"></a>
                    <div id="divLogin">
                        <a href="#" id="login" className="btn btn-ligth" width="20" height="20">Login</a>
                    </div>
                </div>
            </div>     
            <Carrousel />      
            <div className="text-center my-2">
                <h2>QUIERO MIS PRODUCTOS NATURA</h2>
            </div>
            <div className="text-center my-2">
                <a href="" className="btn btn-dark">Comprar</a>
            </div>
        </div>
    )
}

export default Header;