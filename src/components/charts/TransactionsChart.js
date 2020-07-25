import React, { useEffect, useContext, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import fakeUser from './data'
import AuthContext from '../../context/auth/authContext';
import './transactionsChart.css'
import { sortCategory } from '../../utils/helper'

const TransactionsChart = ({ transactions, type }) => {
    // console.log("type", type)
    const authContext = useContext(AuthContext);
    const { user } = authContext

    const [allTransactions, setAllTransactions] = useState([]);
    const [categories, setCategories] = useState([])
    const [amountCategory, setAmountCategory] = useState([])
    const [percent, setPercent] = useState([])
    const [color, setColor] = useState([])


    useEffect(() => {
        //display type of transaction accordin to props pass in
        setAllTransactions(transactions.filter(item => item.transactionType === type))

    }, [transactions])

    //const transaction = fakeUser.transactions.filter(item => item.transactionType === 'expense')
    console.log(allTransactions)

    useEffect(() => {
        let newObj = {}
        allTransactions.forEach(function (item) {
            console.log("item", item)
            if (newObj.hasOwnProperty(item.category)) {
                newObj[item.category] = newObj[item.category] + item.amount
            } else {
                newObj[item.category] = item.amount
            }
        })
        console.log(newObj)
        let total = []
        for (let prop in newObj) {
            total.push({ category: prop, amount: newObj[prop] })
        }
        total.sort((a, b) => {
            let catA = a.category.toLowerCase()
            let catB = b.category.toLowerCase()
            return (catA < catB) ? -1 : (catA > catB) ? 1 : 0;
        })

        setCategories(total.map(item => item.category))
        setAmountCategory(total.map(item => item.amount))
        let sum = total.reduce((acc, cur) => acc + cur.amount, 0)
        setPercent(total.map(item => ((item.amount / sum) * 100).toFixed(1)))
        setColor()


    }, [allTransactions])

    // console.log("sum", sum)
    console.log(categories)
    console.log(amountCategory)
    console.log(percent)



    // // console.log(percent)
    // //get color
    // const color = sortedCategory.map(item => item.color)

    // //data for chart
    // const data = {

    //     labels: uniqueCategories,

    //     datasets: [{
    //         data: amount,
    //         percentage: percent,
    //         backgroundColor: color,
    //         hoverBackgroundColor: color
    //     }]
    // };

    // //customise tooltips
    // const chartOptions = {
    //     "tooltips": {
    //         mode: 'label',
    //         callbacks: {
    //             title: function (tooltipItem, data) {
    //                 return data.labels[tooltipItem[0].index];
    //             },
    //             label: function (tooltipItem, data) {
    //                 return data.datasets[tooltipItem.datasetIndex].percentage[tooltipItem.index] + '%'
    //             }
    //         }
    //     }
    // }
    return (
        <>
            <div className="row">
                {/* <div className="col s12 m6">
                    <div className="card white darken-1">
                        <div className="card-content black-text">
                            <span className="card-title">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                            <Doughnut data={data} options={chartOptions} />
                        </div>
                        <div className="card-action">
                            {sortedCategory.map((item, i) =>
                                (<li key={i}><span className='dot' style={{ backgroundColor: `${item.color}` }}></span><span>{item.category} ${item.amount}</span></li>)
                            )}

                        </div>
                    </div>
                </div> */}
            </div>

        </>
    )
}

export default TransactionsChart
