const express = require('express');
const router = express.Router();

const expenseController = require('../controllers/expense')

router.get('/', expenseController.getAllExpenses)

router.post('/', expenseController.postExpense)

router.post('/delete', expenseController.deleteExpense)

module.exports = router