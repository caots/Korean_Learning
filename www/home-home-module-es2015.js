(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skeleton/skeleton.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/skeleton/skeleton.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/topic-card/topic-card.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/topic-card/topic-card.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"topic\">\n  <div class=\"content\">\n    <div class=\"icon-topic\">\n      <ion-icon class=\"active\" name=\"flame-outline\"></ion-icon>\n      <ion-icon name=\"flame-outline\"></ion-icon>\n      <ion-icon name=\"flame-outline\"></ion-icon>\n    </div>\n    <p class=\"title\">{{title}}</p>\n    <p class=\"sub\">\n      <span>{{subTitle}}</span>\n      <span>{{timeLearn}}</span>\n    </p>\n    <ion-icon name=\"share-social-outline\"></ion-icon>\n  </div>\n  <div class=\"img\">\n    <img [src]=\"image\" alt=\"\" />\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content *ngIf=\"data\">\n  <div class=\"header\">\n    <h2>매일 한국어를 배우다</h2>\n  </div>\n\n  <div class=\"ion-padding\" scroll-y=\"false\">\n    <ion-slides [options]=\"slideOpts\">\n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"../../../assets/slides/slide-1.png\" />\n          <p class=\"text\">Writing Korean</p>\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n        <img src=\"../../../assets/slides/slide-2.png\" />\n        <p class=\"text\">Exercise Korean</p>\n      </ion-slide>\n\n      <ion-slide>\n        <img src=\"../../../assets/slides/slide-3.png\" />\n        <p class=\"text\">Talking Korean</p>\n      </ion-slide>\n\n      <ion-slide>\n        <img src=\"../../../assets/slides/slide-4.png\" />\n        <p class=\"text\">Listening Korean</p>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <div class=\"ion-padding\" scroll-y=\"false\">\n    <ion-slides [options]=\"slideOpts\">\n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"../../../assets/slides/slide-5.png\" />\n          <p class=\"text\">Blog Korean</p>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <div class=\"card-topic\">\n    <h3>Topic for you</h3>\n    <app-topic-card\n      [routerLink]=\"['/learn-writing']\"\n      [isTimeLine]=\"2\"\n      [image]=\"'../../../assets/slides/slide-1.png'\"\n      [title]=\"'Writing'\"\n      [subTitle]=\"'Beginer'\"\n      [timeLearn]=\"'2 week'\"\n    ></app-topic-card>\n    <app-topic-card\n      [image]=\"'../../../assets/slides/slide-2.png'\"\n      [title]=\"'Listening'\"\n      [subTitle]=\"'Beginer'\"\n      [timeLearn]=\"'2 week'\"\n    ></app-topic-card>\n    <app-topic-card\n      [image]=\"'../../../assets/slides/slide-3.png'\"\n      [title]=\"'Test'\"\n      [subTitle]=\"'Beginer'\"\n      [timeLearn]=\"'5 Test'\"\n    ></app-topic-card>\n    <app-topic-card\n      [image]=\"'../../../assets/slides/slide-4.png'\"\n      [title]=\"'Test'\"\n      [subTitle]=\"'Advance'\"\n      [timeLearn]=\"'10 test'\"\n    ></app-topic-card>\n  </div>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      refreshingSpinner=\"circles\"\n    >\n    </ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n\n<ion-content *ngIf=\"!data\">\n  <app-skeleton></app-skeleton>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/skeleton/skeleton.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/skeleton/skeleton.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tlbGV0b24vc2tlbGV0b24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/skeleton/skeleton.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/skeleton/skeleton.component.ts ***!
  \***********************************************************/
/*! exports provided: SkeletonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonComponent", function() { return SkeletonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SkeletonComponent = class SkeletonComponent {
    constructor() { }
    ngOnInit() { }
};
SkeletonComponent.ctorParameters = () => [];
SkeletonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skeleton',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./skeleton.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skeleton/skeleton.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./skeleton.component.scss */ "./src/app/components/skeleton/skeleton.component.scss")).default]
    })
], SkeletonComponent);



/***/ }),

/***/ "./src/app/components/skeleton/skeleton.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/skeleton/skeleton.module.ts ***!
  \********************************************************/
/*! exports provided: SkeletonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonModule", function() { return SkeletonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skeleton.component */ "./src/app/components/skeleton/skeleton.component.ts");





const components = [
    _skeleton_component__WEBPACK_IMPORTED_MODULE_4__["SkeletonComponent"],
];
let SkeletonModule = class SkeletonModule {
};
SkeletonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        declarations: [...components],
        exports: [...components]
    })
], SkeletonModule);



/***/ }),

/***/ "./src/app/components/topic-card/topic-card.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/topic-card/topic-card.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topic {\n  margin: 20px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);\n  border-radius: 12px;\n  height: 160px;\n}\n.topic .content {\n  padding: 0 10px;\n}\n.topic .content p {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.topic .content p.title {\n  color: #2196f3;\n  font-size: 20px;\n  font-weight: 600;\n  margin-top: 10px;\n  margin-bottom: 0;\n}\n.topic .content p.sub {\n  font-size: 18px;\n  margin-top: 5px;\n}\n.topic .content p.sub span {\n  color: gray;\n  padding-right: 8px;\n}\n.topic .img img {\n  width: 100%;\n  height: 160px;\n}\nion-icon {\n  color: gray;\n  font-size: 20px;\n}\n.active {\n  color: #ff9800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3BpYy1jYXJkL3RvcGljLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0FBQ0o7QUFDSTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQUNOO0FBQ0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNOO0FBQ0k7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUNOO0FBQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUdJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFETjtBQU1BO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFIRjtBQU1BO0VBQ0UsY0FBQTtBQUhGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b3BpYy1jYXJkL3RvcGljLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9waWMge1xuICBtYXJnaW46IDIwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgaGVpZ2h0OiAxNjBweDtcblxuICAuY29udGVudCB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuXG4gICAgcCB7XG4gICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgfVxuICAgIHAudGl0bGUge1xuICAgICAgY29sb3I6ICMyMTk2ZjM7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIHAuc3ViIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG4gICAgcC5zdWIgc3BhbiB7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICB9XG4gIH1cbiAgLmltZyB7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6ICNmZjk4MDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/topic-card/topic-card.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/topic-card/topic-card.component.ts ***!
  \***************************************************************/
/*! exports provided: TopicCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicCardComponent", function() { return TopicCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TopicCardComponent = class TopicCardComponent {
    constructor() { }
    ngOnInit() { }
};
TopicCardComponent.ctorParameters = () => [];
TopicCardComponent.propDecorators = {
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['image',] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['title',] }],
    subTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['subTitle',] }],
    timeLearn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['timeLearn',] }],
    isTimeLine: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['isTimeLine',] }]
};
TopicCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topic-card',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./topic-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/topic-card/topic-card.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./topic-card.component.scss */ "./src/app/components/topic-card/topic-card.component.scss")).default]
    })
], TopicCardComponent);



/***/ }),

/***/ "./src/app/components/topic-card/topic-card.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/topic-card/topic-card.module.ts ***!
  \************************************************************/
/*! exports provided: TopicCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicCardModule", function() { return TopicCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _topic_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topic-card.component */ "./src/app/components/topic-card/topic-card.component.ts");





const components = [
    _topic_card_component__WEBPACK_IMPORTED_MODULE_4__["TopicCardComponent"],
];
let TopicCardModule = class TopicCardModule {
};
TopicCardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        declarations: [...components],
        exports: [...components]
    })
], TopicCardModule);



/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _components_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/skeleton/skeleton.module */ "./src/app/components/skeleton/skeleton.module.ts");
/* harmony import */ var _components_topic_card_topic_card_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/topic-card/topic-card.module */ "./src/app/components/topic-card/topic-card.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _components_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_6__["SkeletonModule"],
            _components_topic_card_topic_card_module__WEBPACK_IMPORTED_MODULE_7__["TopicCardModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"],]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".swiper-slide img {\n  max-width: 80%;\n  margin: 20px 0;\n  pointer-events: none;\n}\n\n.header {\n  background-color: #FF9800;\n  color: #fff;\n  padding: 50px 0;\n  text-align: center;\n  border-bottom-left-radius: 40%;\n  border-bottom-right-radius: 40%;\n}\n\nion-slide {\n  position: relative;\n  margin: 0 10px 0 0;\n  flex-direction: column;\n  height: 200px;\n  border: 1px solid #ffc409;\n  border-radius: 10px;\n}\n\nion-slide .text {\n  position: absolute;\n  background-color: #FF9800;\n  padding: 10px;\n  border-radius: 8px 8px 0 0;\n  bottom: -13px;\n  color: #fff;\n  left: 50%;\n  font-size: 13px;\n  text-align: center;\n  transform: translate(-50%);\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\nh3 {\n  color: #FF9800;\n  font-size: 24px;\n  margin-top: 0;\n  text-transform: uppercase;\n}\n\n.card-topic {\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUFDSjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUE7RUFDRSxhQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlci1zbGlkZSBpbWcge1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uaGVhZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjk4MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0MCU7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDQwJTtcbn1cblxuaW9uLXNsaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmM0MDk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgLnRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5ODAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XG4gICAgYm90dG9tOiAtMTNweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsZWZ0OiA1MCU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIH1cblxufVxuXG5oM3tcbiAgICBjb2xvcjogI0ZGOTgwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOztcbn1cblxuLmNhcmQtdG9waWN7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() {
        this.slideOpts = {
            slidesPerView: 1.5,
            speed: 400
        };
    }
    ngOnInit() {
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    ionViewWillEnter() {
        setTimeout(() => {
            this.data = {
                'heading': 'Normal text',
            };
        }, 1500);
    }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map