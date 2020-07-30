import React from 'react'
import Filler from './Filler'
import '../chartStyle.css'

const ProgressBar = (props) => {

    return (
        <div className='progress-bar' >
            <Filler items={props.items} />
            <div>
                <h5 className="center">Your Budget Plan</h5>

                <p>Your {props.items.duration} budget for {props.items.name} is ${props.items.budgetAmount}</p>
                <p>You have spent {`${props.items.percentSpent.toFixed(1) * 100}%`} of your budget. Amount left to spent ${props.items.budgetLeft}</p>


            </div>
        </div>




    )
}

export default ProgressBar
