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
var core_1 = require('angular2/core');
var ionic_angular_1 = require('ionic-angular');
var clickers_1 = require('../../services/clickers');
var ClickerButton = (function () {
    function ClickerButton(clickerService) {
        this.clickerService = clickerService;
    }
    ClickerButton = __decorate([
        core_1.Component({
            selector: 'clicker-button',
            inputs: ['clicker: clicker'],
        }),
        core_1.View({
            template: "\n    <button block outline (click)=\"clickerService.doClick(clicker.id)\">{{clicker.name}} ({{clicker.getCount()}})</button>\n  ",
            directives: [ionic_angular_1.Button],
        }), 
        __metadata('design:paramtypes', [clickers_1.Clickers])
    ], ClickerButton);
    return ClickerButton;
}());
exports.ClickerButton = ClickerButton;
