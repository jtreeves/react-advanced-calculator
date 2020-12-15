import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [tempNum, setTempNum] = useState()
    const [operator, setOperator] = useState()
    const [result, setResult] = useState()

    const clear = () => {
        setNum1('')
        setNum2('')
        setOperator('')
    }

    const digitEntered = (digit) => {
        if (digit === '0' && num1 === '') {
            // no-op
        } else if (digit !== '0' && num1 === '') {
            setNum1(digit)
        } else if (num1 !== '') {
            // Concatenate new digit onto existing number
            setNum1(num1 + digit)
        } else if (num1 !== '' && operator !== '') {

        }
    }

    const operatorEntered = (op) => {
        if (num1 === '') {
            // no op
        } else if (num1 !== '' && num2 !== '') {
            //no op
        } else if (operator !== '') {
            // no op
        } else {
            setOperator(op)
        }
    }

    const displayForNum2 = () => {
        if (!num1) {
            return ''
        } else if (!num2) {
            return tempNum
        } else {
            return num2
        }
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <Display num1={num1} num2={num2} />
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <ClearButton clear={clear}/>
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <DigitButton digitEntered={digitEntered} digit="7" />
                    <DigitButton digitEntered={digitEntered} digit="8" />
                    <DigitButton digitEntered={digitEntered} digit="9" />
                    <OperatorButton operatorEntered={operatorEntered} operator="x" />
                    <button className="calc-button">7</button>
                    <button className="calc-button">8</button>
                    <button className="calc-button">9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <DigitButton digitEntered={digitEntered} digit="4" />
                    <DigitButton digitEntered={digitEntered} digit="5" />
                    <DigitButton digitEntered={digitEntered} digit="6" />
                    <OperatorButton operatorEntered={operatorEntered} operator="-" />
                    <button className="calc-button">4</button>
                    <button className="calc-button">5</button>
                    <button className="calc-button">6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <DigitButton digitEntered={digitEntered} digit="1" />
                    <DigitButton digitEntered={digitEntered} digit="2" />
                    <DigitButton digitEntered={digitEntered} digit="3" />
                    <OperatorButton operatorEntered={operatorEntered} operator="+" />
                    <button className="calc-button">1</button>
                    <button className="calc-button">2</button>
                    <button className="calc-button">3</button>
                    <button className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <DigitButton digitEntered={digitEntered} digit="0" wide />
                    <button className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator