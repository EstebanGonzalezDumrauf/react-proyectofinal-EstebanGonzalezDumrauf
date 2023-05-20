import LogoShini from "./images/heading/bannerlogo.jpg"

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
                                <a className="nav-link mx-2 fs-5 fw-bold" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 fs-5 fw-bold" aria-current="page" href="index.html">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 fs-5 fw-bold" href="index.html" tabIndex="-1" aria-disabled="true">Mi
                                    Carrito</a>
                                    {/* carrito.html */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;