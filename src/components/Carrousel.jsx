import Imagen1 from "./images/heading/bann1.png"
import Imagen2 from "./images/heading/bann2.png"
import Imagen3 from "./images/heading/bann3.png"

const Carrousel = () => {
    return (
        <div id="carouselWithControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Imagen1} className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                    <img src={Imagen2} className="d-block w-100" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                    <img src={Imagen3} className="d-block w-100" alt="Slide 3" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselWithControls" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselWithControls" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
    )
}

export default Carrousel;