import React, { useEffect, useContext, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import AuthContext from '../../context/auth/authContext';
import './chartStyle.css'


const TransactionsChart = (props) => {
    const authContext = useContext(AuthContext);
    const { user } = authContext

    const [allTransactions, setAllTransactions] = useState([]);
    const [type, setType] = useState([])
    const [allCategories, setAllCategories] = useState([])
    const [categoryItems, setCategoryItems] = useState([])
    const [categories, setCategories] = useState([])
    const [amount, setAmount] = useState([])
    const [percent, setPercent] = useState([])
    const [color, setColor] = useState([])

    useEffect(() => {
        if (user) setAllTransactions(user.transactions)
        if (user) setAllCategories(user.categories)

        const type = allTransactions.filter(item => item.transactionType === props.type)
        setType(type)
    }, [user, allTransactions, props.type])

    useEffect(() => {
        let newObj = {}
        let result = []
        type.forEach(item => {
            allCategories.forEach(cat => {
                if (item.category === cat._id) {
                    if (newObj.hasOwnProperty(cat.name)) {
                        result[newObj[cat.name]].amount += Number(item.amount)
                    } else {
                        newObj[cat.name] = result.length
                        result.push({
                            'name': cat.name,
                            'color': cat.color,
                            'amount': item.amount
                        })
                    }
                }
            })
        })

        result.sort((a, b) => {
            let catA = a.name.toLowerCase()
            let catB = b.name.toLowerCase()
            return (catA < catB) ? -1 : (catA > catB) ? 1 : 0;
        })

        let sum = result.reduce((acc, cur) => acc + cur.amount, 0)
        setCategoryItems(result)
        setCategories(result.map(item => item.name.charAt(0).toUpperCase() + item.name.slice(1)))
        setColor(result.map(item => item.color))
        setAmount(result.map(item => item.amount))
        setPercent(result.map(item => ((item.amount / sum) * 100).toFixed(1)))

    }, [type, allCategories])

    //data for chart
    const data = {

        labels: categories,
        datasets: [{
            data: amount, categories,
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
                            <span className="card-title">{props.type.charAt(0).toUpperCase() + props.type.slice(1)}</span>
                            {categoryItems.length === 0 ? 'No data available' : <Doughnut data={data} options={chartOptions} />}


                        </div>
                        <div className="card-action">
                            {categoryItems.map((item, i) =>
                                (<li key={i}><span className='dot' style={{ backgroundColor: `${item.color}` }}></span><span>
                                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                    {" "}${item.amount}
                                </span></li>)
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default TransactionsChart
