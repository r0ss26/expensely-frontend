import React from 'react'
import '../chartStyle.css'


const Filler = (props) => {
    console.log(props)
    return (
        <div className="filler" style={{ width: `${props.items}%` }}>

        </div>
    )
}

export default Filler
