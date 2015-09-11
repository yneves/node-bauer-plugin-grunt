/*!
**  bauer-plugin-grunt -- Plugin for bauer to run grunt tasks..
**  Copyright (c) 2015 Yuri Neves Silveira <http://yneves.com>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Distributed on <http://github.com/yneves/node-bauer-plugin-grunt>
*/
// - -------------------------------------------------------------------- - //

"use strict";

module.exports = {
  
  name: "grunt",
  
  config: {
    workers: 1,
    slots: 1,
    delay: 0
  },
  
  worker: __dirname + "/worker.js",
  promise: __dirname + "/promise.js"
  
};

// - -------------------------------------------------------------------- - //
