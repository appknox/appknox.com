/*
 * index.js
 * Copyright (C) 2015 dhilipsiva <dhilipsiva@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

var metalsmith = require('metalsmith')
  , watch = require('metalsmith-watch')
  , jade = require('metalsmith-jade')
  , permalinks = require('metalsmith-permalinks')
  , uglify = require('metalsmith-uglify')
  , coffee = require('metalsmith-coffee')
  , htmlMinifier = require("metalsmith-html-minifier")
  , serve = require('metalsmith-serve')
  , concat = require('metalsmith-concat')
;

metalsmith(__dirname)
.use(
  watch({
    paths: {
      "${source}/**/*": "**/*",
    },
    livereload: true,
  })
)
.use(
  jade({
    true: false,
  })
)
.use(
  permalinks({
    pattern: ':title'
  })
)
.use(
  coffee()
)
.use(
  htmlMinifier()
)
.use(
  serve({
    port: 8081,
    verbose: true
  })
)
.build(
  function(err) {
    if (err) throw err;
  }
);
