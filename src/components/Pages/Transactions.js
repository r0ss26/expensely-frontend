import React from 'react'
import './pageStyle.css'
import TransactionsTable from '../TransactionsTable/TransactionsTable'

const Transactions = () => {
    return (
        <div className='container-wrapper'>
            <h1 className="center-align">Your Transactions</h1>
            <TransactionsTable />
        </div>
    )
}

export default Transactions
