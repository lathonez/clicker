"use strict";
// Stub out the @App decorator provided by Ionic
// This allows us to test app.ts (thus providing a full coverage report as app.ts must include everything)
// which otherwise blows up in the browser on "ion-app selector cannot be found"
//
// https://www.sitepen.com/blog/2015/10/20/typescript-decorators/
//
function App(target) {
    var newConstructor = function () {
        // no-op
    };
    return newConstructor;
}
exports.App = App;
