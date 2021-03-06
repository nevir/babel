"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["foo"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("foo"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.foo);
    global.actual = mod.exports;
  }
})(this, function (_foo) {
  var _foo2 = babelHelpers.interopRequireDefault(_foo);

  _foo.baz;
});