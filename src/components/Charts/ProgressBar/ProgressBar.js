import React, { useState, useEffect } from 'react'
import Filler from './Filler'
import '../chartStyle.css'

const ProgressBar = (props) => {
    console.log(props, "progressbar")
    return (
        <div className='progress-bar' >
            <Filler items={props.items} />
            <div>
                <p>Your {props.items.duration} budget for {props.items.name} is ${props.items.budgetAmount}</p>
                <p>You have spent ${props.items.spentAmount} or {`${props.items.percentSpent * 100}%`} of your budget. Amount left to spent ${props.items.budgetLeft}</p>
            </div>
        </div>




    )
}

export default ProgressBar
