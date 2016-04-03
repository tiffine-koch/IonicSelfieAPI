'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Photo;

var photoSchema = mongoose.Schema({
  image: String,
  title: String,
  description: String,
  location: {
    x: Number,
    y: Number
  },
  time: {type: Date, default: Date.now}
});

Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
