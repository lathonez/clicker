webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__click__ = __webpack_require__(283);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__click__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clicker__ = __webpack_require__(284);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__clicker__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clickerList_clickerList__ = __webpack_require__(197);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__clickerList_clickerList__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page2_page2__ = __webpack_require__(199);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__page2_page2__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_module__ = __webpack_require__(286);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__pages_module__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickerList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__package_json__ = __webpack_require__(285);
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
        this.nav = nav;
        this.clickerService = clickerService;
        this.title = 'Clickers';
        this.version = __WEBPACK_IMPORTED_MODULE_3__package_json__["version"];
    }
    ClickerList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/root/clicker/src/pages/clickerList/clickerList.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <clicker-form></clicker-form>\n  <ion-row *ngFor="let clicker of clickerService.getClickers()" class="clickerList">\n    <ion-col width-80><clicker-button [clicker]="clicker"></clicker-button></ion-col>\n    <ion-col>\n      <button ion-button block color="danger" outline (click)="clickerService.removeClicker(clicker.id)"><ion-icon name="trash"></ion-icon></button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>v.{{version}}</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/root/clicker/src/pages/clickerList/clickerList.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services__["a" /* ClickersService */]])
    ], ClickerList);
    return ClickerList;
}());

//# sourceMappingURL=clickerList.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(279);

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

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);

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
    function Page2(alertController) {
        var _this = this;
        this.title = 'Page 2';
        this.OK = function () {
            _this.okEd = true;
        };
        this.alertController = alertController;
    }
    Page2.prototype.onGainChange = function () {
        return;
    };
    Page2.prototype.showSimpleAlert = function () {
        this.alert1 = this.alertController.create({
            title: 'This is an example for an alert',
            buttons: ['Ok', 'Dismiss'],
        });
        this.alert1.present();
    };
    Page2.prototype.showMoreAdvancedAlert = function () {
        this.alert1 = this.alertController.create({
            title: 'This is an example for an alert',
            buttons: [{
                    text: 'More Advanced Ok',
                    handler: this.OK,
                },
                'Dismiss'],
        });
        this.alert1.present();
    };
    Page2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/root/clicker/src/pages/page2/page2.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="message bye-ionic">\n  <button ion-button (click)="showSimpleAlert()">Show Simple Alert</button>\n  <button ion-button (click)="showMoreAdvancedAlert()">Show More Advanced Alert</button>\n</ion-content>\n'/*ion-inline-end:"/root/clicker/src/pages/page2/page2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Page2);
    return Page2;
}());

//# sourceMappingURL=page2.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickerButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(101);

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

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickerForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(50);

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
            selector: 'clicker-form',template:/*ion-inline-start:"/root/clicker/src/components/clickerForm/clickerForm.html"*/'<form [formGroup]="form" (submit)="newClicker(form.value)">\n  <ion-row>\n    <ion-col width-80>\n      <ion-item >\n        <ion-input block formControlName="clickerNameInput" type="text" placeholder="New Clicker"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <button ion-button type="submit" block secondary outline>\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</form>\n'/*ion-inline-end:"/root/clicker/src/components/clickerForm/clickerForm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["a" /* ClickersService */], __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */]])
    ], ClickerForm);
    return ClickerForm;
}());

//# sourceMappingURL=clickerForm.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* ClickerApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__pages__["c" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* ClickerApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* ClickerApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages__["a" /* ClickerList */],
                __WEBPACK_IMPORTED_MODULE_6__pages__["b" /* Page2 */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__services__["a" /* ClickersService */],
                __WEBPACK_IMPORTED_MODULE_7__services__["b" /* StorageService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickerApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(196);
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
    function ClickerApp(platform, menu, splash, status) {
        // make ClcikerList the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages__["a" /* ClickerList */];
        this.menu = menu;
        this.platform = platform;
        this.splash = splash;
        this.status = status;
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Clickers', component: __WEBPACK_IMPORTED_MODULE_4__pages__["a" /* ClickerList */] },
            { title: 'Goodbye Ionic', component: __WEBPACK_IMPORTED_MODULE_4__pages__["b" /* Page2 */] },
        ];
    }
    ClickerApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], ClickerApp.prototype, "nav", void 0);
    ClickerApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/root/clicker/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/root/clicker/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
    ], ClickerApp);
    return ClickerApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(101);

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

/***/ 283:
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

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(101);


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

/***/ 285:
/***/ (function(module, exports) {

module.exports = {"name":"Clicker","author":"Stephen Hazleton","homepage":"https://github.com/lathonez/clicker","private":true,"scripts":{"clean":"ionic-app-scripts clean","build":"ionic-app-scripts build","deploy":"ngh --dir www --no-silent","lint":"ionic-app-scripts lint","ionic:build":"ionic-app-scripts build","ionic:serve":"ionic-app-scripts serve","e2e":"ionic-app-scripts build && protractor","postinstall":"webdriver-manager update --gecko false","start":"ionic serve","test":"ng test","test-coverage":"ng test --code-coverage","test-ci":"ng test --watch=false --code-coverage"},"version":"2.22.0","dependencies":{"@angular/common":"5.0.1","@angular/compiler":"5.0.1","@angular/compiler-cli":"5.0.1","@angular/core":"5.0.1","@angular/forms":"5.0.1","@angular/http":"5.0.1","@angular/platform-browser":"5.0.1","@angular/platform-browser-dynamic":"5.0.1","@angular/router":"5.0.1","@ionic-native/core":"4.4.0","@ionic-native/splash-screen":"4.4.0","@ionic-native/status-bar":"4.4.0","@ionic/storage":"2.1.3","angular-cli-ghpages":"0.5.1","cordova-android":"6.4.0","cordova-browser":"5.0.1","cordova-ios":"4.5.4","cordova-plugin-console":"1.1.0","cordova-plugin-device":"1.1.7","cordova-plugin-splashscreen":"4.1.0","cordova-plugin-statusbar":"2.3.0","cordova-plugin-whitelist":"1.3.3","ionic-angular":"3.9.2","ionic-plugin-keyboard":"2.2.1","ionicons":"3.0.0","rxjs":"5.5.2","sw-toolbox":"3.6.0","zone.js":"0.8.18"},"devDependencies":{"@angular/cli":"1.5.4","@ionic/app-scripts":"3.1.2","@types/jasmine":"2.5.54","@types/node":"7.0.4","codecov":"3.0.0","connect":"3.6.5","ionic-mocks":"1.0.4","jasmine-core":"2.8.0","jasmine-reporters":"2.2.1","karma":"1.7.1","karma-chrome-launcher":"2.2.0","karma-cli":"1.0.1","karma-coverage-istanbul-reporter":"1.3.0","karma-jasmine":"1.1.0","karma-jasmine-html-reporter":"0.2.2","karma-junit-reporter":"1.2.0","protractor":"5.2.0","serve-static":"1.13.1","ts-node":"3.3.0","tslint":"5.8.0","tslint-eslint-rules":"4.1.1","typescript":"2.4.2"},"repository":{"type":"git","url":"https://github.com/lathonez/clicker.git"},"license":"MIT","description":"Clicker: An Ionic project","cordova":{"platforms":["android","browser","ios"],"plugins":{"cordova-plugin-console":{},"cordova-plugin-device":{},"cordova-plugin-splashscreen":{},"cordova-plugin-statusbar":{},"cordova-plugin-whitelist":{},"ionic-plugin-keyboard":{}}}}

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clickerList_clickerList__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page2_page2__ = __webpack_require__(199);
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
                __WEBPACK_IMPORTED_MODULE_3__clickerList_clickerList__["a" /* ClickerList */],
                __WEBPACK_IMPORTED_MODULE_4__page2_page2__["a" /* Page2 */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2__components__["a" /* ComponentsModule */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__clickerList_clickerList__["a" /* ClickerList */],
            ],
            entryComponents: [],
            providers: [],
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clickerButton_clickerButton__ = __webpack_require__(200);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clickerForm_clickerForm__ = __webpack_require__(201);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_module__ = __webpack_require__(288);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__components_module__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clickerButton_clickerButton__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clickerForm_clickerForm__ = __webpack_require__(201);
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
                __WEBPACK_IMPORTED_MODULE_4__clickerForm_clickerForm__["a" /* ClickerForm */],
                __WEBPACK_IMPORTED_MODULE_3__clickerButton_clickerButton__["a" /* ClickerButton */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* ReactiveFormsModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__clickerButton_clickerButton__["a" /* ClickerButton */],
                __WEBPACK_IMPORTED_MODULE_4__clickerForm_clickerForm__["a" /* ClickerForm */],
            ],
            entryComponents: [],
            providers: [],
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clickers__ = __webpack_require__(278);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__clickers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage__ = __webpack_require__(198);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__storage__["a"]; });


//# sourceMappingURL=index.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map