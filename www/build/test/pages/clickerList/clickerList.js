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
var clickers_1 = require('../../services/clickers');
var clickerButton_1 = require('../../components/clickerButton/clickerButton');
var clickerForm_1 = require('../../components/clickerForm/clickerForm');
var ClickerList = (function () {
    function ClickerList(nav, clickerService) {
        this.nav = nav;
        this.clickerService = clickerService;
        this.title = 'Clickers';
    }
    ClickerList = __decorate([
        ionic_angular_1.Page({
            template: "\n    <ion-navbar *navbar>\n      <button menuToggle>\n        <ion-icon name=\"menu\"></ion-icon>\n      </button>\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n\n    <ion-content padding>\n      <clicker-form></clicker-form>\n      <ion-row *ngFor=\"#clicker of clickerService.getClickers()\" class=\"clickerList\">\n        <ion-col width-80><clicker-button [clicker]=\"clicker\"></clicker-button></ion-col>\n        <ion-col>\n          <button block danger outline (click)=\"clickerService.removeClicker(clicker.id)\"><ion-icon name=\"trash\"></ion-icon></button>\n        </ion-col>\n      </ion-row>\n    </ion-content>\n  ",
            providers: [clickers_1.Clickers],
            directives: [clickerButton_1.ClickerButton, clickerForm_1.ClickerForm],
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, clickers_1.Clickers])
    ], ClickerList);
    return ClickerList;
}());
exports.ClickerList = ClickerList;
