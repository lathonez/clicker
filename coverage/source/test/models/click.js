'use strict';
var Click = (function () {
    function Click(time, location) {
        this.time = time || new Date().getTime();
        this.location = location || 'TODO';
    }
    Click.prototype.getTime = function () {
        return this.time;
    };
    Click.prototype.getLocation = function () {
        return this.location;
    };
    return Click;
}());
exports.Click = Click;
