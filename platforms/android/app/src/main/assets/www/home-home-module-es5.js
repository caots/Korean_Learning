(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/angular-progress-bar/__ivy_ngcc__/fesm2015/angular-progress-bar.js":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/angular-progress-bar/__ivy_ngcc__/fesm2015/angular-progress-bar.js ***!
      \*****************************************************************************************/

    /*! exports provided: ProgressBarComponent, ProgressBarModule */

    /***/
    function node_modulesAngularProgressBar__ivy_ngcc__Fesm2015AngularProgressBarJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function () {
        return ProgressBarComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function () {
        return ProgressBarModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      function ProgressBarComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.whichProgress(ctx_r0.progress), "% ");
        }
      }

      function ProgressBarComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.whichProgress(ctx_r1.progress), " ");
        }
      }

      var ProgressBarComponent = /*#__PURE__*/function () {
        function ProgressBarComponent() {
          _classCallCheck(this, ProgressBarComponent);

          // Default color
          this.color = "#488aff";
          this.disabledP = false;
        }
        /**
         * Returns a color for a certain percent
         * @param {?} percent The current progress
         * @return {?}
         */


        _createClass(ProgressBarComponent, [{
          key: "whichColor",
          value: function whichColor(percent) {
            // Get all entries index as an array

            /** @type {?} */
            var k = Object.keys(this.degraded); // Convert string to number

            k.forEach(function (e, i) {
              return k[i] = +e;
            }); // Sort them by value

            k = k.sort(function (a, b) {
              return a - b;
            }); // Percent as number

            /** @type {?} */

            var p = +percent // Set last by default as the first occurrence
            ; // Set last by default as the first occurrence

            /** @type {?} */

            var last = k[0]; // Foreach keys 

            var _iterator = _createForOfIteratorHelper(k),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var val = _step.value;

                // if current val is < than percent
                if (val < p) {
                  last = val;
                } // if val >= percent then the val that we could show has been reached
                else if (val >= p - 1) {
                    return this.degraded[last];
                  }
              } // if its the last one return the last

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return this.degraded[last];
          }
          /**
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "whichProgress",
          value: function whichProgress(progress) {
            try {
              return Math.round(+progress * 100) / 100;
            } catch (_a) {
              return progress;
            }
          }
        }]);

        return ProgressBarComponent;
      }();

      ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
        return new (t || ProgressBarComponent)();
      };

      ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProgressBarComponent,
        selectors: [["progress-bar"]],
        inputs: {
          color: "color",
          disabledP: ["disable-percentage", "disabledP"],
          progress: "progress",
          degraded: ["color-degraded", "degraded"]
        },
        decls: 4,
        vars: 6,
        consts: [[1, "progress-outer"], [1, "progress-inner"], [4, "ngIf"]],
        template: function ProgressBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgressBarComponent_ng_container_2_Template, 2, 1, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProgressBarComponent_ng_container_3_Template, 2, 1, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.whichProgress(ctx.progress) + "%")("background-color", ctx.degraded == null ? ctx.color : ctx.whichColor(ctx.progress));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.disabledP);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.disabledP);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".progress-outer[_ngcontent-%COMP%] {\n          width: 96%;\n          margin: 10px 2%;\n          padding: 3px;\n          background-color: #f4f4f4;\n          border: 1px solid #dcdcdc;\n          color: #fff;\n          border-radius: 20px;\n          text-align: center;\n        }\n        .progress-inner[_ngcontent-%COMP%] {\n          min-width: 15%;\n          min-height:18px;\n          white-space: nowrap;\n          overflow: hidden;\n          padding: 0px;\n          border-radius: 20px;"]
      });
      /** @nocollapse */

      ProgressBarComponent.ctorParameters = function () {
        return [];
      };

      ProgressBarComponent.propDecorators = {
        progress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['progress']
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['color']
        }],
        degraded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['color-degraded']
        }],
        disabledP: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['disable-percentage']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'progress-bar',
            template: "\n  <div class=\"progress-outer\">\n    <div class=\"progress-inner\" [style.width]=\"whichProgress(progress) + '%'\" [style.background-color]=\"degraded == null ? color : whichColor(progress)\">\n      <ng-container *ngIf=\"!disabledP\"> \n        {{whichProgress(progress)}}%\n      </ng-container>\n      <ng-container *ngIf=\"disabledP\"> \n        {{whichProgress(progress)}}\n      </ng-container>\n    </div>\n  </div>\n  ",
            styles: ["\n        .progress-outer {\n          width: 96%;\n          margin: 10px 2%;\n          padding: 3px;\n          background-color: #f4f4f4;\n          border: 1px solid #dcdcdc;\n          color: #fff;\n          border-radius: 20px;\n          text-align: center;\n        }\n        .progress-inner {\n          min-width: 15%;\n          min-height:18px;\n          white-space: nowrap;\n          overflow: hidden;\n          padding: 0px;\n          border-radius: 20px;\n  "]
          }]
        }], function () {
          return [];
        }, {
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['color']
          }],
          disabledP: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['disable-percentage']
          }],
          progress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['progress']
          }],
          degraded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['color-degraded']
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ProgressBarModule = function ProgressBarModule() {
        _classCallCheck(this, ProgressBarModule);
      };

      ProgressBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProgressBarModule
      });
      ProgressBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProgressBarModule_Factory(t) {
          return new (t || ProgressBarModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProgressBarModule, {
          declarations: function declarations() {
            return [ProgressBarComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [ProgressBarComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [ProgressBarComponent],
            exports: [ProgressBarComponent],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1wcm9ncmVzcy1iYXIuanMiLCJzb3VyY2VzIjpbIm5nOi9hbmd1bGFyLXByb2dyZXNzLWJhci9saWIvYW5ndWxhci1wcm9ncmVzcy1iYXIuY29tcG9uZW50LnRzIiwibmc6L2FuZ3VsYXItcHJvZ3Jlc3MtYmFyL2xpYi9hbmd1bGFyLXByb2dyZXNzLWJhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1Bc0NhLG9CQUFvQixPQVNqQzt5Q0FFRTs7Q0FBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsU0FDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFDeEI7Ozs7Y0FNRDtRQUFVLENBQUMsT0FBZTs7a0NBRXBCLENBQUMsR0FBZSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7O3lCQUU5QyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFL0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7RUFBRyxDQUFDLENBQUMsQ0FBQzs7Y0FFeEIsQ0FBQztFQUFHLENBQUMsT0FBTzs7OztnQkFFWixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQywzQkFuRWpCLE1Bc0NhLG9CQUFvQjtBQUNqQyxJQVFBO2FBc0JFLEtBQUksSUFBSSx0QkFyQlY7QUFxQmEsSUFBSSxDQUFDLEVBQUMsUEFwQmIsUUFBSixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztBQUN6QixRQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0tBcUJyQixMQXBCSixLQUFDO0dBb0JNLEdBQUcsTkFuQlY7Q0FtQmEsQ0FBQyxFQUFDLGtCQUNULElBQUksR0FBRyxHQUFHLENBQUMsakNBbEJkO0VBbUJFLEZB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QjtBQUFPLHdCQUM3QixLQUFLLFNBQUMsb0JBQW9CO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQztBQUFDO0FBQUk7QUFJbkM7QUFNdUI7QUN0RC9CLE1BYWEsaUJBQWlCO0FBQUc7NkNBUmhDLFFBQVEsU0FBQztDQUNSLE9BQU8sRUFBRSxzQkFDUCxZQUFZLGtCQUNiLGtCQUNELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDLGtCQUNwQyxPQUFPLEVBQUUsQ0FBQztVQUFvQixDQUFDO0lBQy9CLE9BQU8sRUFBRSxDQUFDO3FCQUFzQixDQUFDLGNBQ2xDOzs7Ozs7Ozs7OzswQkFDSTtBQUFDO0FBQUM7QUFBSTtBQUFrQztBQUFxRztBQUFJO0FBQUM7QUFBSTtBQUFrQztBQUFxRztBQUFJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjpcclxuICAgICAgJ3Byb2dyZXNzLWJhcicsXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICAgIC5wcm9ncmVzcy1vdXRlciB7XHJcbiAgICAgICAgICB3aWR0aDogOTYlO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDIlO1xyXG4gICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9ncmVzcy1pbm5lciB7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDE1JTtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6MThweDtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBgXSxcclxuICB0ZW1wbGF0ZTpcclxuICBgXHJcbiAgPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3Mtb3V0ZXJcXFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3MtaW5uZXJcXFwiIFtzdHlsZS53aWR0aF09XFxcIndoaWNoUHJvZ3Jlc3MocHJvZ3Jlc3MpICsgJyUnXFxcIiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XFxcImRlZ3JhZGVkID09IG51bGwgPyBjb2xvciA6IHdoaWNoQ29sb3IocHJvZ3Jlc3MpXFxcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFkaXNhYmxlZFBcIj4gXHJcbiAgICAgICAge3t3aGljaFByb2dyZXNzKHByb2dyZXNzKX19JVxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRpc2FibGVkUFwiPiBcclxuICAgICAgICB7e3doaWNoUHJvZ3Jlc3MocHJvZ3Jlc3MpfX1cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckNvbXBvbmVudCB7XHJcblxyXG4vKiogSW5wdXRzICoqL1xyXG4gIEBJbnB1dCgncHJvZ3Jlc3MnKSBwcm9ncmVzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgnY29sb3InKSBjb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgnY29sb3ItZGVncmFkZWQnKSBkZWdyYWRlZDogYW55O1xyXG4gIEBJbnB1dCgnZGlzYWJsZS1wZXJjZW50YWdlJykgZGlzYWJsZWRQOiBib29sZWFuO1xyXG5cclxuXHJcbmNvbnN0cnVjdG9yKCkge1xyXG4gIC8vIERlZmF1bHQgY29sb3JcclxuICB0aGlzLmNvbG9yID0gXCIjNDg4YWZmXCI7XHJcbiAgdGhpcy5kaXNhYmxlZFAgPSBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBjb2xvciBmb3IgYSBjZXJ0YWluIHBlcmNlbnRcclxuICogQHBhcmFtIHBlcmNlbnQgVGhlIGN1cnJlbnQgcHJvZ3Jlc3NcclxuICovXHJcbndoaWNoQ29sb3IocGVyY2VudDogc3RyaW5nKXtcclxuICAvLyBHZXQgYWxsIGVudHJpZXMgaW5kZXggYXMgYW4gYXJyYXlcclxuICBsZXQgazogQXJyYXk8YW55PiA9IE9iamVjdC5rZXlzKHRoaXMuZGVncmFkZWQpO1xyXG4gIC8vIENvbnZlcnQgc3RyaW5nIHRvIG51bWJlclxyXG4gIGsuZm9yRWFjaCgoZSwgaSkgPT4ga1tpXSA9ICtlKTtcclxuICAvLyBTb3J0IHRoZW0gYnkgdmFsdWVcclxuICBrID0gay5zb3J0KChhLCBiKSA9PiBhIC0gYik7XHJcbiAgLy8gUGVyY2VudCBhcyBudW1iZXJcclxuICBsZXQgcCA9ICtwZXJjZW50XHJcbiAgLy8gU2V0IGxhc3QgYnkgZGVmYXVsdCBhcyB0aGUgZmlyc3Qgb2NjdXJyZW5jZVxyXG4gIGxldCBsYXN0ID0ga1swXTtcclxuICAvLyBGb3JlYWNoIGtleXMgXHJcbiAgZm9yKGxldCB2YWwgb2Ygayl7XHJcbiAgICAvLyBpZiBjdXJyZW50IHZhbCBpcyA8IHRoYW4gcGVyY2VudFxyXG4gICAgaWYodmFsIDwgcCl7XHJcbiAgICAgIGxhc3QgPSB2YWw7XHJcbiAgICB9XHJcbiAgICAvLyBpZiB2YWwgPj0gcGVyY2VudCB0aGVuIHRoZSB2YWwgdGhhdCB3ZSBjb3VsZCBzaG93IGhhcyBiZWVuIHJlYWNoZWRcclxuICAgIGVsc2UgaWYodmFsID49IHAgLTEpe1xyXG4gICAgICByZXR1cm4gdGhpcy5kZWdyYWRlZFtsYXN0XTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gaWYgaXRzIHRoZSBsYXN0IG9uZSByZXR1cm4gdGhlIGxhc3RcclxuICByZXR1cm4gdGhpcy5kZWdyYWRlZFtsYXN0XTtcclxufVxyXG5cclxud2hpY2hQcm9ncmVzcyhwcm9ncmVzczogc3RyaW5nKXtcclxuICB0cnl7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgrcHJvZ3Jlc3MgKiAxMDApIC8gMTAwO1xyXG4gIH1cclxuICBjYXRjaHtcclxuICAgIHJldHVybiBwcm9ncmVzcztcclxuICB9XHJcbn1cclxufSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByb2dyZXNzQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyLXByb2dyZXNzLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtQcm9ncmVzc0JhckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1Byb2dyZXNzQmFyQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyTW9kdWxlIHsgfSJdfQ==

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/topic-card/topic-card.component.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/topic-card/topic-card.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsTopicCardTopicCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"topic\">\n  <div class=\"content\">\n    <div class=\"icon-topic\">\n      <ion-icon class=\"active\" name=\"rocket-outline\"></ion-icon>&nbsp;\n      <ion-icon name=\"rocket-outline\"></ion-icon>&nbsp;\n      <ion-icon name=\"rocket-outline\"></ion-icon>\n    </div>\n    <p class=\"title\">{{topic.title}}</p>\n    <p class=\"sub\">\n      <span>{{topic.subTitle}}</span>\n      <span>{{topic.timeLearn}}</span>\n    </p>\n    <ion-icon name=\"share-social-outline\"></ion-icon>\n  </div>\n  <div class=\"img\">\n    <img [src]=\"topic.image\" alt=\"\" />\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-content *ngIf=\"!isLoading\">\n  <div class=\"header\">\n    <h2>毎日韓国語を学ぶ</h2>\n  </div>\n\n  <ion-card>        \n    <ion-card-content style=\"font-size: 13px;\">      \n      私たちはあなたを愛しています、私たちは常に可能な限り最高の体験を提供するために一生懸命働いています ❤️  \n      </ion-card-content>      \n  </ion-card>\n\n  <div class=\"ion-padding\" scroll-y=\"false\">\n    <ion-slides [options]=\"slideOpts\">\n      <ion-slide>\n        <div class=\"slide\">\n          <span class=\"label-new\">新しい</span>\n          <img src=\"../../../assets/slides/slide-1.png\" />\n          <p class=\"text\">Reading 1</p>\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n        <div class=\"slide\">\n          <span class=\"label-new\">新しい</span>\n          <img src=\"../../../assets/slides/slide-2.png\" />\n          <p class=\"text\">Reading 2</p>\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"../../../assets/slides/slide-3.png\" />\n          <p class=\"text\">Reading 3</p>\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"../../../assets/slides/slide-4.png\" />\n          <p class=\"text\">Reading 4</p>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <div class=\"ion-padding\" scroll-y=\"false\">\n    <ion-slides [options]=\"slideOpts\">\n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"../../../assets/slides/slide-5.png\" />\n          <p class=\"text\">listening 1</p>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <div class=\"card-topic\">\n    <h3 style=\"font-size: 18px;\">Topic for you</h3>\n    <app-topic-card\n      [routerLink]=\"['/learn-writing']\" *ngFor=\"let topic of topics\"\n      [topic]=\"topic\"\n    ></app-topic-card>\n  </div>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      refreshingSpinner=\"circles\"\n    >\n    </ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n\n<ion-content *ngIf=\"isLoading\">\n  <app-skeleton></app-skeleton>\n</ion-content> -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title> Recoginze Image </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding ion-text-center\">\n  <h5 *ngIf=\"fileImageWord\">Cropped Image</h5>\n\n  <img *ngIf=\"fileImageWord\" class=\"image\" [src]=\"fileImageWord\" />\n  <img *ngIf=\"!fileImageWord\" class=\"image\" [src]=\"defaultImage\" />\n\n  <ion-button class=\"ion-margin-top\" (click)=\"selectImage()\">\n    Pick Image to Crop\n  </ion-button>\n\n  <ion-button class=\"ion-margin-top\" (click)=\"recognizeImage()\">\n    Recognize Image\n  </ion-button>\n  <progress-bar\n    [progress]=\"progress\"\n    *ngIf=\"!result\"\n    [color-degraded]=\"{'0': '#fd8c8e',  '15': '#f9c3d3', '25': '#00cbcb'}\"\n  ></progress-bar>\n  <div\n    style=\"margin-top: 30px; text-align: left\"\n    *ngIf=\"result\"\n    [innerHTML]=\"result\"\n  ></div>\n  <div style=\"margin-top: 30px\" *ngIf=\"!result\">No text result.</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/components/topic-card/topic-card.component.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/components/topic-card/topic-card.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsTopicCardTopicCardComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".topic {\n  margin: 20px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);\n  border-radius: 12px;\n}\n.topic .content {\n  padding: 0 10px;\n  z-index: 2;\n}\n.topic .content p {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.topic .content p.title {\n  color: #2196f3;\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n.topic .content p.sub {\n  font-size: 13px;\n  margin-top: 5px;\n}\n.topic .content p.sub span {\n  color: gray;\n  padding-right: 8px;\n}\n.topic .img img {\n  width: 100%;\n  height: 180px;\n}\nion-icon {\n  color: gray;\n  font-size: 16px;\n}\n.active {\n  color: #ff9800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3BpYy1jYXJkL3RvcGljLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBQ0o7QUFDSTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQUNOO0FBQ0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ047QUFDSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQ047QUFDSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUNOO0FBR0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUROO0FBTUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUhGO0FBTUE7RUFDRSxjQUFBO0FBSEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvcGljLWNhcmQvdG9waWMtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BpYyB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuXG4gIC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgei1pbmRleDogMjtcblxuICAgIHAge1xuICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIH1cbiAgICBwLnRpdGxlIHtcbiAgICAgIGNvbG9yOiAjMjE5NmYzO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIHAuc3ViIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG4gICAgcC5zdWIgc3BhbiB7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICB9XG4gIH1cbiAgLmltZyB7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6ICNmZjk4MDA7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/topic-card/topic-card.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/components/topic-card/topic-card.component.ts ***!
      \***************************************************************/

    /*! exports provided: TopicCardComponent */

    /***/
    function srcAppComponentsTopicCardTopicCardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopicCardComponent", function () {
        return TopicCardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TopicCardComponent = /*#__PURE__*/function () {
        function TopicCardComponent(renderer) {
          _classCallCheck(this, TopicCardComponent);

          this.renderer = renderer;
        }

        _createClass(TopicCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }]);

        return TopicCardComponent;
      }();

      TopicCardComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      };

      TopicCardComponent.propDecorators = {
        topic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['topic']
        }]
      };
      TopicCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topic-card',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./topic-card.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/topic-card/topic-card.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./topic-card.component.scss */
        "./src/app/components/topic-card/topic-card.component.scss"))["default"]]
      })], TopicCardComponent);
      /***/
    },

    /***/
    "./src/app/components/topic-card/topic-card.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/components/topic-card/topic-card.module.ts ***!
      \************************************************************/

    /*! exports provided: TopicCardModule */

    /***/
    function srcAppComponentsTopicCardTopicCardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopicCardModule", function () {
        return TopicCardModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _topic_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./topic-card.component */
      "./src/app/components/topic-card/topic-card.component.ts");

      var components = [_topic_card_component__WEBPACK_IMPORTED_MODULE_4__["TopicCardComponent"]];

      var TopicCardModule = function TopicCardModule() {
        _classCallCheck(this, TopicCardModule);
      };

      TopicCardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        declarations: [].concat(components),
        exports: [].concat(components)
      })], TopicCardModule);
      /***/
    },

    /***/
    "./src/app/pages/home/home-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/home/home-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/pages/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/home/home.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.module.ts ***!
      \*******************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var angular_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-progress-bar */
      "./node_modules/angular-progress-bar/__ivy_ngcc__/fesm2015/angular-progress-bar.js");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/pages/home/home-routing.module.ts");
      /* harmony import */


      var _components_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/skeleton/skeleton.module */
      "./src/app/components/skeleton/skeleton.module.ts");
      /* harmony import */


      var _components_topic_card_topic_card_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../components/topic-card/topic-card.module */
      "./src/app/components/topic-card/topic-card.module.ts");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/pages/home/home.page.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"], _components_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_7__["SkeletonModule"], _components_topic_card_topic_card_module__WEBPACK_IMPORTED_MODULE_8__["TopicCardModule"], angular_progress_bar__WEBPACK_IMPORTED_MODULE_5__["ProgressBarModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_9__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/pages/home/home.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".image-container {\n  min-height: 200px;\n  background-size: cover;\n}\n\n@media (min-width: 0px) {\n  .images {\n    -moz-column-count: 2;\n         column-count: 2;\n  }\n}\n\n@media (min-width: 420px) {\n  .images {\n    -moz-column-count: 3;\n         column-count: 3;\n  }\n}\n\n@media (min-width: 720px) {\n  .images {\n    -moz-column-count: 4;\n         column-count: 4;\n  }\n}\n\n.one-image {\n  margin: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0REE7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0FBM0RGOztBQThEQTtFQUNFO0lBQ0Usb0JBQUE7U0FBQSxlQUFBO0VBM0RGO0FBQ0Y7O0FBOERBO0VBQ0U7SUFDRSxvQkFBQTtTQUFBLGVBQUE7RUE1REY7QUFDRjs7QUErREE7RUFDRTtJQUNFLG9CQUFBO1NBQUEsZUFBQTtFQTdERjtBQUNGOztBQWdFQTtFQUNFLFdBQUE7QUE5REYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLnN3aXBlci1zbGlkZSBpbWcge1xuLy8gICBtYXgtd2lkdGg6IDgwJTtcbi8vICAgbWFyZ2luOiAyMHB4IDA7XG4vLyAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuLy8gfVxuXG4vLyAuaGVhZGVyIHtcbi8vICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0yMGRlZywgI2ZjNjA3NiAwJSwgI2ZmOWE0NCAxMDAlKTs7XG4vLyAgIGNvbG9yOiAjZmZmO1xuLy8gICBwYWRkaW5nOiA1MHB4IDA7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNDAlO1xuLy8gICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNDAlO1xuLy8gICBmb250LXNpemU6IDE4cHg7XG4vLyB9XG5cbi8vIGlvbi1zbGlkZSB7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgbWFyZ2luOiAwIDEwcHggMCAwO1xuLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICBoZWlnaHQ6IDIwMHB4O1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjZmZjNDA5O1xuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4vLyAgIC5zbGlkZSAubGFiZWwtbmV3IHtcbi8vICAgICB0b3A6IDEwcHg7XG4vLyAgICAgcGFkZGluZzogNXB4IDE1cHg7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMzOGMyYjc7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgICBsZWZ0OiAxMHB4O1xuLy8gICAgIGZvbnQtc2l6ZTogMTNweDtcbi8vICAgICBjb2xvcjogI2ZmZjtcbi8vICAgfVxuXG4vLyAgIC50ZXh0IHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDtcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xuLy8gICAgIGJvdHRvbTogLTEzcHg7XG4vLyAgICAgY29sb3I6ICNmZmY7XG4vLyAgICAgbGVmdDogNTAlO1xuLy8gICAgIGZvbnQtc2l6ZTogMTNweDtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4vLyAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuLy8gICB9XG4vLyB9XG5cbi8vIGgzIHtcbi8vICAgY29sb3I6ICNmZjk4MDA7XG4vLyAgIGZvbnQtc2l6ZTogMjRweDtcbi8vICAgbWFyZ2luLXRvcDogMDtcbi8vICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbi8vIH1cblxuLy8gLmNhcmQtdG9waWMge1xuLy8gICBwYWRkaW5nOiAxNnB4O1xuLy8gfVxuLmltYWdlLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuIFxuQG1lZGlhIChtaW4td2lkdGg6IDBweCkge1xuICAuaW1hZ2VzIHtcbiAgICBjb2x1bW4tY291bnQ6IDI7XG4gIH1cbn1cbiBcbkBtZWRpYSAobWluLXdpZHRoOiA0MjBweCkge1xuICAuaW1hZ2VzIHtcbiAgICBjb2x1bW4tY291bnQ6IDM7XG4gIH1cbn1cbiBcbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xuICAuaW1hZ2VzIHtcbiAgICBjb2x1bW4tY291bnQ6IDQ7XG4gIH1cbn1cbiBcbi5vbmUtaW1hZ2Uge1xuICBtYXJnaW46IDJweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/home/home.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/home/home.page.ts ***!
      \*****************************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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


      var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/Camera/ngx */
      "./node_modules/@ionic-native/Camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/crop/ngx */
      "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var tesseract_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tesseract.js */
      "./node_modules/tesseract.js/src/index.js");
      /* harmony import */


      var tesseract_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _services_commom_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/commom.service */
      "./src/app/services/commom.service.ts");
      /* harmony import */


      var _constants_api_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../constants/api.config */
      "./src/app/constants/api.config.ts");
      /* harmony import */


      var _assets_images_abc_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../../assets/images/abc.png */
      "./src/assets/images/abc.png");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(camera, crop, file, commomService, actionSheetController) {
          _classCallCheck(this, HomePage);

          this.camera = camera;
          this.crop = crop;
          this.file = file;
          this.commomService = commomService;
          this.actionSheetController = actionSheetController;
          this.croppedImagePath = "";
          this.defaultImage = "assets/placeholder.png";
          this.isLoading = false;
          this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
          };
          this.workerReady = false;
          this.result = '';
          this.progress = 0;
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.loadWorker();

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "pickImage",
          value: function pickImage(sourceType) {
            var _this = this;

            var options = {
              quality: 100,
              sourceType: sourceType,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this.cropImage(imageData);
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "selectImage",
          value: function selectImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.actionSheetController.create({
                        header: "Select Image source",
                        buttons: [{
                          text: 'Load from Library',
                          handler: function handler() {
                            _this2.pickImage(_this2.camera.PictureSourceType.PHOTOLIBRARY);
                          }
                        }, {
                          text: 'Use Camera',
                          handler: function handler() {
                            _this2.pickImage(_this2.camera.PictureSourceType.CAMERA);
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      actionSheet = _context2.sent;
                      _context2.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "cropImage",
          value: function cropImage(fileUrl) {
            var _this3 = this;

            this.crop.crop(fileUrl, {
              quality: 50
            }).then(function (newPath) {
              _this3.showCroppedImage(newPath.split('?')[0]);
            }, function (error) {
              alert('Error cropping image' + error);
            });
          }
        }, {
          key: "loadWorker",
          value: function loadWorker() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.worker = Object(tesseract_js__WEBPACK_IMPORTED_MODULE_6__["createWorker"])({
                        logger: function logger(progress) {
                          _this4.progress = Math.ceil(progress.progress * 100);
                          console.log(progress.progress);
                        }
                      });
                      _context3.next = 3;
                      return this.worker.load();

                    case 3:
                      _context3.next = 5;
                      return this.worker.loadLanguage('eng');

                    case 5:
                      _context3.next = 7;
                      return this.worker.initialize('eng');

                    case 7:
                      this.workerReady = true;

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "showCroppedImage",
          value: function showCroppedImage(ImagePath) {
            var _this5 = this;

            this.isLoading = true;
            this.fileImageWord = null;
            this.result = null;
            var copyPath = ImagePath;
            var splitPath = copyPath.split('/');
            var imageName = splitPath[splitPath.length - 1];
            var filePath = ImagePath.split(imageName)[0];
            this.file.readAsDataURL(filePath, imageName).then(function (base64) {
              _this5.croppedImagePath = base64;
              _this5.isLoading = false;

              var file = _this5.dataURIToBlob(base64);

              _this5.commomService.uploadImageToServer(file).subscribe(function (data) {
                _this5.fileImageWord = _constants_api_config__WEBPACK_IMPORTED_MODULE_8__["apiEndPointAws"].images + data.filename;
              }, function (err) {
                console.log(err);
              });
            }, function (error) {
              alert('Error in showing image' + error);
              _this5.isLoading = false;
            });
          }
        }, {
          key: "dataURIToBlob",
          value: function dataURIToBlob(dataURI) {
            var splitDataURI = dataURI.split(',');
            var byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
            var mimeString = splitDataURI[0].split(':')[1].split(';')[0];
            var ia = new Uint8Array(byteString.length);

            for (var i = 0; i < byteString.length; i++) {
              ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ia], {
              type: mimeString
            });
          }
        }, {
          key: "recognizeImage",
          value: function recognizeImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              var data;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.progress = 0;
                      console.log(this.fileImageWord);
                      _context4.next = 4;
                      return this.worker.recognize(this.fileImageWord);

                    case 4:
                      data = _context4.sent;
                      _context4.next = 7;
                      return data.data.lines.map(function (line) {
                        _this6.result += "<p>".concat(line.text, "</p>");
                      });

                    case 7:
                      console.log(data.data);
                      _context4.next = 10;
                      return this.worker.terminate();

                    case 10:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]
        }, {
          type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_4__["Crop"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"]
        }, {
          type: _services_commom_service__WEBPACK_IMPORTED_MODULE_7__["CommomService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/pages/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    },

    /***/
    "./src/assets/images/abc.png":
    /*!***********************************!*\
      !*** ./src/assets/images/abc.png ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function srcAssetsImagesAbcPng(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = __webpack_require__.p + "abc.png";
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map