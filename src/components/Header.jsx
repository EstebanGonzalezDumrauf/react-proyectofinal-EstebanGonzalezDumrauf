import Shining from "./images/heading/shining.png"
import Papelera from "./images/heading/residuos.png"
import Navbar from "./Navbar"
import CartWidget from "./CartWidget"
import Carrousel from "./Carrousel"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-light align-self-center">
                <div className="col-md-6 ">
                    <Link to={"/"}><img src={Shining} alt={"ShiningLife"} width={32}/></Link>
                </div>
                <div className="col-md-6 text-end">
                <Link to={"/"} className="text-dark text-decoration-none">Quienes Somos</Link> | <Link to={"/"} className="text-dark text-decoration-none">Ayuda</Link>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8 d-flex align-items-left">
                    <Navbar />
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-end">
                    <CartWidget />
                    <Link to={"/"} className="btn btn-ligth" width="20" height="20">
                        <button type="button" className="btn btn-ligth position-relative" width="20"
                            height="20">
                            <img src={Papelera} alt="Logo de carrito de compras" width="22" height="22" />
                        </button>
                    </Link>
                    <Link to={"/"} id="user" className="btn btn-ligth" width="20" height="20"></Link>
                    <div id="divLogin">
                        <Link to={"/"} id="login" className="btn btn-ligth fs-6" width="20" height="20">Login</Link>
                    </div>
                </div>
            </div>     
            <Carrousel />      
        </div>
    )
}

export default Header;