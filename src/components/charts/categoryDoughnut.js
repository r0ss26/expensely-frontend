import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import user from './data'

const categoryDoughnut = () => {

    let transactions = user.transactions.filter(item => item.transactionType === 'expense')

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

    //sort category after sum
    const sortedCategoryAmount = addCategoryAmount.sort((a, b) => {
        let catA = a.category.toLowerCase()
        let catB = b.category.toLowerCase()
        return catA.localeCompare(catB)
    }).map(item => item.amount)

    //data for chart
    const data = {
        labels: uniqueCategories,

        datasets: [{
            data: sortedCategoryAmount,
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };

    return (
        <div>
            <h2>Doughnut Example</h2>
            <Doughnut data={data} />
        </div>
    )
}

export default categoryDoughnut
