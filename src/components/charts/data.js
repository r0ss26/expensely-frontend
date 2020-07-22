import getRandomColor from './getRandomColor';

const user = {
    _id: '1',
    lastName: 'test',
    firstName: 'test_1',
    email: 'test_1@test.com',
    categories: [
        {
            name: "Eating Out",
            icon: "restaurant_menu",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Apparel",
            icon: "style",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Entertainment",
            icon: "library_music",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Fuel",
            icon: "local_gas_station",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Gifts",
            icon: "card_giftcard",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Holidays",
            icon: "flight_takeoff",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Grocery",
            icon: "add_shopping_cart",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Transportation",
            icon: "subway",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Sports",
            icon: "directions_bike",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Books",
            icon: "local_library",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Medical",
            icon: "local_pharmacy",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Utilities",
            icon: "flash_on",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Movies",
            icon: "local_movies",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Work-related",
            icon: "work",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Pets",
            icon: "pets",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Mobile",
            icon: "phone_iphone",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "general expenses",
            icon: "loyalty",
            color: getRandomColor(),
            type: "expense"
        },
        {
            name: "Salary",
            icon: "monetization_on",
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