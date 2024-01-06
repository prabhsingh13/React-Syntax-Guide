import './App.css'
import Navbar from './components/Navbar';
import Product from './components/Product';

function App() {

  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center my-4">
        <h1>Dynamic Cards Using Props</h1>
      </div>

      <div className="container">
        <div className="rows">
          <div className="col-md-12 d-flex justify-content-center">
            <Product title="iphone" price={150000} config={{storage:'256GB', memory:'16GB'}} rating={5}/>
            <Product title="Samsung" price={80000} config={{storage:'256GB', memory:'12GB'}} rating={4}/>
            <Product title="Oppo" price={30000} config={{storage:'128GB', memory:'8GB'}} rating={3}/>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center my-4">
        <h1>Use of State & Hooks</h1>
      </div>
    </>
  )
}

export default App;
