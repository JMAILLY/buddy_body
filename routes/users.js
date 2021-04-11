const express = require('express');
const router = express.Router();
const cors = require('cors');
const mysql = require('mysql');

// db init
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'buddy_body',
    port: '3306',
})


/* Post Login */
router.post('/login', cors(), (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const sqlSelect = "SELECT * FROM users WHERE email = ? AND password = ?";

    db.query(sqlSelect, [email, password], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({message: "Wrong combination !"});
            }
        }
    });
});

/* Post Register */
router.post('/register', cors(), (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const sqlRegister = "INSERT INTO users (email, password) VALUES (?,?)";

    /* Register */
    db.query(sqlRegister, [email, password], (errRegister, resultRegister) => {
        if (errRegister) {
            console.log(errRegister);
        } else {
            res.send({type: 'succes', message: "Succes ! You will be redirected in 3 seconds to the login page !"});
        }
    });
});

/* isEmailInUse */
router.post('/isEmailInUse', cors() , (req, res, next) => {
    const email = req.body.email;
    const sqlSelect = "SELECT * FROM users WHERE email = ?";
    /* Email test */
    db.query(sqlSelect, [email], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.length > 0) {
                /* If Email in use */
                res.send({type: 'mailError', message: "Email already in use !"});
            }else{
                res.send({type: 'mailOk', message: "Email is valid !"});
            }
        }
    });
});

module.exports = router;
