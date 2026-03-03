require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
app.use(express.json());

//  API that allows users to add, update and delete expenses
const expenses = [
    {id: 1, date:'1/03/2026', category: 'Text Book', amounts: 3000},
    {id: 2, date: '1/03/2026', categry: 'Shoes', amounts: 1500}
];



app.listen(port, () => {console.log(`This app is listing to port ${port}`)});