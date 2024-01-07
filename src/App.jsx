import './App.css'
import { useState } from "react";
import Navbar from './components/Navbar';
import Product from './components/Product';
import ClickToChange from './components/ClickToChange';
import CountryLoop from './components/CountryLoop';
import NumberAnalyzer from './components/NumberAnalyzer';

function App() {

  let data = [
    { name: "India", capital: "Delhi", population: "1.4B" },
    { name: "Australia", capital: "Canberra", population: "330M" },
    { name: "France", capital: "Paris", population: "67.5M" },
    { name: "England", capital: "London", population: "56.5M" }
  ];

  let [countries, setCountries] = useState(data);

  function loadNewConteries() {
    setCountries([
      { name: "United States", capital: "Washington, D.C.", population: "331M" },
      { name: "China", capital: "Beijing", population: "1.41B" },
      { name: "Brazil", capital: "Brasília", population: "213M" },
      { name: "Japan", capital: "Tokyo", population: "126M" }
    ]);
  }

  

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px' }}></div>
      {/* ---------------------------------- */}

      <div className="container d-flex justify-content-center my-4">
        <h1>Dynamic Cards Using Props</h1>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <Product title="iphone" price={150000} config={{ storage: '256GB', memory: '16GB' }} rating={5} />
          <Product title="Samsung" price={80000} config={{ storage: '256GB', memory: '12GB' }} rating={4} />
          <Product title="Oppo" price={40000} config={{ storage: '128GB', memory: '8GB' }} rating={3} />
          <Product title="Vivo" price={30000} config={{ storage: '128GB', memory: '6GB' }} rating={3} />
        </div>
      </div>

      {/* ---------------------------------- */}

      <div className="container d-flex justify-content-center my-4">
        <h1>Use of State & Props</h1>
      </div>
      <ClickToChange />

      {/* ---------------------------------- */}

      <div className="container bg-light shadow-lg my-5 p-4 border border-info rounded">
      <div className="container d-flex justify-content-center">
        <h1>Displaying Data from an Array using Loops</h1>
      </div>
      <hr/>

        <div className="row justify-content-center">
          {
            countries.map((country) => {
              return (
                <CountryLoop name={country.name} capital={country.capital} population={country.population} />
              );
            })
          }
        </div>
        <div className="d-flex justify-content-center">
          <button onClick={loadNewConteries} className="btn btn-info mt-3">Change Countries</button>
        </div>
      </div>

      {/* ---------------------------------- */}

      <NumberAnalyzer/>

      {/* ---------------------------------- */}

      <div style={{ paddingTop: '80px' }}></div>

    </>
  )
}

export default App;
