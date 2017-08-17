var require = meteorInstall({"imports":{"ui":{"components":{"Dashboard.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// imports/ui/components/Dashboard.jsx                                                              //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                             //
                                                                                                    //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                    //
                                                                                                    //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");       //
                                                                                                    //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);              //
                                                                                                    //
var _inherits2 = require("babel-runtime/helpers/inherits");                                         //
                                                                                                    //
var _inherits3 = _interopRequireDefault(_inherits2);                                                //
                                                                                                    //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }   //
                                                                                                    //
module.export({                                                                                     // 1
  "default": function () {                                                                          // 1
    return Dashboard;                                                                               // 1
  }                                                                                                 // 1
});                                                                                                 // 1
var React = void 0;                                                                                 // 1
module.watch(require("react"), {                                                                    // 1
  "default": function (v) {                                                                         // 1
    React = v;                                                                                      // 1
  }                                                                                                 // 1
}, 0);                                                                                              // 1
                                                                                                    //
var Dashboard = function (_React$Component) {                                                       //
  (0, _inherits3.default)(Dashboard, _React$Component);                                             //
                                                                                                    //
  function Dashboard() {                                                                            //
    (0, _classCallCheck3.default)(this, Dashboard);                                                 //
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }                                                                                                 //
                                                                                                    //
  Dashboard.prototype.render = function () {                                                        //
    function render() {                                                                             //
      return React.createElement(                                                                   // 5
        "h1",                                                                                       // 6
        null,                                                                                       // 6
        "This is ",                                                                                 // 6
        this.props.title                                                                            // 6
      );                                                                                            // 6
    }                                                                                               // 8
                                                                                                    //
    return render;                                                                                  //
  }();                                                                                              //
                                                                                                    //
  return Dashboard;                                                                                 //
}(React.Component);                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////

}},"layouts":{"MainLayout.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// imports/ui/layouts/MainLayout.jsx                                                                //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                             //
                                                                                                    //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                    //
                                                                                                    //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");       //
                                                                                                    //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);              //
                                                                                                    //
var _inherits2 = require("babel-runtime/helpers/inherits");                                         //
                                                                                                    //
var _inherits3 = _interopRequireDefault(_inherits2);                                                //
                                                                                                    //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }   //
                                                                                                    //
module.export({                                                                                     // 1
  "default": function () {                                                                          // 1
    return MainLayout;                                                                              // 1
  }                                                                                                 // 1
});                                                                                                 // 1
var React = void 0;                                                                                 // 1
module.watch(require("react"), {                                                                    // 1
  "default": function (v) {                                                                         // 1
    React = v;                                                                                      // 1
  }                                                                                                 // 1
}, 0);                                                                                              // 1
var Dashboard = void 0;                                                                             // 1
module.watch(require("../components/Dashboard"), {                                                  // 1
  "default": function (v) {                                                                         // 1
    Dashboard = v;                                                                                  // 1
  }                                                                                                 // 1
}, 1);                                                                                              // 1
                                                                                                    //
var MainLayout = function (_React$Component) {                                                      //
  (0, _inherits3.default)(MainLayout, _React$Component);                                            //
                                                                                                    //
  function MainLayout() {                                                                           //
    (0, _classCallCheck3.default)(this, MainLayout);                                                //
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }                                                                                                 //
                                                                                                    //
  MainLayout.prototype.render = function () {                                                       //
    function render() {                                                                             //
      return React.createElement(Dashboard, {                                                       // 6
        title: this.props.title                                                                     // 7
      });                                                                                           // 7
    }                                                                                               // 9
                                                                                                    //
    return render;                                                                                  //
  }();                                                                                              //
                                                                                                    //
  return MainLayout;                                                                                //
}(React.Component);                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"startup":{"index.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// imports/startup/index.js                                                                         //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
module.watch(require("./routes"));                                                                  // 1
module.watch(require("./client"));                                                                  // 1
module.watch(require("./server"));                                                                  // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////

},"routes.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// imports/startup/routes.js                                                                        //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
var FlowRouter = void 0;                                                                            // 1
module.watch(require("meteor/kadira:flow-router"), {                                                // 1
  FlowRouter: function (v) {                                                                        // 1
    FlowRouter = v;                                                                                 // 1
  }                                                                                                 // 1
}, 0);                                                                                              // 1
var mount = void 0;                                                                                 // 1
module.watch(require("react-mounter"), {                                                            // 1
  mount: function (v) {                                                                             // 1
    mount = v;                                                                                      // 1
  }                                                                                                 // 1
}, 1);                                                                                              // 1
var MainLayout = void 0;                                                                            // 1
module.watch(require("../ui/layouts/MainLayout"), {                                                 // 1
  "default": function (v) {                                                                         // 1
    MainLayout = v;                                                                                 // 1
  }                                                                                                 // 1
}, 2);                                                                                              // 1
FlowRouter.route('/', {                                                                             // 6
  name: 'App_home',                                                                                 // 7
  action: function () {                                                                             // 8
    mount(MainLayout, {                                                                             // 9
      title: 'Dashboard'                                                                            // 9
    });                                                                                             // 9
  }                                                                                                 // 10
});                                                                                                 // 6
//////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"main.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// client/main.js                                                                                   //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
module.watch(require("../imports/startup/index"));                                                  // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".jsx",
    ".css"
  ]
});
require("./client/main.js");