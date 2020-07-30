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
                {props.items.percentLeft > 0 ?
                    <p>You have spent {`${(props.items.percentSpent * 100).toFixed(1)}%`} of your budget. Amount left to spent ${props.items.budgetLeft}</p>
                    :
                    <p className="overspent-alert">You have overspent your budget by ${props.items.spentAmount - props.items.budgetAmount}</p>
                }

            </div>
        </div>




    )
}

export default ProgressBar
