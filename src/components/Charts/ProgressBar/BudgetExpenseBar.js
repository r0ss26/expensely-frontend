import React, { useEffect, useContext, useState } from 'react';
import AuthContext from '../../../context/auth/authContext';
import ProgressBar from './ProgressBar';
import '../chartStyle.css'

const BudgetExpenseBar = () => {

    const authContext = useContext(AuthContext);

    const { user, currentDay } = authContext


    const [allBudgets, setAllBudgets] = useState([])
    const [allExpenses, setAllExpenses] = useState([])
    const [allCategories, setAllCategories] = useState([])
    const [day, setDay] = useState(null)
    const [budgetAmount, setBudgetAmount] = useState(null)
    const [expenseAmount, setExpenseAmount] = useState(null)
    const [items, setItems] = useState([])
    const [spent, setSpent] = useState(null)
    const [left, setLeft] = useState(null)

    useEffect(() => {

        if (user) setAllBudgets(user.budgets)
        if (user) setAllExpenses(user.transactions.filter(item => item.transactionType === 'expense'))
        if (user) setAllCategories(user.categories)

        setDay(currentDay)
        // if (user) setAllCategories(user.categories)
        // const type = allTransactions.filter(item => item.transactionType === props.type)
        // setType(type)
    }, [user])

    useEffect(() => {
        // let allExpenses = []
        // let allCategories = []
        // let allBudgets = []
        // if (user) allExpenses = user.transactions.filter(item => item.transactionType === 'expense')
        // if (user) allCategories = user.categories
        // if (user) allBudgets = user.budgets

        console.log(allExpenses)
        console.log(allBudgets)
        let result = []

        allBudgets &&
            allBudgets.forEach(bud => {
                allExpenses.forEach(exp => {
                    if (exp.category === bud.category) {
                        allCategories.map(item => {
                            if (item._id === bud.category) {
                                result.push({
                                    'category': item.name,
                                    'categoryColor': item.color,
                                    'budgetAmount': bud.amount,
                                    'budgetName': bud.name,
                                    "expenseAmount": exp.amount || 0,
                                    "percentLeft": (((bud.amount - exp.amount) / bud.amount) * 100).toFixed(1),
                                    "percentSpent": (100 - ((bud.amount - exp.amount) / bud.amount) * 100).toFixed(1)
                                })
                            }
                        })
                    }
                })
            })

        // allBudgets.forEach(bud => {
        //     allCategories.map(item => {
        //         if (item._id === bud.category) {
        //             result.push({
        //                 'category': item.name,
        //                 'categoryColor': item.color,
        //                 'budgetAmount': bud.amount,
        //                 'budgetName': bud.name,
        //                 "percentLeft": 100
        //             })
        //         }
        //     })
        // })
        // return result
        setItems(result)
    }, [allCategories, allBudgets, allExpenses])

    console.log("result", items)

    return (
        <div class="Bar-wrapper">
            {items.map(item => (
                <ProgressBar items={item.percentLeft} />
            ))}
        </div>
    )
}

export default BudgetExpenseBar
