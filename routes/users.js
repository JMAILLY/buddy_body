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

  db.query(sqlSelect,[email, password], (err, result) => {
    if (err){
      console.log(err);
    }else{
      if (result.length > 0){
        res.send(result);
      }else{
        res.send({message: "Wrong combination !"});
      }
    }
  });
});

/* Post Register */
router.post('/register', cors(), (req, res, next) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  const sqlSelect = "SELECT * FROM users WHERE email = ?";
  const sqlRegister = "INSERT INTO users (firstname, lastname,email, password) VALUES (?,?,?,?)";

  /* Email test */
  db.query(sqlSelect,[email], (err, result) => {
    if (err){
      console.log(err);
    }else{
      if (result.length > 0){
        /* If Email in use */
        res.send({message: "Email already in use !"});
      }else{
        /* Register */
        db.query(sqlRegister,[firstname, lastname, email, password], (err, result) => {
          if (err){
            console.log(err);
          }else{
            res.send(result);
          }
        });
      }
    }
  });


});

module.exports = router;
