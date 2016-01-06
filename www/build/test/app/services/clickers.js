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
var clicker_1 = require('../models/clicker');
var click_1 = require('../models/click');
var angular2_1 = require('angular2/angular2');
var ionic_1 = require('ionic-framework/ionic');
var Clickers = (function () {
    function Clickers() {
        var _this = this;
        this.storage = Clickers.initStorage(); // typeof SqlStorage is not assignable to type StorageEngine seems to be an ionic issue
        this.ids = [];
        this.clickers = [];
        this.initIds()
            .then(function (ids) { _this.ids = ids; })
            .then(function () { return _this.initClickers(_this.ids); })
            .then(function (clickers) { return _this.clickers = clickers; });
    }
    // initialise Ids from SQL storage
    Clickers.prototype.initIds = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var ids = [];
            _this.storage.get('ids') // return the promise so we can chain initClickers
                .then(function (rawIds) {
                // ids are stored as stringified JSON array
                ids = JSON.parse(String(rawIds)) || [];
            })
                .then(function () { return resolve(ids); });
        });
    };
    // initialise Clickers from SQL storage given an array of ids
    Clickers.prototype.initClickers = function (ids) {
        var _this = this;
        // get all existing ids
        return new Promise(function (resolve) {
            var clickers = [];
            for (var _i = 0; _i < ids.length; _i++) {
                var id = ids[_i];
                _this.storage.get(id)
                    .then(function (clicker) {
                    clickers.push(_this.initClicker(clicker));
                });
            }
            resolve(clickers);
        });
    };
    // initialise a clicker from a raw JSON string out of the DB
    Clickers.prototype.initClicker = function (clicker) {
        var parsedClicker = JSON.parse(clicker);
        var newClicker = new clicker_1.Clicker(parsedClicker.id, parsedClicker.name);
        // add the clicks - need to re-instantiate object
        for (var _i = 0, _a = parsedClicker.clicks; _i < _a.length; _i++) {
            var click = _a[_i];
            newClicker.addClick(new click_1.Click(click.time, click.location));
        }
        return newClicker;
    };
    Clickers.initStorage = function () {
        return new ionic_1.SqlStorage();
    };
    Clickers.prototype.getClicker = function (id) {
        return this.clickers.find(function (clicker) { return clicker.getId() === id; });
    };
    Clickers.prototype.getClickers = function () {
        return this.clickers;
    };
    Clickers.prototype.newClicker = function (name) {
        var id = this.uid();
        var clicker = new clicker_1.Clicker(id, name);
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
    Clickers.prototype.removeClicker = function (id) {
        // remove clicker from the service
        this.clickers = this.clickers.filter(function (clicker) { return clicker.getId() !== id; });
        // remove from ids array
        this.ids = this.ids.filter(function (filterId) { return filterId !== id; });
        // null id in db
        this.storage.remove(id);
        // update service's ids array
        this.storage.set('ids', JSON.stringify(this.ids));
    };
    Clickers.prototype.doClick = function (id) {
        var clicker = this.getClicker(id);
        clicker.doClick();
        // save the clicker with updated click in storage
        this.storage.set(clicker.getId(), JSON.stringify(clicker));
    };
    Clickers.prototype.uid = function () {
        return Math.random().toString(35).substr(2, 10);
    };
    Clickers = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Clickers);
    return Clickers;
})();
exports.Clickers = Clickers;
