'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_1 = require('ionic-framework/ionic');
var clickerList_1 = require('./pages/clickerList/clickerList');
var page2_1 = require('./pages/page2/page2');
var MyApp = (function () {
    function MyApp(app, platform) {
        this.pages = [
            { title: 'Clickers', component: clickerList_1.ClickerList },
            { title: 'Goodbye Ionic', component: page2_1.Page2 },
        ];
        this.rootPage = clickerList_1.ClickerList;
        this.app = app;
        platform.ready().then(function () {
            // Do any necessary cordova or native calls here now that the platform is ready
        });
    }
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.app.getComponent('menu').close();
        // navigate to the new page if it is not the current page
        var nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
    };
    MyApp = __decorate([
        ionic_1.App({
            templateUrl: 'app/app.html'
        }), 
        __metadata('design:paramtypes', [ionic_1.IonicApp, ionic_1.Platform])
    ], MyApp);
    return MyApp;
})();
exports.MyApp = MyApp;
