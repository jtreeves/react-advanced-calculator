import React from 'react'

function DigitButton(props) {
    let className = "calc-button"
    
    if (props.wide) {
        className += " width-2"
    }
    
    return (
        <button className={className}>
            {props.digit}
        </button>
    )
}

export default DigitButton