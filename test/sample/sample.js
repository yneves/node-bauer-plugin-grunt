// - -------------------------------------------------------------------- - //

"use strict";

var fs = require("fs");
var assert = require("assert");
var Crawler = require("bauer-crawler");

var crawler = new Crawler({
  config: {
    grunt: {
      gruntFile: "./Gruntfile.js"
    }
  }
});

crawler.loadPlugin(__dirname + "/../../");

crawler.start(function(Promise) {
  
  return Promise.grunt({
      tasks: ["less"],
      options: {}
    }).catch(function(error) {
      assert.ok(error instanceof Error);
    });
});

// - -------------------------------------------------------------------- - //
