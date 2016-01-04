'use strict';
var Click = (function () {
    function Click() {
        this.time = new Date().getTime();
        this.location = 'TODO';
    }
    Click.prototype.setTime = function (time) {
        this.time = time;
    };
    Click.prototype.setLocation = function (location) {
        this.location = location;
    };
    return Click;
})();
exports.Click = Click;
