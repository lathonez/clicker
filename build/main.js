webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__click__ = __webpack_require__(302);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__click__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clicker__ = __webpack_require__(303);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__clicker__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clickerList_clickerList__ = __webpack_require__(206);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__clickerList_clickerList__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page2_page2__ = __webpack_require__(208);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__page2_page2__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_module__ = __webpack_require__(305);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__pages_module__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickerList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__package_json__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__package_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClickerList = (function () {
    function ClickerList(nav, clickerService) {
        this.title = 'TITLE.CLICKER_LIST';
        this.nav = nav;
        this.clickerService = clickerService;
        this.version = __WEBPACK_IMPORTED_MODULE_3__package_json__["version"];
    }
    ClickerList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/root/clicker/src/pages/clickerList/clickerList.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col><button ion-button menuToggle><ion-icon name="menu"></ion-icon></button></ion-col>\n      <ion-col><ion-title>{{title | translate}}</ion-title></ion-col>\n      <ion-col><language-picker></language-picker></ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <clicker-form></clicker-form>\n  <ion-row *ngFor="let clicker of clickerService.getClickers()" class="clickerList">\n    <ion-col width-80><clicker-button [clicker]="clicker"></clicker-button></ion-col>\n    <ion-col>\n      <button ion-button block color="danger" outline (click)="clickerService.removeClicker(clicker.id)"><ion-icon name="trash"></ion-icon></button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>v.{{version}}</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/root/clicker/src/pages/clickerList/clickerList.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services__["a" /* ClickersService */]])
    ], ClickerList);
    return ClickerList;
}());

//# sourceMappingURL=clickerList.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(298);

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = (function () {
    function StorageService() {
        this.storage = StorageService_1.initStorage();
    }
    StorageService_1 = StorageService;
    StorageService.initStorage = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["a" /* Storage */]({});
    };
    StorageService.prototype.get = function (key) {
        return this.storage.get(key);
    };
    StorageService.prototype.set = function (key, value) {
        return this.storage.set(key, value);
    };
    StorageService.prototype.remove = function (key) {
        return this.storage.remove(key);
    };
    StorageService = StorageService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
    var StorageService_1;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(30);

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Page2 = (function () {
    function Page2(alertController, translateService) {
        var _this = this;
        this.title = 'TITLE.PAGE2';
        this.OK = function () {
            _this.okEd = true;
        };
        this.alertController = alertController;
        this.translateService = translateService;
        this.translateService.onLangChange.subscribe(function () { return _this.setAlertLang(); });
        this.setAlertLang();
    }
    Page2.prototype.onGainChange = function () {
        return;
    };
    Page2.prototype.setAlertLang = function () {
        var _this = this;
        return this.translateService.get(['BUTTON.OK',
            'BUTTON.OK_ADVANCED',
            'BUTTON.DISMISS',
            'TITLE.ALERT_SIMPLE',
            'TITLE.ALERT_ADVANCED',
        ]).subscribe(function (i18ns) { return _this.i18ns = i18ns; });
    };
    Page2.prototype.showSimpleAlert = function () {
        this.alert1 = this.alertController.create({
            title: this.i18ns['TITLE.ALERT_SIMPLE'],
            buttons: [this.i18ns['BUTTON.OK'], this.i18ns['BUTTON.DISMISS']],
        });
        this.alert1.present();
    };
    Page2.prototype.showMoreAdvancedAlert = function () {
        this.alert1 = this.alertController.create({
            title: this.i18ns['TITLE.ALERT_ADVANCED'],
            buttons: [{
                    text: this.i18ns['BUTTON.OK_ADVANCED'],
                    handler: this.OK,
                },
                this.i18ns['BUTTON.DISMISS']],
        });
        this.alert1.present();
    };
    Page2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/root/clicker/src/pages/page2/page2.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col><button ion-button menuToggle><ion-icon name="menu"></ion-icon></button></ion-col>\n      <ion-col><ion-title>{{title | translate}}</ion-title></ion-col>\n      <ion-col><language-picker></language-picker></ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="message bye-ionic">\n  <button ion-button (click)="showSimpleAlert()">{{\'BUTTON.SHOW_SIMPLE\' | translate}}</button>\n  <button ion-button (click)="showMoreAdvancedAlert()"> {{\'BUTTON.SHOW_ADVANCED\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"/root/clicker/src/pages/page2/page2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], Page2);
    return Page2;
}());

//# sourceMappingURL=page2.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickerButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(105);

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClickerButton = (function () {
    function ClickerButton(clickerService) {
        this.clickerService = clickerService;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models__["b" /* Clicker */])
    ], ClickerButton.prototype, "clicker", void 0);
    ClickerButton = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'clicker-button',template:/*ion-inline-start:"/root/clicker/src/components/clickerButton/clickerButton.html"*/'<button ion-button block outline (click)="clickerService.doClick(clicker.getId())">{{clicker.getName()}} ({{clicker.getCount()}})</button>\n'/*ion-inline-end:"/root/clicker/src/components/clickerButton/clickerButton.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["a" /* ClickersService */]])
    ], ClickerButton);
    return ClickerButton;
}());

//# sourceMappingURL=clickerButton.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickerForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(55);

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClickerForm = (function () {
    function ClickerForm(clickerService, fb) {
        this.clickerService = clickerService;
        this.form = fb.group({
            clickerNameInput: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required],
        });
        // https://github.com/ionic-team/ionic-app-scripts/issues/1074
        console.log(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */]);
        console.log(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormGroup */]);
    }
    ClickerForm.prototype.newClicker = function (formValue) {
        // need to mark the clickerName control as touched so validation
        // will apply after the user has tried to add a clicker
        this.form.controls['clickerNameInput'].markAsTouched();
        if (!this.form.controls['clickerNameInput'].valid) {
            return false;
        }
        this.clickerService.newClicker(formValue['clickerNameInput']);
        this.form.reset();
        return true;
    };
    ClickerForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'clicker-form',template:/*ion-inline-start:"/root/clicker/src/components/clickerForm/clickerForm.html"*/'<form [formGroup]="form" (submit)="newClicker(form.value)">\n  <ion-row>\n    <ion-col width-80>\n      <ion-item >\n        <ion-input block formControlName="clickerNameInput" type="text" placeholder="{{ \'PLACEHOLDER.CLICKER_NAME\' | translate}}"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <button ion-button type="submit" block secondary outline>\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</form>\n'/*ion-inline-end:"/root/clicker/src/components/clickerForm/clickerForm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["a" /* ClickersService */], __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */]])
    ], ClickerForm);
    return ClickerForm;
}());

//# sourceMappingURL=clickerForm.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagePicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(30);

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguagePicker = (function () {
    function LanguagePicker(translate) {
        var _this = this;
        this.translate = translate;
        // when this class is created, the langauge service will not have been initailised
        this.translate.onDefaultLangChange.subscribe(function (lang) { return _this.setDefaultLang(lang.lang); });
        this.language = this.translate.currentLang; // may not be set ^
    }
    LanguagePicker.prototype.setDefaultLang = function (lang) {
        return this.language = lang;
    };
    LanguagePicker.prototype.setLanguage = function (lang) {
        return this.translate.use(lang);
    };
    LanguagePicker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'language-picker',template:/*ion-inline-start:"/root/clicker/src/components/languagePicker/languagePicker.html"*/'<ion-select [(ngModel)]="language" (ngModelChange)="setLanguage($event)">\n  <ion-option value="en">English</ion-option>\n  <ion-option value="zh-hans">Chinese</ion-option>\n</ion-select>\n'/*ion-inline-end:"/root/clicker/src/components/languagePicker/languagePicker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], LanguagePicker);
    return LanguagePicker;
}());

//# sourceMappingURL=languagePicker.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ClickerApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages__["c" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ClickerApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]],
                    },
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ClickerApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages__["a" /* ClickerList */],
                __WEBPACK_IMPORTED_MODULE_9__pages__["b" /* Page2 */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__services__["a" /* ClickersService */],
                __WEBPACK_IMPORTED_MODULE_10__services__["b" /* StorageService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicErrorHandler */] },
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickerApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClickerApp = (function () {
    function ClickerApp(platform, menu, splash, status, translateService) {
        // make ClcikerList the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages__["a" /* ClickerList */];
        this.menu = menu;
        this.platform = platform;
        this.splash = splash;
        this.status = status;
        this.translateService = translateService;
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'MENU.CLICKERS', component: __WEBPACK_IMPORTED_MODULE_5__pages__["a" /* ClickerList */] },
            { title: 'MENU.PAGE2', component: __WEBPACK_IMPORTED_MODULE_5__pages__["b" /* Page2 */] },
        ];
    }
    ClickerApp.prototype.initializeApp = function () {
        var _this = this;
        return this.platform.ready().then(function () {
            _this.translateService.setDefaultLang('en');
            _this.translateService.use('en');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.status.styleDefault();
            _this.splash.hide();
        });
    };
    ClickerApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* Nav */])
    ], ClickerApp.prototype, "nav", void 0);
    ClickerApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/root/clicker/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>{{\'MENU.TITLE\' | translate}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title | translate}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/root/clicker/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], ClickerApp);
    return ClickerApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(105);

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClickersService = (function () {
    // don't know why Injection isn't working without @Inject:
    // http://stackoverflow.com/questions/34449486/angular-2-0-injected-http-service-is-undefined
    function ClickersService(storage) {
        this.storage = storage;
        this.ids = [];
        this.clickers = [];
        this.init();
    }
    // as init is async separate logic here so it's testable
    ClickersService.prototype.init = function () {
        var _this = this;
        return this.initIds()
            .then(function (ids) { _this.ids = ids; })
            .then(function () { return _this.initClickers(_this.ids); })
            .then(function (clickers) { return _this.clickers = clickers; });
    };
    // initialise Ids from SQL storage
    ClickersService.prototype.initIds = function (load) {
        if (load === void 0) { load = true; }
        return this.storage.get('ids') // return the promise so we can chain initClickers
            .then(function (rawIds) {
            if (!rawIds || !load)
                return [];
            // ids are stored as stringified JSON array
            return JSON.parse(rawIds);
        });
    };
    // initialise Clickers from SQL storage given an array of ids
    ClickersService.prototype.initClickers = function (ids) {
        var _this = this;
        // get all existing ids
        var proms;
        proms = ids.map(function (id) { return _this.storage.get(id); });
        return Promise.all(proms)
            .then(function (clickers) { return clickers.map(function (clicker) { return _this.initClicker(clicker); }); });
    };
    // initialise a clicker from a raw JSON string out of the DB
    ClickersService.prototype.initClicker = function (clicker) {
        var parsedClicker = JSON.parse(clicker);
        var newClicker = new __WEBPACK_IMPORTED_MODULE_2__models__["b" /* Clicker */](parsedClicker['id'], parsedClicker['name']);
        // add the clicks - need to re-instantiate object
        for (var _i = 0, _a = parsedClicker['clicks']; _i < _a.length; _i++) {
            var click = _a[_i];
            newClicker.addClick(new __WEBPACK_IMPORTED_MODULE_2__models__["a" /* Click */](click.time, click.location));
        }
        return newClicker;
    };
    ClickersService.prototype.getClicker = function (id) {
        return this.clickers['find'](function (clicker) { return clicker.getId() === id; });
    };
    ClickersService.prototype.getClickers = function () {
        return this.clickers;
    };
    ClickersService.prototype.newClicker = function (name) {
        var id = this.uid();
        var clicker = new __WEBPACK_IMPORTED_MODULE_2__models__["b" /* Clicker */](id, name);
        // add the clicker to the service
        this.clickers.push(clicker);
        // add the id to the service (need to keep a separate reference of IDs so we can cold load clickers)
        this.ids.push(id);
        // save the clicker by id
        this.storage.set(id, JSON.stringify(clicker));
        // save the service's ids array
        this.storage.set('ids', JSON.stringify(this.ids));
        return id;
    };
    ClickersService.prototype.removeClicker = function (id) {
        // remove clicker from the service
        this.clickers = this.clickers.filter(function (clicker) { return clicker.getId() !== id; });
        // remove from ids array
        this.ids = this.ids.filter(function (filterId) { return filterId !== id; });
        // null id in db
        this.storage.remove(id);
        // update service's ids array
        this.storage.set('ids', JSON.stringify(this.ids));
    };
    ClickersService.prototype.doClick = function (id) {
        var clicker = this.getClicker(id);
        clicker.doClick();
        // save the clicker with updated click in storage
        this.storage.set(clicker.getId(), JSON.stringify(clicker));
    };
    ClickersService.prototype.uid = function () {
        return Math.random().toString(35).substr(2, 10);
    };
    ClickersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__storage__["a" /* StorageService */]])
    ], ClickersService);
    return ClickersService;
}());

//# sourceMappingURL=clickers.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Click; });

var Click = (function () {
    function Click(time, location) {
        this.time = time || new Date().getTime();
        this.location = location || 'TODO';
    }
    Click.prototype.getTime = function () {
        return this.time;
    };
    Click.prototype.getLocation = function () {
        return this.location;
    };
    return Click;
}());

//# sourceMappingURL=click.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(105);


// Represents a single Clicker
var Clicker = (function () {
    function Clicker(id, name) {
        this.id = id;
        this.name = name;
        this.clicks = [];
    }
    Clicker.prototype.doClick = function () {
        this.clicks.push(new __WEBPACK_IMPORTED_MODULE_0____["a" /* Click */]());
    };
    Clicker.prototype.addClick = function (click) {
        this.clicks.push(click);
    };
    Clicker.prototype.getCount = function () {
        return this.clicks.length;
    };
    Clicker.prototype.getId = function () {
        return this.id;
    };
    Clicker.prototype.getName = function () {
        return this.name;
    };
    return Clicker;
}());

//# sourceMappingURL=clicker.js.map

/***/ }),

/***/ 304:
/***/ (function(module, exports) {

module.exports = {"name":"Clicker","author":"Stephen Hazleton","homepage":"https://github.com/lathonez/clicker","private":true,"scripts":{"clean":"ionic-app-scripts clean","build":"ionic-app-scripts build","deploy":"ngh --dir www --no-silent","lint":"ionic-app-scripts lint","ionic:build":"ionic-app-scripts build","ionic:serve":"ionic-app-scripts serve","e2e":"ionic-app-scripts build && protractor","postinstall":"webdriver-manager update --gecko false","start":"ionic serve","test":"ng test","test-coverage":"ng test --code-coverage","test-ci":"ng test --watch=false --code-coverage"},"version":"2.23.0","dependencies":{"@angular/common":"5.0.1","@angular/compiler":"5.0.1","@angular/compiler-cli":"5.0.1","@angular/core":"5.0.1","@angular/forms":"5.0.1","@angular/http":"5.0.1","@angular/platform-browser":"5.0.1","@angular/platform-browser-dynamic":"5.0.1","@angular/router":"5.0.1","@ionic-native/core":"4.4.0","@ionic-native/splash-screen":"4.4.0","@ionic-native/status-bar":"4.4.0","@ionic/storage":"2.1.3","@ngx-translate/core":"9.0.1","@ngx-translate/http-loader":"2.0.0","angular-cli-ghpages":"0.5.1","cordova-android":"6.4.0","cordova-browser":"5.0.1","cordova-ios":"4.5.4","cordova-plugin-console":"1.1.0","cordova-plugin-device":"1.1.7","cordova-plugin-splashscreen":"4.1.0","cordova-plugin-statusbar":"2.3.0","cordova-plugin-whitelist":"1.3.3","ionic-angular":"3.9.2","ionic-plugin-keyboard":"2.2.1","ionicons":"3.0.0","rxjs":"5.5.2","sw-toolbox":"3.6.0","zone.js":"0.8.18"},"devDependencies":{"@angular/cli":"1.5.4","@ionic/app-scripts":"3.1.2","@types/jasmine":"2.5.54","@types/node":"7.0.4","codecov":"3.0.0","connect":"3.6.5","ionic-mocks":"1.0.4","jasmine-core":"2.8.0","jasmine-reporters":"2.2.1","karma":"1.7.1","karma-chrome-launcher":"2.2.0","karma-cli":"1.0.1","karma-coverage-istanbul-reporter":"1.3.0","karma-jasmine":"1.1.0","karma-jasmine-html-reporter":"0.2.2","karma-junit-reporter":"1.2.0","protractor":"5.2.0","serve-static":"1.13.1","ts-node":"3.3.0","tslint":"5.8.0","tslint-eslint-rules":"4.1.1","typescript":"2.4.2"},"repository":{"type":"git","url":"https://github.com/lathonez/clicker.git"},"license":"MIT","description":"Clicker: An Ionic project","cordova":{"platforms":["android","browser","ios"],"plugins":{"cordova-plugin-console":{},"cordova-plugin-device":{},"cordova-plugin-splashscreen":{},"cordova-plugin-statusbar":{},"cordova-plugin-whitelist":{},"ionic-plugin-keyboard":{}}}}

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clickerList_clickerList__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page2_page2__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__clickerList_clickerList__["a" /* ClickerList */],
                __WEBPACK_IMPORTED_MODULE_5__page2_page2__["a" /* Page2 */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_3__components__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__clickerList_clickerList__["a" /* ClickerList */],
            ],
            entryComponents: [],
            providers: [],
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clickerButton_clickerButton__ = __webpack_require__(209);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clickerForm_clickerForm__ = __webpack_require__(210);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__languagePicker_languagePicker__ = __webpack_require__(211);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_module__ = __webpack_require__(307);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__components_module__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clickerButton_clickerButton__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clickerForm_clickerForm__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__languagePicker_languagePicker__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__clickerForm_clickerForm__["a" /* ClickerForm */],
                __WEBPACK_IMPORTED_MODULE_4__clickerButton_clickerButton__["a" /* ClickerButton */],
                __WEBPACK_IMPORTED_MODULE_6__languagePicker_languagePicker__["a" /* LanguagePicker */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__clickerButton_clickerButton__["a" /* ClickerButton */],
                __WEBPACK_IMPORTED_MODULE_5__clickerForm_clickerForm__["a" /* ClickerForm */],
                __WEBPACK_IMPORTED_MODULE_6__languagePicker_languagePicker__["a" /* LanguagePicker */],
            ],
            entryComponents: [],
            providers: [],
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clickers__ = __webpack_require__(297);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__clickers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage__ = __webpack_require__(207);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__storage__["a"]; });


//# sourceMappingURL=index.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map