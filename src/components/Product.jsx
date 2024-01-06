function Product(props) {
    // let {name, price, config} = props; //destructring props
    return (
        <div className="card text-bg-info m-3 w-25" style={{ "max-width": "18rem" }}>
            {/* <div className="card-header">Header</div> */}
            <div className="card-body">
                <h5 className="card-title">{'Device Name: ' + props.title}</h5>
                <p className="card-text">{'Price: ' + props.price}</p>
                <p className="card-text">{'Storage: ' + props.config.storage}</p>
                <p className="card-text">{'Memory: ' + props.config.memory}</p>
                <p className="card-text">{'Performance Rating: ' + props.rating+'/5'}</p>
            </div>
        </div>
    );
}
export default Product