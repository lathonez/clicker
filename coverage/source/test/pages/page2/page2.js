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
var ionic_angular_1 = require('ionic-angular');
var Page2 = (function () {
    function Page2() {
        // no-op
    }
    Page2 = __decorate([
        ionic_angular_1.Page({
            template: "\n    <ion-navbar *navbar>\n      <button menuToggle>\n        <ion-icon name=\"menu\"></ion-icon>\n      </button>\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n\n    <ion-content padding class=\"message\">\n      <h2>Bye!</h2>\n    </ion-content>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], Page2);
    return Page2;
}());
exports.Page2 = Page2;
