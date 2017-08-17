var require = meteorInstall({"imports":{"api":{"index.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// imports/api/index.js                                              //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     //
///////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var Meteor = void 0;                                                 // 1
module.watch(require("meteor/meteor"), {                             // 1
  Meteor: function (v) {                                             // 1
    Meteor = v;                                                      // 1
  }                                                                  // 1
}, 0);                                                               // 1
module.watch(require("../imports/api/index"));                       // 1
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".jsx"
  ]
});
require("./server/main.js");
//# sourceMappingURL=app.js.map
