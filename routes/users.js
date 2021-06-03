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
router.post('/login', cors(),
    (req, res, next) => {
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
router.post('/register', cors(),
    (req, res, next) => {
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
router.post('/isEmailInUse', cors(),
    (req, res, next) => {
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

/* completeProfile */
router.post('/completeProfile', cors(),
    (req, res, next) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const activity = req.body.activity;
    const country = req.body.country;
    const gender = req.body.gender;
    const goal = req.body.goal;
    const goalTime = req.body.goalTime;
    const goalWeight = req.body.goalWeight;
    const height = req.body.height;
    const picture = req.body.picture;
    const weight = req.body.weight;
    const interests = req.body.interests;
    const email = req.body.email;
    const sqlSelect = "UPDATE users SET firstname = ?, lastname = ?, activity = ?, country = ?, gender = ?, goal = ?, goalTime = ?, goalWeight = ?, height = ?, picture = ?, weight = ?, interests = ? WHERE email = ?";
    /* Email test */
    db.query(sqlSelect, [firstname,lastname,activity,country,gender,goal,goalTime,goalWeight,height,picture,weight,interests,email], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.length > 0) {
                /* If Email in use */
                res.send({type: 'error', message: "Email already in use !"});
            }else{
                res.send({type: 'ok', message: "Email is valid !"});
            }
        }
    });
});

module.exports = router;
