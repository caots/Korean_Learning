(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-learn-writing-learn-writing-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learn-writing/learn-writing.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learn-writing/learn-writing.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLearnWritingLearnWritingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-content>\n  <div class=\"header\">\n    <ion-buttons slot=\"start\" [routerLink]=\"['/']\" class=\"btn-back\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-buttons>\n    <h2>書き込み</h2>\n    <p>毎日韓国語を学ぶ</p>\n  </div>\n\n  <div class=\"content-wirting\">\n    <div class=\"box-wrap\">\n      <div class=\"box\" [routerLink]=\"['list-word']\" [queryParams]=\"{ type: 1 }\">\n        <img src=\"../../../assets/writing/hiragana-icon.png\" alt=\"\" />\n        <div class=\"content\">\n          <h3>Hiragana <span>(ひらがな)</span></h3>\n        </div>\n      </div>\n\n      <div class=\"box\" [routerLink]=\"['list-word']\" [queryParams]=\"{ type: 2 }\">\n        <img src=\"../../../assets/writing/katakana-icon.png\" alt=\"\" />\n        <div class=\"content\">\n          <h3>Katakana <span>(ヒラガナ)</span></h3>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learn-writing/writing/hira-writing.page.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learn-writing/writing/hira-writing.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLearnWritingWritingHiraWritingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons\n      slot=\"start\"\n      [routerLink]=\"['/learn-writing/list-word']\"\n      [queryParams]=\"{type:  word.type}\"\n      *ngIf=\"!isLoading\"\n    >\n      <ion-icon name=\"arrow-back-outline\" style=\"font-size: 24px\"></ion-icon>\n    </ion-buttons>\n    <ion-title>ひらがな</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrap-word\" *ngIf=\"!isLoading\">\n    <div class=\"box\">\n      <div class=\"listen\">\n        <ion-icon name=\"volume-high-outline\" style=\"color: #3880ff\"></ion-icon>\n      </div>\n      <div class=\"life\">\n        <ion-icon name=\"shield-checkmark-outline\"></ion-icon>&nbsp;\n        <ion-icon name=\"shield-checkmark-outline\"></ion-icon>&nbsp;\n        <ion-icon name=\"shield-checkmark-outline\"></ion-icon>\n      </div>\n      <div class=\"note\">\n        <ion-icon name=\"star-outline\" style=\"color: #ff9800\"></ion-icon>\n      </div>\n      <div class=\"img\">\n        <img [src]=\"word.imageDraw\" alt=\"\" />\n      </div>\n    </div>\n  </div>\n  <ion-item *ngIf=\"isLoading\">\n    <ion-thumbnail slot=\"start\">\n      <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n    </ion-thumbnail>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n      </p>\n      <p>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  \n  <div class=\"wrap-write\">\n    <ion-buttons class=\"btn-color\">\n      <button\n        ion-button\n        icon-only\n        style.color=\"#fff\"\n        (click)=\"changeColour('#333', true)\"\n      >\n        <ion-icon style=\"color: #fff; font-size: 30px\" name=\"square\"></ion-icon>\n      </button>\n      <button\n        ion-button\n        icon-only\n        style.color=\"#fff\"\n        (click)=\"changeColour('#333', false)\"\n      >\n        <ion-icon style=\"color: #333; font-size: 30px\" name=\"square\"></ion-icon>\n      </button>\n      <button\n        ion-button\n        icon-only\n        style.color=\"#fff\"\n        (click)=\"changeColour('#ff9800', false)\"\n      >\n        <ion-icon\n          style=\"color: #ff9800; font-size: 30px\"\n          name=\"square\"\n        ></ion-icon>\n      </button>\n    </ion-buttons>\n    <div class=\"box\">\n      <canvas\n        #canvas\n        (touchstart)=\"handleStart($event)\"\n        (touchmove)=\"handleMove($event)\"\n      ></canvas>\n    </div>\n  </div>\n  <ion-fab horizontal=\"center\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"checkmark-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/constants/api.config.ts":
    /*!*****************************************!*\
      !*** ./src/app/constants/api.config.ts ***!
      \*****************************************/

    /*! exports provided: apiEndPoints */

    /***/
    function srcAppConstantsApiConfigTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "apiEndPoints", function () {
        return apiEndPoints;
      });

      var url = 'https://5f7053e8bdb178001633beae.mockapi.io/api/v1/';
      var apiEndPoints = {
        word: "".concat(url, "/word")
      };
      /***/
    },

    /***/
    "./src/app/pages/learn-writing/learn-writing-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/learn-writing/learn-writing-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: LearnWritingPageRoutingModule */

    /***/
    function srcAppPagesLearnWritingLearnWritingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LearnWritingPageRoutingModule", function () {
        return LearnWritingPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _learn_writing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./learn-writing.page */
      "./src/app/pages/learn-writing/learn-writing.page.ts");
      /* harmony import */


      var src_app_constants_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/constants/config */
      "./src/app/constants/config.ts");

      var routes = [{
        path: '',
        component: _learn_writing_page__WEBPACK_IMPORTED_MODULE_3__["LearnWritingPage"]
      }, {
        path: "".concat(src_app_constants_config__WEBPACK_IMPORTED_MODULE_4__["ROUTING_PAGE"].WRITING.LIST_wORD),
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | list-word-list-word-module */
          "list-word-list-word-module").then(__webpack_require__.bind(null,
          /*! ./list-word/list-word.module */
          "./src/app/pages/learn-writing/list-word/list-word.module.ts")).then(function (m) {
            return m.ListWordPageModule;
          });
        }
      }];

      var LearnWritingPageRoutingModule = function LearnWritingPageRoutingModule() {
        _classCallCheck(this, LearnWritingPageRoutingModule);
      };

      LearnWritingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LearnWritingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/learn-writing/learn-writing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/learn-writing/learn-writing.module.ts ***!
      \*************************************************************/

    /*! exports provided: LearnWritingPageModule */

    /***/
    function srcAppPagesLearnWritingLearnWritingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LearnWritingPageModule", function () {
        return LearnWritingPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _learn_writing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./learn-writing-routing.module */
      "./src/app/pages/learn-writing/learn-writing-routing.module.ts");
      /* harmony import */


      var _writing_hira_writing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./writing/hira-writing.module */
      "./src/app/pages/learn-writing/writing/hira-writing.module.ts");
      /* harmony import */


      var _learn_writing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./learn-writing.page */
      "./src/app/pages/learn-writing/learn-writing.page.ts");

      var LearnWritingPageModule = function LearnWritingPageModule() {
        _classCallCheck(this, LearnWritingPageModule);
      };

      LearnWritingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _learn_writing_routing_module__WEBPACK_IMPORTED_MODULE_5__["LearnWritingPageRoutingModule"], _writing_hira_writing_module__WEBPACK_IMPORTED_MODULE_6__["HiraWritingPageModule"]],
        declarations: [_learn_writing_page__WEBPACK_IMPORTED_MODULE_7__["LearnWritingPage"]]
      })], LearnWritingPageModule);
      /***/
    },

    /***/
    "./src/app/pages/learn-writing/learn-writing.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/pages/learn-writing/learn-writing.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLearnWritingLearnWritingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #ffc409;\n}\n\nion-content {\n  --background: linear-gradient(to top, #dfe9f3 0%, white 100%);\n}\n\n.header {\n  background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);\n  color: #fff;\n  padding: 30px 0;\n  text-align: center;\n  border-bottom-left-radius: 40%;\n  border-bottom-right-radius: 40%;\n  position: relative;\n  font-size: 18px;\n}\n\n.header h2 {\n  font-size: 28px;\n}\n\n.header .btn-back {\n  position: absolute;\n  font-size: 24px;\n  top: 10%;\n  left: 10px;\n}\n\n.content-wirting {\n  margin-top: 20px;\n  padding: 16px;\n}\n\n.content-wirting .box-wrap {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.content-wirting .box-wrap .box {\n  background-color: #fff;\n  width: 90%;\n  margin-bottom: 30px !important;\n  text-align: center;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);\n  margin: auto;\n  height: 220px;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.content-wirting .box-wrap .box img {\n  height: 150px;\n}\n\n.content-wirting .box-wrap h3 {\n  font-size: 18px;\n}\n\n.content-wirting .box-wrap h3 span {\n  color: #ff9800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm4td3JpdGluZy9sZWFybi13cml0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2REFBQTtBQUNGOztBQUVBO0VBQ0UsbUVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUFFO0VBQ0UsZUFBQTtBQUVKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUFFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUFJO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFTjs7QUFBTTtFQUNFLGFBQUE7QUFFUjs7QUFFSTtFQUNFLGVBQUE7QUFBTjs7QUFDTTtFQUNFLGNBQUE7QUFDUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXJuLXdyaXRpbmcvbGVhcm4td3JpdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2ZmYzQwOTtcbn1cblxuaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2RmZTlmMyAwJSwgd2hpdGUgMTAwJSk7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTIwZGVnLCAjZmM2MDc2IDAlLCAjZmY5YTQ0IDEwMCUpOztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0MCU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBoMntcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cblxuICAuYnRuLWJhY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdG9wOiAxMCU7XG4gICAgbGVmdDogMTBweDtcbiAgfVxufVxuLmNvbnRlbnQtd2lydGluZyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIC5ib3gtd3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLmJveCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIDtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGhlaWdodDogMjIwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIFxuICAgICAgaW1ne1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIGgze1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgc3BhbntcbiAgICAgICAgY29sb3I6ICNmZjk4MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/learn-writing/learn-writing.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/learn-writing/learn-writing.page.ts ***!
      \***********************************************************/

    /*! exports provided: LearnWritingPage */

    /***/
    function srcAppPagesLearnWritingLearnWritingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LearnWritingPage", function () {
        return LearnWritingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LearnWritingPage = /*#__PURE__*/function () {
        function LearnWritingPage() {
          _classCallCheck(this, LearnWritingPage);
        }

        _createClass(LearnWritingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LearnWritingPage;
      }();

      LearnWritingPage.ctorParameters = function () {
        return [];
      };

      LearnWritingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-learn-writing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./learn-writing.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learn-writing/learn-writing.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./learn-writing.page.scss */
        "./src/app/pages/learn-writing/learn-writing.page.scss"))["default"]]
      })], LearnWritingPage);
      /***/
    },

    /***/
    "./src/app/pages/learn-writing/writing/hira-writing-routing.module.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/learn-writing/writing/hira-writing-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: HiraWritingPageRoutingModule */

    /***/
    function srcAppPagesLearnWritingWritingHiraWritingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HiraWritingPageRoutingModule", function () {
        return HiraWritingPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _hira_writing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./hira-writing.page */
      "./src/app/pages/learn-writing/writing/hira-writing.page.ts");

      var routes = [{
        path: '',
        component: _hira_writing_page__WEBPACK_IMPORTED_MODULE_3__["HiraWritingPage"]
      }];

      var HiraWritingPageRoutingModule = function HiraWritingPageRoutingModule() {
        _classCallCheck(this, HiraWritingPageRoutingModule);
      };

      HiraWritingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HiraWritingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/learn-writing/writing/hira-writing.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/pages/learn-writing/writing/hira-writing.module.ts ***!
      \********************************************************************/

    /*! exports provided: HiraWritingPageModule */

    /***/
    function srcAppPagesLearnWritingWritingHiraWritingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HiraWritingPageModule", function () {
        return HiraWritingPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _hira_writing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hira-writing-routing.module */
      "./src/app/pages/learn-writing/writing/hira-writing-routing.module.ts");
      /* harmony import */


      var _components_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../components/skeleton/skeleton.module */
      "./src/app/components/skeleton/skeleton.module.ts");
      /* harmony import */


      var _hira_writing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./hira-writing.page */
      "./src/app/pages/learn-writing/writing/hira-writing.page.ts");

      var HiraWritingPageModule = function HiraWritingPageModule() {
        _classCallCheck(this, HiraWritingPageModule);
      };

      HiraWritingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _hira_writing_routing_module__WEBPACK_IMPORTED_MODULE_5__["HiraWritingPageRoutingModule"], _components_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_6__["SkeletonModule"]],
        declarations: [_hira_writing_page__WEBPACK_IMPORTED_MODULE_7__["HiraWritingPage"]]
      })], HiraWritingPageModule);
      /***/
    },

    /***/
    "./src/app/pages/learn-writing/writing/hira-writing.page.scss":
    /*!********************************************************************!*\
      !*** ./src/app/pages/learn-writing/writing/hira-writing.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLearnWritingWritingHiraWritingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);\n  --color: #fff;\n}\n\nion-content {\n  --background: linear-gradient(to top, #dfe9f3 0%, white 100%);\n}\n\n.btn-color {\n  position: absolute;\n  right: 10px;\n}\n\n.wrap-word {\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  position: relative;\n}\n\n.wrap-word .box {\n  background-color: #fff;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);\n  width: 60%;\n}\n\n.wrap-word .box .listen {\n  position: absolute;\n  left: 10px;\n  top: 10px;\n  font-size: 30px;\n}\n\n.wrap-word .box .note {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 30px;\n}\n\n.wrap-word .box .life {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  bottom: -8px;\n  left: 50%;\n  transform: translate(-50%);\n  font-size: 26px;\n}\n\n.wrap-word .box .life ion-icon {\n  color: #3880ff;\n}\n\n.wrap-word .box .img {\n  text-align: center;\n}\n\n.wrap-word .box .img img {\n  width: 100%;\n}\n\n.wrap-write {\n  padding: 10px;\n}\n\n.wrap-write .box {\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);\n  height: calc(100vh - 310px);\n  border-radius: 10px;\n  position: relative;\n  background-image: url('bg-write.jpg');\n  background-position: center center;\n  background-repeat: repeat;\n}\n\n.wrap-write .box canvas {\n  height: 100%;\n  width: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm4td3JpdGluZy93cml0aW5nL2hpcmEtd3JpdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrREFBQTtFQUVBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLDZEQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUNFO0VBQ0Usc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQ047O0FBQ0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUNOOztBQUVJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBQU47O0FBQ007RUFDRSxjQUFBO0FBQ1I7O0FBR0k7RUFDRSxrQkFBQTtBQUROOztBQUVNO0VBQ0UsV0FBQTtBQUFSOztBQU1BO0VBQ0UsYUFBQTtBQUhGOztBQUlFO0VBQ0UseUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFJSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUZOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGVhcm4td3JpdGluZy93cml0aW5nL2hpcmEtd3JpdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0yMGRlZywgI2ZjNjA3NiAwJSwgI2ZmOWE0NCAxMDAlKTtcbiAgO1xuICAtLWNvbG9yOiAjZmZmO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2RmZTlmMyAwJSwgd2hpdGUgMTAwJSk7XG59XG5cbi5idG4tY29sb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4ud3JhcC13b3JkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgICB3aWR0aDogNjAlO1xuXG4gICAgLmxpc3RlbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAxMHB4O1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgICAubm90ZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIHRvcDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG5cbiAgICAubGlmZXtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAtOHB4O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6ICMzODgwZmY7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gICAgLmltZyB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLndyYXAtd3JpdGUge1xuICBwYWRkaW5nOiAxMHB4O1xuICAuYm94IHtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMTBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vLi4vYXNzZXRzL3dyaXRpbmcvYmctd3JpdGUuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG5cbiAgICBjYW52YXMge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/learn-writing/writing/hira-writing.page.ts":
    /*!******************************************************************!*\
      !*** ./src/app/pages/learn-writing/writing/hira-writing.page.ts ***!
      \******************************************************************/

    /*! exports provided: HiraWritingPage */

    /***/
    function srcAppPagesLearnWritingWritingHiraWritingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HiraWritingPage", function () {
        return HiraWritingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_word_word_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/word/word.service */
      "./src/app/services/word/word.service.ts");

      var HiraWritingPage = /*#__PURE__*/function () {
        function HiraWritingPage(platform, activateRouter, router, wordService) {
          _classCallCheck(this, HiraWritingPage);

          this.platform = platform;
          this.activateRouter = activateRouter;
          this.router = router;
          this.wordService = wordService;
          this.isLoading = true;
          this.currentColour = '#333';
          this.brushSize = 10;
        }

        _createClass(HiraWritingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.getWordIdByParams();
                      this.getWordById();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getWordIdByParams",
          value: function getWordIdByParams() {
            var _this = this;

            this.activateRouter.params.subscribe(function (data) {
              _this.idWord = data.id;
            });
          }
        }, {
          key: "getWordById",
          value: function getWordById() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.isLoading = true;
                      this.subscribe = this.wordService.getWordById(this.idWord).subscribe(function (data) {
                        _this2.isLoading = false;
                        _this2.word = data;
                        setTimeout(function () {
                          _this2.initCanvasDraw();
                        }, 500);
                      }, function (err) {
                        _this2.wordService.handlerError(err);
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "initCanvasDraw",
          value: function initCanvasDraw() {
            this.canvasElement = this.canvas.nativeElement;
            console.log(this.canvasElement);
            this.canvasElement.width = this.platform.width();
            this.canvasElement.height = this.platform.height() - 290;
          }
        }, {
          key: "handleStart",
          value: function handleStart(ev) {
            this.lastX = ev.touches[0].pageX;
            this.lastY = ev.touches[0].pageY - 290;
          }
        }, {
          key: "changeColour",
          value: function changeColour(color, isdelete) {
            if (isdelete === true) {
              this.initCanvasDraw();
            } else {
              this.brushSize = 10;
            }

            this.currentColour = color;
          }
        }, {
          key: "handleMove",
          value: function handleMove(ev) {
            var ctx = this.canvasElement.getContext('2d');
            var currentX = ev.touches[0].pageX;
            var currentY = ev.touches[0].pageY - 290;
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
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscribe.unsubscribe();
          }
        }]);

        return HiraWritingPage;
      }();

      HiraWritingPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_word_word_service__WEBPACK_IMPORTED_MODULE_4__["WordService"]
        }];
      };

      HiraWritingPage.propDecorators = {
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['canvas']
        }]
      };
      HiraWritingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hira-writing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./hira-writing.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learn-writing/writing/hira-writing.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./hira-writing.page.scss */
        "./src/app/pages/learn-writing/writing/hira-writing.page.scss"))["default"]]
      })], HiraWritingPage);
      /***/
    },

    /***/
    "./src/app/services/word/word.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/word/word.service.ts ***!
      \***********************************************/

    /*! exports provided: WordService */

    /***/
    function srcAppServicesWordWordServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WordService", function () {
        return WordService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _constants_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../constants/api.config */
      "./src/app/constants/api.config.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var WordService = /*#__PURE__*/function () {
        function WordService(http) {
          _classCallCheck(this, WordService);

          this.http = http;
        } //get all word by type


        _createClass(WordService, [{
          key: "getWordByType",
          value: function getWordByType(type) {
            var url = "".concat(_constants_api_config__WEBPACK_IMPORTED_MODULE_2__["apiEndPoints"].word, "?type=").concat(type);

            try {
              return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                return res;
              }));
            } catch (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(err);
            }
          } // get word by id

        }, {
          key: "getWordById",
          value: function getWordById(id) {
            var url = "".concat(_constants_api_config__WEBPACK_IMPORTED_MODULE_2__["apiEndPoints"].word, "/").concat(id);

            try {
              return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                return res;
              }));
            } catch (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(err);
            }
          } // Handler Error

        }, {
          key: "handlerError",
          value: function handlerError(err) {
            if (err.error instanceof Error) {
              console.log("Client-error: ".concat(err.error.message));
            } else {
              console.log("Server-side-error: ".concat(err.status, " - ").concat(err.error));
            }
          }
        }]);

        return WordService;
      }();

      WordService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      };

      WordService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], WordService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-learn-writing-learn-writing-module-es5.js.map