function CountryLoop(props){
    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card bg-warning m-3">
                <div className="card-body">
                    <h5 className="card-title">{'Name: ' + props.name}</h5>
                    <p className="card-text mb-0">{'Capital: ' + props.capital}</p>
                    <p className="card-text">{'Population: ' + props.population}</p>
                </div>
            </div>
        </div>
    );
}
export default CountryLoop;