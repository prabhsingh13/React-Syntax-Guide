import React, { useState } from 'react';

function NumberAnalyzer() {
    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState('');

    const analyzeNumber = () => {
        const number = parseInt(userInput);

        if (isNaN(number)) {
            setResult('Please enter a valid number.');
        } else {
            // Check if it's a whole number
            const isWholeNumber = Number.isInteger(number);

            // Check if it's a prime number
            let isPrime = true;
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    isPrime = false;
                    break;
                }
            }

            // Check if it's even or odd
            const isEven = number % 2 === 0;

            // Generate the result string based on the checks
            let resultString = `Number ${number} is `;
            resultString += isWholeNumber ? 'a whole number, ' : '';
            resultString += isPrime ? 'a prime number, ' : '';
            resultString += isEven ? 'an even number.' : 'an odd number.';

            setResult(resultString);
        }
    };

    return (
        <div className="container bg-light shadow-lg my-5 p-4 border border-warning rounded">
      <div className="card-body">
        <h1 className="card-title d-flex justify-content-center">Number Analyzer</h1>
        <hr/>
        <h5>Enter a number:</h5>
        <div className="input-group mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Enter a number"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyUp={analyzeNumber}
          />
          <button className="btn btn-warning" type="button" onClick={analyzeNumber}>
            Analyze
          </button>
        </div>

        <div className="mt-3">
          <p>{result}</p>
        </div>
      </div>
    </div>
    );
}

export default NumberAnalyzer;
