(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-learn-writing-learn-writing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learn-writing/hira-writing/hira-writing.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learn-writing/hira-writing/hira-writing.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons\n      slot=\"start\"\n      [routerLink]=\"['/learn-writing']\"\n    >\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-buttons>\n    <ion-title>ひらがな</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrap-word\">\n    <div class=\"box\">\n      <div class=\"listen\">\n        <ion-icon name=\"volume-high-outline\"></ion-icon>\n      </div>\n      <div class=\"note\">\n        <ion-icon name=\"star-outline\"></ion-icon>\n      </div>\n      <div class=\"img\">\n        <img src=\"./../../../../assets/writing/a-hira.png\" alt=\"\" />\n      </div>\n    </div>\n  </div>\n  <div class=\"wrap-write\">\n    <ion-buttons class=\"btn-color\">\n        <button ion-button icon-only style.color=\"#fff\" (click)=\"changeColour('#fff', true)\">\n            <ion-icon style=\"color: #fff;font-size: 30px;\" name=\"square\"></ion-icon>\n        </button>\n        <button ion-button icon-only style.color=\"#fff\" (click)=\"changeColour('#333', false)\">\n            <ion-icon style=\"color: #333;font-size: 30px;\" name=\"square\"></ion-icon>\n        </button>\n    </ion-buttons>\n    <div class=\"box\">\n        <canvas #canvas (touchstart)=\"handleStart($event)\" (touchmove)=\"handleMove($event)\"></canvas>\n    </div>\n  </div>\n  <ion-fab horizontal=\"center\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"checkmark-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learn-writing/learn-writing.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learn-writing/learn-writing.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n  <div class=\"header\">\n    <ion-buttons slot=\"start\" [routerLink]=\"['/']\" class=\"btn-back\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-buttons>\n    <h2>쓰기</h2>\n    <p>매일 한국어를 배우다</p>\n  </div>\n\n  <div class=\"content-wirting\">\n    <div class=\"box-wrap\">\n      <div class=\"box\" [routerLink]=\"['hira-writing']\">\n        <img src=\"../../../assets/writing/hiragana-icon.png\" alt=\"\" />\n        <div class=\"content\">\n          <h3>Hiragana <span>(ひらがな)</span></h3>\n        </div>\n      </div>\n\n      <div class=\"box\">\n        <img src=\"../../../assets/writing/katakana-icon.png\" alt=\"\" />\n        <div class=\"content\">\n          <h3>Katakana <span>(ヒラガナ)</span></h3>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/learn-writing/hira-writing/hira-writing-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/learn-writing/hira-writing/hira-writing-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: HiraWritingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiraWritingPageRoutingModule", function() { return HiraWritingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hira_writing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hira-writing.page */ "./src/app/pages/learn-writing/hira-writing/hira-writing.page.ts");




const routes = [
    {
        path: '',
        component: _hira_writing_page__WEBPACK_IMPORTED_MODULE_3__["HiraWritingPage"]
    }
];
let HiraWritingPageRoutingModule = class HiraWritingPageRoutingModule {
};
HiraWritingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HiraWritingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/learn-writing/hira-writing/hira-writing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/learn-writing/hira-writing/hira-writing.module.ts ***!
  \*************************************************************************/
/*! exports provided: HiraWritingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiraWritingPageModule", function() { return HiraWritingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _hira_writing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hira-writing-routing.module */ "./src/app/pages/learn-writing/hira-writing/hira-writing-routing.module.ts");
/* harmony import */ var _hira_writing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hira-writing.page */ "./src/app/pages/learn-writing/hira-writing/hira-writing.page.ts");







let HiraWritingPageModule = class HiraWritingPageModule {
};
HiraWritingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _hira_writing_routing_module__WEBPACK_IMPORTED_MODULE_5__["HiraWritingPageRoutingModule"]
        ],
        declarations: [_hira_writing_page__WEBPACK_IMPORTED_MODULE_6__["HiraWritingPage"]]
    })
], HiraWritingPageModule);



/***/ }),

/***/ "./src/app/pages/learn-writing/hira-writing/hira-writing.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/learn-writing/hira-writing/hira-writing.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #ff9800;\n  --color: #fff;\n}\n\nion-content {\n  --background: #9e9e9e2b;\n}\n\n.btn-color {\n  position: absolute;\n  right: 10px;\n}\n\n.wrap-word {\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  position: relative;\n}\n\n.wrap-word .box {\n  background-color: #fff;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);\n  width: 60%;\n}\n\n.wrap-word .box .listen {\n  position: absolute;\n  left: 10px;\n  top: 10px;\n  font-size: 30px;\n}\n\n.wrap-word .box .note {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 30px;\n}\n\n.wrap-word .box .img {\n  text-align: center;\n}\n\n.wrap-word .box .img img {\n  width: 100%;\n}\n\n.wrap-write {\n  padding: 10px;\n}\n\n.wrap-write .box {\n  background: #fff;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);\n  height: calc(100vh - 300px);\n  border-radius: 10px;\n  position: relative;\n}\n\n.wrap-write .box canvas {\n  height: calc(100vh - 300px);\n  width: 100%;\n}\n\n.wrap-write .box::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 100%;\n  left: 50%;\n  top: 0;\n  background-color: #80808038;\n}\n\n.wrap-write .box::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  left: 0;\n  top: 50%;\n  background-color: #80808038;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm4td3JpdGluZy9oaXJhLXdyaXRpbmcvaGlyYS13cml0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxzQkFBQTtFQUNBLHlDQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUFJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFFTjs7QUFBSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBRU47O0FBQUk7RUFDRSxrQkFBQTtBQUVOOztBQURNO0VBQ0UsV0FBQTtBQUdSOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNJO0VBQ0UsMkJBQUE7RUFDQSxXQUFBO0FBQ047O0FBRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGVhcm4td3JpdGluZy9oaXJhLXdyaXRpbmcvaGlyYS13cml0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmY5ODAwO1xuICAtLWNvbG9yOiAjZmZmO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzllOWU5ZTJiO1xufVxuXG4uYnRuLWNvbG9ye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4ud3JhcC13b3JkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgICB3aWR0aDogNjAlO1xuXG4gICAgLmxpc3RlbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAxMHB4O1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgICAubm90ZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIHRvcDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gICAgLmltZyB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLndyYXAtd3JpdGUge1xuICBwYWRkaW5nOiAxMHB4O1xuICAuYm94IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDMwMHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGNhbnZhc3tcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDMwMHB4KTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICAuYm94OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDJweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwMzg7XG4gIH1cbiAgLmJveDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODAzODtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/learn-writing/hira-writing/hira-writing.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/learn-writing/hira-writing/hira-writing.page.ts ***!
  \***********************************************************************/
/*! exports provided: HiraWritingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiraWritingPage", function() { return HiraWritingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let HiraWritingPage = class HiraWritingPage {
    constructor(platform) {
        this.platform = platform;
        this.width = 512;
        this.height = 418;
        this.currentColour = '#333';
        this.brushSize = 6;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.initCanvasDraw();
    }
    initCanvasDraw() {
        this.canvasElement = this.canvas.nativeElement;
        this.canvasElement.width = this.width;
        this.canvasElement.height = this.height;
    }
    handleStart(ev) {
        this.lastX = ev.touches[0].pageX + 50;
        this.lastY = ev.touches[0].pageY - 300;
    }
    changeColour(color, isdelete) {
        if (isdelete === true) {
            this.brushSize = 15;
        }
        else {
            this.brushSize = 6;
        }
        this.currentColour = color;
    }
    handleMove(ev) {
        let ctx = this.canvasElement.getContext('2d');
        let currentX = ev.touches[0].pageX + 50;
        let currentY = ev.touches[0].pageY - 300;
        ctx.beginPath();
        ctx.lineJoin = "round";
        ctx.moveTo(this.lastX, this.lastY);
        ctx.lineTo(currentX, currentY);
        ctx.closePath();
        ctx.strokeStyle = this.currentColour;
        ctx.lineWidth = this.brushSize;
        ctx.stroke();
        this.lastX = currentX;
        this.lastY = currentY;
    }
};
HiraWritingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
HiraWritingPage.propDecorators = {
    canvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['canvas',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
HiraWritingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hira-writing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hira-writing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learn-writing/hira-writing/hira-writing.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hira-writing.page.scss */ "./src/app/pages/learn-writing/hira-writing/hira-writing.page.scss")).default]
    })
], HiraWritingPage);



/***/ }),

/***/ "./src/app/pages/learn-writing/learn-writing-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/learn-writing/learn-writing-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: LearnWritingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnWritingPageRoutingModule", function() { return LearnWritingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _learn_writing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./learn-writing.page */ "./src/app/pages/learn-writing/learn-writing.page.ts");
/* harmony import */ var src_app_constants_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constants/config */ "./src/app/constants/config.ts");





const routes = [
    {
        path: '',
        component: _learn_writing_page__WEBPACK_IMPORTED_MODULE_3__["LearnWritingPage"]
    },
    {
        path: src_app_constants_config__WEBPACK_IMPORTED_MODULE_4__["ROUTING_PAGE"].WRITING.HIRA_WRITING,
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./hira-writing/hira-writing.module */ "./src/app/pages/learn-writing/hira-writing/hira-writing.module.ts")).then(m => m.HiraWritingPageModule)
    },
];
let LearnWritingPageRoutingModule = class LearnWritingPageRoutingModule {
};
LearnWritingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LearnWritingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/learn-writing/learn-writing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/learn-writing/learn-writing.module.ts ***!
  \*************************************************************/
/*! exports provided: LearnWritingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnWritingPageModule", function() { return LearnWritingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _learn_writing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./learn-writing-routing.module */ "./src/app/pages/learn-writing/learn-writing-routing.module.ts");
/* harmony import */ var _hira_writing_hira_writing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hira-writing/hira-writing.module */ "./src/app/pages/learn-writing/hira-writing/hira-writing.module.ts");
/* harmony import */ var _learn_writing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./learn-writing.page */ "./src/app/pages/learn-writing/learn-writing.page.ts");








let LearnWritingPageModule = class LearnWritingPageModule {
};
LearnWritingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _learn_writing_routing_module__WEBPACK_IMPORTED_MODULE_5__["LearnWritingPageRoutingModule"],
            _hira_writing_hira_writing_module__WEBPACK_IMPORTED_MODULE_6__["HiraWritingPageModule"]
        ],
        declarations: [_learn_writing_page__WEBPACK_IMPORTED_MODULE_7__["LearnWritingPage"]]
    })
], LearnWritingPageModule);



/***/ }),

/***/ "./src/app/pages/learn-writing/learn-writing.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/learn-writing/learn-writing.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #ffc409;\n}\n\n.header {\n  background-color: #ff9800;\n  color: #fff;\n  padding: 30px 0;\n  text-align: center;\n  border-bottom-left-radius: 40%;\n  border-bottom-right-radius: 40%;\n  position: relative;\n}\n\n.header h2 {\n  font-size: 28px;\n}\n\n.header .btn-back {\n  position: absolute;\n  font-size: 24px;\n  top: 10%;\n  left: 10px;\n}\n\n.content-wirting {\n  margin-top: 20px;\n  padding: 16px;\n}\n\n.content-wirting .box-wrap {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.content-wirting .box-wrap .box {\n  width: 90%;\n  margin-bottom: 30px !important;\n  text-align: center;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);\n  margin: auto;\n  height: 220px;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.content-wirting .box-wrap .box img {\n  height: 150px;\n}\n\n.content-wirting .box-wrap h3 {\n  font-size: 18px;\n}\n\n.content-wirting .box-wrap h3 span {\n  color: #ff9800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm4td3JpdGluZy9sZWFybi13cml0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDRTtFQUNFLGVBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFBRjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFDSTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNOOztBQUNNO0VBQ0UsYUFBQTtBQUNSOztBQUdJO0VBQ0UsZUFBQTtBQUROOztBQUVNO0VBQ0UsY0FBQTtBQUFSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGVhcm4td3JpdGluZy9sZWFybi13cml0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZjNDA5O1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0MCU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBoMntcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cblxuICAuYnRuLWJhY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdG9wOiAxMCU7XG4gICAgbGVmdDogMTBweDtcbiAgfVxufVxuLmNvbnRlbnQtd2lydGluZyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIC5ib3gtd3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLmJveCB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBcbiAgICAgIGltZ3tcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoM3tcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHNwYW57XG4gICAgICAgIGNvbG9yOiAjZmY5ODAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/learn-writing/learn-writing.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/learn-writing/learn-writing.page.ts ***!
  \***********************************************************/
/*! exports provided: LearnWritingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnWritingPage", function() { return LearnWritingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LearnWritingPage = class LearnWritingPage {
    constructor() { }
    ngOnInit() {
    }
};
LearnWritingPage.ctorParameters = () => [];
LearnWritingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-learn-writing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./learn-writing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learn-writing/learn-writing.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./learn-writing.page.scss */ "./src/app/pages/learn-writing/learn-writing.page.scss")).default]
    })
], LearnWritingPage);



/***/ })

}]);
//# sourceMappingURL=pages-learn-writing-learn-writing-module-es2015.js.map