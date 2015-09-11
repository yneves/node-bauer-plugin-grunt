// - -------------------------------------------------------------------- - //

"use strict";

var fs = require("fs");
var assert = require("assert");
var Crawler = require("bauer-crawler");

var crawler = new Crawler({
  config: {
    
  }
});

crawler.loadPlugin(__dirname + "/../../");

crawler.start(function(Promise) {
  
  return Promise.grunt({
    tasks: ["dev"],
    end: "dev",
    color: true
  });
});

// - -------------------------------------------------------------------- - //
