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
  
  var gruntPath = path.resolve(config.gruntDir, "node_modules/grunt");
  var gruntFile = path.resolve(config.gruntDir,"Gruntfile.js");
  var grunt = require(gruntPath);
  var cli = require(path.resolve(gruntPath,"lib/grunt/cli.js"));
  
  worker.on("request",function(request,response) {
    
    var error;
    var output;
    
    var options = factory.merge(request.options,{
      gruntfile: gruntFile
    });
    
    cli.tasks = request.tasks;
    cli(options,function() {
      if (error) {
        response.sendError(error);
      } else {
        response.sendOk({
          output: output
        });
      }
    });
  });
  
  worker.sendReady();
  
};

// - -------------------------------------------------------------------- - //
