import React from 'react'
import '../chartStyle.css'


const Filler = ({ items }) => {

    return (
        <>
            <div className="filler" style={{ width: `${items.percentLeft * 100}%`, background: `${items.color}` }}>
            </div>
        </>
    )
}

export default Filler
