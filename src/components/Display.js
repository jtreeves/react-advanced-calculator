import React from 'react'

function Display(props) {
    return (
        <div className="answer-box">
            {props.num1} {props.num2} {props.operator}
        </div>
    )
}

export default Display