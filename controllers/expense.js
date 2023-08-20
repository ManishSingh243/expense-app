const db = require('../util/database')

exports.getAllExpenses = (req, res)=>{
    db.query('SELECT id, amount, description, tag from expenses', (err, result)=>{
        if(err) throw err;
        res.render('index', {expenses: result})
    })
}

exports.postExpense = (req, res)=>{
    const {amount, description, tag} = req.body;
    const sql = 'INSERT INTO expenses (amount, description, tag) VALUES (?, ?, ?)';
    const values = [amount, description, tag];

    db.query(sql, values, (err)=>{
        if(err){
            throw err;
        }
        console.log("user data inserted");
        res.redirect('/');
    })
}

exports.deleteExpense = (req, res)=>{
    const userId = req.body.userId;
    console.log(userId);
    db.query('DELETE FROM expenses WHERE id = ?', [userId], (err, result)=>{
        if(err) throw err;
        res.redirect('/')
    })
}