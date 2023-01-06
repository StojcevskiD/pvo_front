import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Repository} from "./Repository";

function App() {
    const [minimum, setMinimum] = useState();
    const [line, setLine] = useState();
    const [isSuccess, setIsSuccess] = useState<Boolean | null>(null)

    const doCalculation = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileValue = event.target.files![0]
        let formData = new FormData()
        formData.append("file", fileValue)

        Repository.calculate(formData).then(r => {
            setLine(r.data.line)
            setMinimum(r.data.minimum)
            setIsSuccess(true)
        }).catch(r=>{
            setIsSuccess(false)
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <input type="file" onChange={(event) => doCalculation(event)}/>
                Minimum: {minimum ?? '/'}, line: {line ?? '/'}
                {isSuccess === true ?
                    <div style={{color: 'green'}}>Successfully calculated</div>
                    : isSuccess === false && <div style={{color: 'red'}}>Wrong input format</div>
                }
            </header>
        </div>
    );
}

export default App;
// •	upload an input file,
// •	start calculation via API web service,
// •	display the result on the screen,
// •	display the processing time in milliseconds, and
// •	download the output file.
