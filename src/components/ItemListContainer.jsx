const ItemListContainer = ({ greeting }) => {
    return (
        <div className="alert alert-danger my-5" role="alert">
            <h1 className="text-center">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer; 