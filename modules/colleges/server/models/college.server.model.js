'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * College Schema
 */
var CollegeSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill College name',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  degree:{
    type:[String]
  }
});

mongoose.model('College', CollegeSchema);
