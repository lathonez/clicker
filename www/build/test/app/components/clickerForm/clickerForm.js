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
var angular2_1 = require('angular2/angular2');
var clickers_1 = require('../../services/clickers');
var ionic_1 = require('ionic-framework/ionic');
var ClickerForm = (function () {
    function ClickerForm(clickerService, fb) {
        this.clickerService = clickerService;
        this.clickerForm = fb.group({
            clicker: ['newClicker', angular2_1.Validators.required]
        });
    }
    ClickerForm.prototype.newClicker = function (name) {
        if (!name) {
            // TODO - validate
            return false;
        }
        this.clickerService.newClicker(name);
        // TODO - clear text on input field
    };
    ClickerForm = __decorate([
        angular2_1.Component({
            selector: 'clicker-form'
        }),
        angular2_1.View({
            templateUrl: 'app/components/clickerForm/clickerForm.html',
            directives: [ionic_1.Button, ionic_1.Icon, ionic_1.TextInputElement, ionic_1.TextInput],
        }), 
        __metadata('design:paramtypes', [clickers_1.Clickers, angular2_1.FormBuilder])
    ], ClickerForm);
    return ClickerForm;
})();
exports.ClickerForm = ClickerForm;
