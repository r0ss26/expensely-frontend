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
    const [items, setItems] = useState([])

    useEffect(() => {

        if (user) setAllBudgets(user.budgets)
        if (user) setAllExpenses(user.transactions.filter(item => item.transactionType === 'expense'))
        if (user) setAllCategories(user.categories)

    }, [user])

    useEffect(() => {

        let newObj = {}
        let result = []


        allBudgets.forEach(bud => {
            allCategories.forEach(cat => {
                if (allExpenses.filter(expense => expense.category === cat._id).length > 0) {
                    allExpenses.forEach(exp => {
                        if (bud.category === cat._id && bud.category === exp.category) {
                            if (newObj.hasOwnProperty(cat.name)) {
                                result[newObj[cat.name]].spentAmount += Number(exp.amount)
                                result[newObj[cat.name]].budgetLeft -= Number(exp.amount)
                                result[newObj[cat.name]].percentSpent += Number(exp.amount / bud.amount)
                                result[newObj[cat.name]].percentLeft -= Number(exp.amount / bud.amount)
                                if (result[newObj[cat.name]].budgetLeft < 0) {
                                    result[newObj[cat.name]].percentLeft = 0
                                }
                            } else {
                                newObj[cat.name] = result.length
                                result.push({
                                    'name': cat.name,
                                    'color': cat.color,
                                    'budgetName': bud.name,
                                    'budgetAmount': bud.amount,
                                    'spentAmount': exp.amount,
                                    'duration': bud.timePeriod,
                                    "budgetLeft": bud.amount - exp.amount,
                                    "percentSpent": (exp.amount / bud.amount),
                                    "percentLeft": ((bud.amount - exp.amount) / bud.amount)
                                })
                            }
                        }
                    })
                } else {
                    allBudgets.forEach(bud => {
                        allCategories.forEach(cat => {
                            if (bud.category === cat._id) {
                                if (newObj.hasOwnProperty(cat.name)) {
                                    result[newObj[cat.name]].spentAmount += Number(0)
                                    result[newObj[cat.name]].budgetLeft -= Number(0)
                                    result[newObj[cat.name]].percentSpent += Number(0 / bud.amount)
                                    result[newObj[cat.name]].percentLeft -= Number(0 / bud.amount)

                                } else {
                                    newObj[cat.name] = result.length
                                    result.push({
                                        'name': cat.name,
                                        'color': cat.color,
                                        'budgetName': bud.name,
                                        'budgetAmount': bud.amount,
                                        'spentAmount': 0,
                                        'duration': bud.timePeriod,
                                        "budgetLeft": bud.amount - 0,
                                        "percentSpent": (0 / bud.amount),
                                        "percentLeft": ((bud.amount - 0) / bud.amount)
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

    return (
        <>{items.length === 0 ? (<div className="noBudget">
            <h5 className="center">Your Budget Plan</h5>
            <p className="center">No Data Available</p>
        </div>) : <>
                {items.map(item => (
                    <div key={item.name} className="bar-wrapper">
                        <ProgressBar items={item} />
                    </div>

                ))}
            </>
        }

        </>
    )
}

export default BudgetExpenseBar


