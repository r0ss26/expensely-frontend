import React, { useState, useEffect } from 'react'
import Filler from './Filler'
import '../chartStyle.css'

const ProgressBar = (props) => {

    return (
        <div className='progress-bar' >
            <Filler items={props.items} />
        </div>

    )
}

export default ProgressBar
