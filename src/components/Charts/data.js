import getRandomColor from './getRandomColor';

const fakeUser = {
    _id: '1',
    lastName: 'test',
    firstName: 'test_1',
    email: 'test_1@test.com',
    categories: [
        {
            name: "Eating Out",
            icon: "fas fa-utensils",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Apparel",
            icon: "fas fa-tshirt",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Entertainment",
            icon: "fas fa-tablet-alt",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Fuel",
            icon: "fas fa-gas-pump",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Gifts",
            icon: "fas fa-gift",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Holidays",
            icon: "fas fa-luggage-cart",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Grocery",
            icon: "fas fa-shopping-basket",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Transportation",
            icon: "fas fa-bus",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Sports",
            icon: "fas fa-running",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Books",
            icon: "fas fa-book-open",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Medical",
            icon: "fas fa-notes-medical",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Utilities",
            icon: "fas fa-bolt",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Movies",
            icon: 'fas fa-film',
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Work-related",
            icon: "fas fa-briefcase",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Pets",
            icon: "fas fa-paw",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Mobile",
            icon: "fas fa-mobile-alt",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "General expenses",
            icon: "fas fa-tags",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Salary",
            icon: "fas fa-money-bill-wave",
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



export default fakeUser