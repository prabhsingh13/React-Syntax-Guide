function Product(props) {
    // let {name, price, config} = props; //destructring props
    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card bg-info m-3">
                <div className="card-body">
                    <h5 className="card-title">{'Device: ' + props.title}</h5>
                    <p className="card-text">{'Price: ' + props.price}</p>
                    <p className="card-text">{'Storage: ' + props.config.storage}</p>
                    <p className="card-text">{'Memory: ' + props.config.memory}</p>
                    <p className="card-text">{'Rating: ' + props.rating + '/5'}</p>
                </div>
            </div>
        </div>
    );
}
export default Product