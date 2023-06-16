import LogoShini from "./images/heading/bannerlogo.jpg"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <img src={LogoShini} alt="Logotipo Empresa Shining Life" width="50%"
                        height="50%" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse show" id="navbarBasic">
                        <ul className="navbar-nav me-auto mb-xl-0 align-self-center"> 
                            <li className="nav-item">
                                <NavLink className="nav-link mx-2 fs-5 fw-bold" activeclassname="fw-bold" aria-current="page" to={"/"}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-2 fs-5 fw-bold" activeclassname="fw-bold" aria-current="page" to={"/categoria/belleza"}>Belleza</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-2 fs-5 fw-bold" activeclassname="fw-bold" aria-current="page" to={"/categoria/cuidado"}>Cuidado</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-2 fs-5 fw-bold" activeclassname="fw-bold" aria-current="page" to={"/categoria/perfumeria"}>Perfumería</NavLink>
                            </li>
                            <li className="nav-item">
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;