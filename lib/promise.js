/*!
**  bauer-plugin-grunt -- Plugin for bauer to run grunt tasks..
**  Copyright (c) 2015 Yuri Neves Silveira <http://yneves.com>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Distributed on <http://github.com/yneves/node-bauer-plugin-grunt>
*/
// - -------------------------------------------------------------------- - //

"use strict";

// - -------------------------------------------------------------------- - //

module.exports = {
  
  grunt: {
    
    // .grunt() :Promise
    0: function() {
      return this.then(function(value) {
        return this.grunt(value);
      });
    },
    
    // .grunt(task String) :Promise
    s: function(task) {
      return this.grunt({ tasks: [task] });
    },
    
    // .grunt(tasks Array) :Promise
    a: function(tasks) {
      return this.grunt({ tasks: tasks });
    },
    
    // .grunt(options Object) :Promise
    o: function(options) {
      return this.then(function() {
        return this.requestWorker("grunt",options);
      });
    }
    
  }
      
};

// - -------------------------------------------------------------------- - //
