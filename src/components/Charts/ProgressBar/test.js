import React, { useEffect, useContext, useState } from 'react';
import AuthContext from '../../../context/auth/authContext';
import ProgressBar from './ProgressBar';
import '../chartStyle.css'

const BudgetExpenseBar = () => {
    const authContext = useContext(AuthContext);

    const { user } = authContext

    const [allBudgets, setAllBudgets] = useState([])
    const [allExpenses, setAllExpenses] = useState([])
    const [allCategories, setAllCategories] = useState([])
    const [currentDay, setCurrentDay] = useState(null)
    const [spentAmount, setSpentAmount] = useState(0)
    const [items, setItems] = useState([])

    useEffect(() => {
        let newDate = new Date()
        let day = newDate.getDay()
        setCurrentDay(day)

        if (user) setAllBudgets(user.budgets)
        if (user) setAllExpenses(user.transactions.filter(item => item.transactionType === 'expense'))
        if (user) setAllCategories(user.categories)

    }, [user])

    useEffect(() => {

        let newObj = {}
        let result = []

        allBudgets.forEach(bud => {
            allExpenses.map(exp => {
                if (exp.category.includes(bud.category)) {
                    allCategories.map(cat => {
                        if (bud.category === cat._id) {
                            if (newObj.hasOwnProperty(cat.name)) {
                                result[newObj[cat.name]].spentAmount += Number(exp.amount)
                                result[newObj[cat.name]].budgetLeft -= Number(exp.amount)
                                result[newObj[cat.name]].percentSpent += Number(exp.amount / bud.amount)
                                result[newObj[cat.name]].percentLeft -= Number(exp.amount / bud.amount)
                                result[newObj[cat.name]].perDayLeft -= Number(exp.amount / 8 - currentDay)
                                result[newObj[cat.name]].dayLeft -= Number(1)
                            } else {
                                newObj[cat.name] = result.length
                                result.push({
                                    'name': cat.name,
                                    'color': cat.color,
                                    'budgetName': bud.name,
                                    'budgetAmount': bud.amount,
                                    'spentAmount': exp.amount,
                                    'duration': bud.timePeriod,
                                    'payDayLeft': (bud.amount - exp.amount) / (8 - currentDay),
                                    'dayLeft': 8 - currentDay,
                                    'perDay': bud.amount / 7,
                                    "budgetLeft": bud.amount - exp.amount,
                                    "percentSpent": (exp.amount / bud.amount),
                                    "percentLeft": ((bud.amount - exp.amount) / bud.amount)
                                })
                            }
                        }
                    })
                } else {
                    allBudgets.forEach(bud => {
                        allCategories.map(cat => {
                            if (bud.category === cat._id) {
                                if (newObj.hasOwnProperty(cat.name)) {
                                    result[newObj[cat.name]].spentAmount += Number(spentAmount)
                                    result[newObj[cat.name]].budgetLeft -= Number(spentAmount)
                                    result[newObj[cat.name]].percentSpent += Number(spentAmount / bud.amount)
                                    result[newObj[cat.name]].percentLeft -= Number(spentAmount / bud.amount)
                                    result[newObj[cat.name]].perDayLeft -= Number(spentAmount / 8 - currentDay)
                                    result[newObj[cat.name]].dayLeft -= Number(1)

                                } else {
                                    newObj[cat.name] = result.length
                                    result.push({
                                        'name': cat.name,
                                        'color': cat.color,
                                        'budgetName': bud.name,
                                        'budgetAmount': bud.amount,
                                        'spentAmount': spentAmount,
                                        'duration': bud.timePeriod,
                                        'payDayLeft': (bud.amount - spentAmount) / (8 - currentDay),
                                        'dayLeft': 8 - currentDay,
                                        'perDay': bud.amount / 7,
                                        "budgetLeft": bud.amount - spentAmount,
                                        "percentSpent": (spentAmount / bud.amount),
                                        "percentLeft": ((bud.amount - spentAmount) / bud.amount)
                                    })
                                }
                            }
                        })
                    })

                }
            })
        })

        setItems(result)

    }, [allCategories, allBudgets, allExpenses])

    console.log(items)

    return (
        <>
            {items.map(item => (
                <div key={item.name} className="bar-wrapper">
                    <ProgressBar items={item} />
                </div>

            ))}

        </>
    )
}

export default BudgetExpenseBar