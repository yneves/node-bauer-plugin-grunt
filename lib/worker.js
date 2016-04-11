/*!
**  bauer-plugin-grunt -- Plugin for bauer to run grunt tasks..
**  Copyright (c) 2015 Yuri Neves Silveira <http://yneves.com>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Distributed on <http://github.com/yneves/node-bauer-plugin-grunt>
*/
// - -------------------------------------------------------------------- - //

"use strict";

var path = require("path");
var factory = require("bauer-factory");

// - -------------------------------------------------------------------- - //

module.exports = function(worker,config) {
  
  var gruntFile = path.resolve(config.gruntFile);
  var gruntPath = config.gruntPath || path.resolve(path.dirname(config.gruntFile), "node_modules/grunt");
  var grunt;
  var initError;
  
  (function () {
    try {
      grunt = require(gruntPath);
    } catch(e) {
      initError = e;
    }
  })();
  
  function runTasks(tasks, options, callback) {
    tasks = factory.isArray(tasks) ? tasks : [];
    options = factory.merge(options, config.options, { gruntfile: gruntFile });
    var errored = false;
    grunt.util.exit = function(reason) {
      callback(new Error(reason));
      errored = true;
    };
    grunt.tasks(tasks, options, function() {
      if (!errored) {
        callback(null);
      }
    });
  }
    
  // TODO: better errors
  worker.on("request",function(request,response) {
    if (initError) {
      response.sendError(initError);
    } else {
      runTasks(request.tasks, request.options, function(error) {
        if (error) {
          response.sendError(error);
        } else {
          response.sendOk();
        }
      });
    }
  });
    
  if (initError) {
    worker.sendReady();
  } else {
    runTasks([], {}, function(error) {
      if (error) {
        initError = error;
      }
      worker.sendReady();
    });
  }
};

// - -------------------------------------------------------------------- - //
