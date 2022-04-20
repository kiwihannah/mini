"use strict";
exports.__esModule = true;
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        this.application = express();
    }
    return App;
}());
var app = new App().application;
app.listen(3000, function () {
    console.log('[ web & socket server ] listening on 3000');
});
