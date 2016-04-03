var express = require('express');
var router = express.Router();

var Photo = require('../models/Photo');

// router.get('/photos', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/photos', function(req, res, next) {
  //save the Photos
  Photo.create(req.body, function(err, savedPhoto) {
    if(err) return res.status(400).send(err);
    res.send(savedPhoto);
  })
});

module.exports = router;
