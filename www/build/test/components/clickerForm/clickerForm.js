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
var common_1 = require('angular2/common');
var core_1 = require('angular2/core');
var ionic_angular_1 = require('ionic-angular');
var clickers_1 = require('../../services/clickers');
var utils_1 = require('../../services/utils');
var ClickerForm = (function () {
    function ClickerForm(clickerService, fb) {
        this.clickerService = clickerService;
        this.form = fb.group({
            clickerNameInput: ['', common_1.Validators.required],
        });
        this.clickerNameInput = this.form.controls['clickerNameInput'];
    }
    ClickerForm.prototype.newClicker = function (formValue) {
        // need to mark the clickerName control as touched so validation
        // will apply after the user has tried to add a clicker
        this.clickerNameInput.markAsTouched();
        if (!this.clickerNameInput.valid) {
            return false;
        }
        this.clickerService.newClicker(formValue['clickerNameInput']);
        // reset the value of the contorl and all validation / state
        this.clickerNameInput = utils_1.Utils.resetControl(this.clickerNameInput);
        return true;
    };
    ClickerForm = __decorate([
        core_1.Component({
            selector: 'clicker-form',
        }),
        core_1.View({
            template: "\n    <form [ngFormModel]=\"form\" (submit)=\"newClicker(form.value)\">\n      <ion-row>\n        <ion-col width-80>\n          <ion-item>\n            <ion-input block [ngFormControl]=\"clickerNameInput\" type=\"text\" placeholder=\"New Clicker\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <button type=\"submit\" block secondary outline>[ + ]</button>\n        </ion-col>\n      </ion-row>\n    </form>\n  ",
            directives: [ionic_angular_1.Button, ionic_angular_1.Icon, ionic_angular_1.Item, ionic_angular_1.Label, ionic_angular_1.TextInput],
        }), 
        __metadata('design:paramtypes', [clickers_1.Clickers, common_1.FormBuilder])
    ], ClickerForm);
    return ClickerForm;
}());
exports.ClickerForm = ClickerForm;
