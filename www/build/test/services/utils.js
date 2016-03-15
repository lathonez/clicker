'use strict';
var Utils = (function () {
    function Utils() {
    }
    Utils.promiseCatchHandler = function (err) {
        console.error('ERROR - An error has occurred inside a promise!');
        // throw the error out to the console - http://stackoverflow.com/a/30741722
        setTimeout(function () { throw err; });
    };
    // bit of a hack here to reset the validation / state on the control as well as the value
    // expecting a Control.reset() method to do this but there doesn't seem to be one
    // http://stackoverflow.com/questions/33084280/how-to-reset-control-value
    Utils.resetControl = function (control) {
        control['updateValue']('');
        control['_touched'] = false;
        control['_untouched'] = true;
        control['_pristine'] = true;
        control['_dirty'] = false;
        // control.setErrors(null);
        return control;
    };
    return Utils;
}());
exports.Utils = Utils;
