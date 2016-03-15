'use strict';
var TestUtils = (function () {
    function TestUtils() {
    }
    // http://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript
    TestUtils.eventFire = function (el, etype) {
        if (el.fireEvent) {
            el.fireEvent('on' + etype);
        }
        else {
            var evObj = document.createEvent('Events');
            evObj.initEvent(etype, true, false);
            el.dispatchEvent(evObj);
        }
    };
    return TestUtils;
}());
exports.TestUtils = TestUtils;
