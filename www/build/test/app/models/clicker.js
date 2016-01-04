'use strict';
var click_1 = require('./click');
// Represents a single Clicker
var Clicker = (function () {
    function Clicker(id, name) {
        this.id = id;
        this.name = name;
        this.clicks = [];
    }
    Clicker.prototype.doClick = function () {
        this.clicks.push(new click_1.Click());
    };
    Clicker.prototype.addClick = function (click) {
        this.clicks.push(click);
    };
    Clicker.prototype.getCount = function () {
        return this.clicks.length;
    };
    Clicker.prototype.getId = function () {
        return this.id;
    };
    Clicker.prototype.getName = function () {
        return this.name;
    };
    return Clicker;
})();
exports.Clicker = Clicker;
