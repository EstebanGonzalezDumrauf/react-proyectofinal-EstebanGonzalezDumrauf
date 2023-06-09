const Error404 = () => {
    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-danger" role="alert">
                        <h1>Error 404</h1>
                        <h3>La página no existe.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error404;