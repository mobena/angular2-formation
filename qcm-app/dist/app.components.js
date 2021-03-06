"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var qcmService_1 = require('./services/qcmService');
var QcmAppComponent = (function () {
    function QcmAppComponent(_qcmService) {
        this._qcmService = _qcmService;
        this.list = true;
    }
    QcmAppComponent.prototype.ngOnInit = function () {
        this.qcms = this._qcmService.getQcm();
    };
    QcmAppComponent.prototype.editionMode = function () {
        this.edition = true;
        this.list = false;
    };
    QcmAppComponent.prototype.listMode = function () {
        this.edition = false;
        this.list = true;
    };
    QcmAppComponent = __decorate([
        core_1.Component({
            selector: 'qcm-app',
            template: "\n        <button (click)=\"editionMode()\" *ngIf=\"list\">Mode edit</button>\n        \n        <button (click)=\"listMode()\" *ngIf=\"edition\">Mode list</button>\n        \n        <h1>hello</h1>\n        \n        <qcm-list *ngIf=\"list\" [qcms]='qcms'></qcm-list>\n        <qcm-edition *ngIf=\"edition\" [qcms]='qcms'></qcm-edition>\n    "
        }), 
        __metadata('design:paramtypes', [qcmService_1.qcmService])
    ], QcmAppComponent);
    return QcmAppComponent;
}());
exports.QcmAppComponent = QcmAppComponent;
//# sourceMappingURL=app.components.js.map