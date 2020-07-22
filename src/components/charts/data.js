import getRandomColor from './getRandomColor';

const user = {
    _id: '1',
    lastName: 'test',
    firstName: 'test_1',
    email: 'test_1@test.com',
    categories: [
        {
            id: '1',
            name: "Eating Out",
            icon: "fas fa-utensils",
            color: getRandomColor(),
            type: "expense"
        },
        {
            id: '2',
            name: "Apparel",
            icon: "fas fa-tshirt",
            color: getRandomColor(),
            type: "expense"
        },
        {
            id: '3',
            name: "Entertainment",
            icon: "fas fa-tablet-alt",
            color: getRandomColor(),
            type: "expense"
        },
        {
            id: '4',
            name: "Fuel",
            icon: "fas fa-gas-pump",
            color: getRandomColor(),
            type: "expense"
        },
        {
            id: '5',
            name: "Gifts",
            icon: "fas fa-gift",
            color: getRandomColor(),
            type: "expense"
        },
        {
            id: '6',
            name: "Holidays",
            icon: "fas fa-luggage-cart",
            color: getRandomColor(),
            type: "expense"
        },
        {
            id: '7',
            name: "Grocery",
            icon: "fas fa-shopping-basket",
            color: getRandomColor(),
            type: "expense"
        },
        {
            id: '8',
            name: "Transportation",
            icon: "fas fa-bus",
            color: getRandomColor(),
            type: "expense"
        },
        {
            id: '9',
            name: "Sports",
            icon: "fas fa-running",
            color: getRandomColor(),
            type: "expense"
        },
        {
            id: '10',
            name: "Books",
            icon: "fas fa-book-open",
            color: getRandomColor(),
            type: "expense"
        },
        {
            id: '11',
            name: "Medical",
            icon: "fas fa-notes-medical",
            color: getRandomColor(),
            type: "expense"
        },
        {
            id: '12',
            name: "Utilities",
            icon: "fas fa-bolt",
            color: getRandomColor(),
            type: "expense"
        },
        {
            id: '13',
            name: "general expenses",
            icon: "fas fa-tags",
            color: getRandomColor(),
            type: "expense"
        },
        {
            id: '14',
            name: "Salary",
            icon: "fas fa-dollar-sign",
            color: getRandomColor(),
            type: "income"
        },
    ],

    budgets: [
        {
            name: 'watching films at cinema',
            amount: 100,
            timePeriod: 'weekly',
            category: 'entertainment',
        },
        {
            name: 'lunch at work',
            amount: 100,
            timePeriod: 'weekly',
            category: 'eating out',
        },
    ],

    transactions: [
        {
            transactionType: 'expense',
            amount: 50,
            color: getRandomColor(),
            category: 'Eating Out',
            date: Date.now
        },
        {
            transactionType: 'expense',
            amount: 500,
            color: getRandomColor(),
            category: 'medical',
            date: Date.now
        },
        {
            transactionType: 'expense',
            amount: 20,
            color: getRandomColor(),
            category: 'Eating Out',
            date: Date.now
        },
        {
            transactionType: 'expense',
            amount: 20,
            color: getRandomColor(),
            category: 'Entertainment',
            date: Date.now
        },
        {
            transactionType: 'expense',
            amount: 20,
            color: getRandomColor(),
            category: 'Apparel',
            date: Date.now
        },
        {
            transactionType: 'expense',
            amount: 200,
            color: getRandomColor(),
            category: 'Entertainment',
            date: Date.now
        },
        {
            transactionType: 'income',
            amount: 2000,
            color: getRandomColor(),
            category: 'Salary',
            date: Date.now
        }
    ]
}



export default user