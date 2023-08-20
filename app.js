const express = require('express');
const app = express();
const db = require('./util/database')

const expenseRoutes = require('./routes/expense')

app.use(express.urlencoded({extended: true}));

const mysql = require('mysql2');

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Connected to Database");
})

app.set('view engine', 'ejs'); // Use 'pug' if you're using Pug

app.use(expenseRoutes)

app.listen(3000, ()=>{
    console.log("Server is running on port number 3000");
})