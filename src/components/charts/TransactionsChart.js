import React, { useEffect, useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import fakeUser from './data'
import './transactionsChart.css'

const TransactionsChart = (type) => {

    // console.log(fakeUser)
    //display type of transaction accordin to props pass in
    // let transactions = []
    const transactions = fakeUser.transactions.filter(item => item.transactionType === type)

    //get unique category name and sorted
    const uniqueCategories = [...new Set(transactions.map(item => item.category).sort())]

    //calculate sum for each categoriess 
    const addCategoryAmount = [...transactions.reduce((r, o) => {
        const key = o.category
        const item = r.get(key) || Object.assign({}, o, {
            amount: 0
        })
        item.amount += o.amount
        return r.set(key, item)
    }, new Map).values()]

    //sort category alphetically
    let sortedCategory = addCategoryAmount.sort((a, b) => {
        let catA = a.name.toLowerCase()
        let catB = b.name.toLowerCase()
        return catA.localeCompare(catB)
    })

    //get amount
    const amount = sortedCategory.map(item => item.amount)

    //get percentage of total
    const total = sortedCategory.reduce((acc, cur) => acc + cur.amount, 0)
    const percent = sortedCategory.map(item => ((item.amount / total) * 100).toFixed(1))
    // console.log(percent)
    //get color
    const color = sortedCategory.map(item => item.color)

    //data for chart
    const data = {

        labels: uniqueCategories,

        datasets: [{
            data: amount,
            percentage: percent,
            backgroundColor: color,
            hoverBackgroundColor: color
        }]
    };

    //customise tooltips
    const chartOptions = {
        "tooltips": {
            mode: 'label',
            callbacks: {
                title: function (tooltipItem, data) {
                    return data.labels[tooltipItem[0].index];
                },
                label: function (tooltipItem, data) {
                    return data.datasets[tooltipItem.datasetIndex].percentage[tooltipItem.index] + '%'
                }
            }
        }
    }

    return (
        <>
            <div className="row">
                <div className="col s12 m6">
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
                </div>
            </div>

        </>
    )
}

export default TransactionsChart
