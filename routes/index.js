var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'CD-RISC API Index Page',
    body: 'Welcome to the CD-RISC API. You need to make calls to this page using your key, following the ' +
    'call structure.'
  });
});

module.exports = router;
