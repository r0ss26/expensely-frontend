import React from 'react'
import '../chartStyle.css'


const Filler = ({ items }) => {
    console.log(items, "filler")
    return (
        <>
          
                <div className="filler" style={{ width: `${items.percentLeft * 100}%`, background: `${items.color}` }}>
                </div>
        </>
    )
}

export default Filler
