/// <binding ProjectOpened='watch-sass, watch-react' />

var gulp = require("gulp"),
  requireDir = require('require-dir'),
  paths = require('./gulp/config.js');

requireDir('./gulp/tasks', { recurse: true });