import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <>
            <div className="col-md-4 my-2">
                <div className="card">
                    <img src={item.images} className="card-img-top" alt={item.descripcion} />
                    <div className="card-body">
                        <p className="card-text text-center">{item.descripcion}</p>
                    </div>
                    <h2 className="text-center">$ {item.precio}</h2>
                    <Link to={"/item/" + item.id} className="btn btn-outline-danger text-decoration-none text-center">
                        Ver detalle
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Item;