require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

// API that allows users to add, update and delete expenses
const expenses = [
    { id: 1, date: '1/03/2026', category: 'Text Book', amounts: 3000 },
    { id: 2, date: '1/03/2026', category: 'Shoes', amounts: 1500 }
];

// GET ALL - Read Expenses
app.get('/expenses', (req, res) => {
    res.json(expenses);
});

// Start Server (MUST BE LAST)
app.listen(port, () => {console.log(`Server is listening on port ${port}`);
});


