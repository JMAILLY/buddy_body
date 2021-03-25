var express = require('express');
var router = express.Router();
var cors = require('cors');


/* GET users listing. */
router.get('/', cors(), function(req, res, next) {
  res.json([
    {id:1, username:'test1'},
    {id:2, username:'test2'},
  ]);
});

router.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

module.exports = router;
