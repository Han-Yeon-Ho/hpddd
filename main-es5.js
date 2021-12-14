function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'HBDDD';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [[1, "app-wrapper"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_router_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.router.module */
    "./src/app/app.router.module.ts");
    /* harmony import */


    var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/main/main.component */
    "./src/app/pages/main/main.component.ts");
    /* harmony import */


    var _pages_gift_gift_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/gift/gift.component */
    "./src/app/pages/gift/gift.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _pages_letter_letter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/letter/letter.component */
    "./src/app/pages/letter/letter.component.ts");
    /* harmony import */


    var _pages_camera_camera_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/camera/camera.component */
    "./src/app/pages/camera/camera.component.ts");
    /* harmony import */


    var ngx_webcam__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-webcam */
    "./node_modules/ngx-webcam/__ivy_ngcc__/fesm2015/ngx-webcam.js");
    /* harmony import */


    var _pages_main_img_main_img_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/main-img/main-img.component */
    "./src/app/pages/main-img/main-img.component.ts");
    /* harmony import */


    var _pages_hbd_hbd_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/hbd/hbd.component */
    "./src/app/pages/hbd/hbd.component.ts");
    /* harmony import */


    var ngx_audio_player__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-audio-player */
    "./node_modules/ngx-audio-player/__ivy_ngcc__/fesm2015/ngx-audio-player.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_router_module__WEBPACK_IMPORTED_MODULE_3__["AppRouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], ngx_webcam__WEBPACK_IMPORTED_MODULE_10__["WebcamModule"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_13__["NgxAudioPlayerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"]], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _pages_gift_gift_component__WEBPACK_IMPORTED_MODULE_5__["GiftComponent"], _pages_letter_letter_component__WEBPACK_IMPORTED_MODULE_8__["LetterComponent"], _pages_camera_camera_component__WEBPACK_IMPORTED_MODULE_9__["CameraComponent"], _pages_main_img_main_img_component__WEBPACK_IMPORTED_MODULE_11__["MainImgComponent"], _pages_hbd_hbd_component__WEBPACK_IMPORTED_MODULE_12__["HbdComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], ngx_webcam__WEBPACK_IMPORTED_MODULE_10__["WebcamModule"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_13__["NgxAudioPlayerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"]],
        exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _pages_gift_gift_component__WEBPACK_IMPORTED_MODULE_5__["GiftComponent"], _pages_letter_letter_component__WEBPACK_IMPORTED_MODULE_8__["LetterComponent"], _pages_camera_camera_component__WEBPACK_IMPORTED_MODULE_9__["CameraComponent"], _pages_main_img_main_img_component__WEBPACK_IMPORTED_MODULE_11__["MainImgComponent"], _pages_hbd_hbd_component__WEBPACK_IMPORTED_MODULE_12__["HbdComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_router_module__WEBPACK_IMPORTED_MODULE_3__["AppRouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], ngx_webcam__WEBPACK_IMPORTED_MODULE_10__["WebcamModule"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_13__["NgxAudioPlayerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"]],
          exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.router.module.ts":
  /*!**************************************!*\
    !*** ./src/app/app.router.module.ts ***!
    \**************************************/

  /*! exports provided: AppRouterModule */

  /***/
  function srcAppAppRouterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRouterModule", function () {
      return AppRouterModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_gift_gift_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages/gift/gift.component */
    "./src/app/pages/gift/gift.component.ts");
    /* harmony import */


    var _pages_letter_letter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/letter/letter.component */
    "./src/app/pages/letter/letter.component.ts");
    /* harmony import */


    var _pages_camera_camera_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/camera/camera.component */
    "./src/app/pages/camera/camera.component.ts");
    /* harmony import */


    var _pages_main_img_main_img_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/main-img/main-img.component */
    "./src/app/pages/main-img/main-img.component.ts");
    /* harmony import */


    var _pages_hbd_hbd_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/hbd/hbd.component */
    "./src/app/pages/hbd/hbd.component.ts");

    var AppRoutes = [{
      path: '',
      redirectTo: '/main',
      pathMatch: 'full'
    }, {
      path: 'main',
      component: _pages_main_img_main_img_component__WEBPACK_IMPORTED_MODULE_4__["MainImgComponent"]
    }, {
      path: 'gift',
      component: _pages_gift_gift_component__WEBPACK_IMPORTED_MODULE_1__["GiftComponent"]
    }, {
      path: 'letter',
      component: _pages_letter_letter_component__WEBPACK_IMPORTED_MODULE_2__["LetterComponent"]
    }, {
      path: 'camera',
      component: _pages_camera_camera_component__WEBPACK_IMPORTED_MODULE_3__["CameraComponent"]
    }, {
      path: 'hbd',
      component: _pages_hbd_hbd_component__WEBPACK_IMPORTED_MODULE_5__["HbdComponent"]
    }];

    var AppRouterModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(AppRoutes, {
      useHash: true
    });
    /***/

  },

  /***/
  "./src/app/pages/camera/camera.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/camera/camera.component.ts ***!
    \**************************************************/

  /*! exports provided: CameraComponent */

  /***/
  function srcAppPagesCameraCameraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraComponent", function () {
      return CameraComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../main/main.component */
    "./src/app/pages/main/main.component.ts");
    /* harmony import */


    var ngx_webcam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-webcam */
    "./node_modules/ngx-webcam/__ivy_ngcc__/fesm2015/ngx-webcam.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CameraComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " 2021.12.15 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \uBC30\uC720\uB77C \uC0DD\uC77C \uAE30\uB150 \uD83C\uDF82 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.webcamImage.imageAsDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var CameraComponent =
    /*#__PURE__*/
    function () {
      function CameraComponent() {
        _classCallCheck(this, CameraComponent);

        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // latest snapshot

        this.webcamImage = null;
      }

      _createClass(CameraComponent, [{
        key: "triggerSnapshot",
        value: function triggerSnapshot() {
          var _this = this;

          this.seconds = 3;
          setTimeout(function () {
            _this.seconds = 2;
            setTimeout(function () {
              _this.seconds = 1;
              setTimeout(function () {
                _this.trigger.next();

                _this.seconds = null;
              }, 1000);
            }, 1000);
          }, 1000);
        }
      }, {
        key: "handleImage",
        value: function handleImage(webcamImage) {
          console.info("received webcam image", webcamImage);
          this.webcamImage = webcamImage;
        }
      }, {
        key: "triggerObservable",
        get: function get() {
          return this.trigger.asObservable();
        }
      }]);

      return CameraComponent;
    }();

    CameraComponent.ɵfac = function CameraComponent_Factory(t) {
      return new (t || CameraComponent)();
    };

    CameraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CameraComponent,
      selectors: [["app-camera"]],
      decls: 11,
      vars: 3,
      consts: [[2, "text-align", "center"], [2, "margin-top", "40px"], [3, "trigger", "imageCapture"], ["id", "snapshotBtn", 3, "click"], ["style", "background-color: white; width: 650px; height: 550px; padding: 13px; display: inline-block;", 4, "ngIf"], [2, "background-color", "white", "width", "650px", "height", "550px", "padding", "13px", "display", "inline-block"], [3, "src"], [1, "font"]],
      template: function CameraComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "webcam", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCapture", function CameraComponent_Template_webcam_imageCapture_5_listener($event) {
            return ctx.handleImage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CameraComponent_Template_button_click_7_listener() {
            return ctx.triggerSnapshot();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\uD83D\uDCF8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CameraComponent_div_10_Template, 6, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.seconds);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("trigger", ctx.triggerObservable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.webcamImage);
        }
      },
      directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], ngx_webcam__WEBPACK_IMPORTED_MODULE_3__["WebcamComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["button[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    border: none;\r\n    background: none;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    font-family: 'LotteMartHappy';\r\n    font-size: 20px;\r\n}\r\n.font[_ngcontent-%COMP%]{\r\n    font-family: 'LotteMartHappy';\r\n    margin-top: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FtZXJhL2NhbWVyYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CO0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FtZXJhL2NhbWVyYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5we1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb3R0ZU1hcnRIYXBweSc7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5mb250e1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb3R0ZU1hcnRIYXBweSc7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CameraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-camera',
          templateUrl: './camera.component.html',
          styleUrls: ['./camera.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dialog/dialog.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/dialog/dialog.component.ts ***!
    \**************************************************/

  /*! exports provided: DialogOverviewExampleDialog */

  /***/
  function srcAppPagesDialogDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function () {
      return DialogOverviewExampleDialog;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var DialogOverviewExampleDialog =
    /*#__PURE__*/
    function () {
      function DialogOverviewExampleDialog(dialogRef, data) {
        _classCallCheck(this, DialogOverviewExampleDialog);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(DialogOverviewExampleDialog, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.data);
        }
      }]);

      return DialogOverviewExampleDialog;
    }();

    DialogOverviewExampleDialog.ɵfac = function DialogOverviewExampleDialog_Factory(t) {
      return new (t || DialogOverviewExampleDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    DialogOverviewExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogOverviewExampleDialog,
      selectors: [["app-dialog"]],
      decls: 7,
      vars: 1,
      template: function DialogOverviewExampleDialog_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \uC120\uBB3C\uC740....... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \uB3D9\uC6D0\uC774\uC758 \uB530\uBD09\uC785\uB2C8\uB2E4 \uD83D\uDC4D ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \uC548\uB155...........");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\uD83C\uDF89 \uCD95! ", ctx.data.num, "\uBC88 \uC0C1\uC790\uB97C \uC120\uD0DD\uD558\uC168\uC2B5\uB2C8\uB2E4 \uD83C\uDF81");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogOverviewExampleDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog',
          templateUrl: './dialog.component.html',
          styleUrls: ['./dialog.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/gift/gift.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/gift/gift.component.ts ***!
    \**********************************************/

  /*! exports provided: GiftComponent */

  /***/
  function srcAppPagesGiftGiftComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GiftComponent", function () {
      return GiftComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../dialog/dialog.component */
    "./src/app/pages/dialog/dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../main/main.component */
    "./src/app/pages/main/main.component.ts");

    var GiftComponent =
    /*#__PURE__*/
    function () {
      function GiftComponent(dialog) {
        _classCallCheck(this, GiftComponent);

        this.dialog = dialog;
        this.modal = false;
      }

      _createClass(GiftComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "img_click",
        value: function img_click(num) {
          this.modal = true;
          console.log(num);
          var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogOverviewExampleDialog"], {
            width: '250px',
            data: {
              num: num
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
          });
        }
      }]);

      return GiftComponent;
    }();

    GiftComponent.ɵfac = function GiftComponent_Factory(t) {
      return new (t || GiftComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    GiftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GiftComponent,
      selectors: [["app-gift"]],
      decls: 12,
      vars: 0,
      consts: [[2, "text-align", "center"], [1, "card"], [2, "display", "inline-flex", "width", "70%", "margin-top", "100px"], [1, "item"], ["src", "https://user-images.githubusercontent.com/42020919/84655589-2f0d5680-af4c-11ea-8d62-ff8313ce7edc.PNG", "onmouseover", "this.src='https://user-images.githubusercontent.com/42020919/84657663-9bd62000-af4f-11ea-8509-8cd9aff4a237.png'", "onmouseout", "this.src='https://user-images.githubusercontent.com/42020919/84655589-2f0d5680-af4c-11ea-8d62-ff8313ce7edc.PNG'", 3, "click"]],
      template: function GiftComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\uB450\uADFC\uB450\uADFC \uC120\uBB3C\uC744 \uACE8\uB77C\uC8FC\uC138\uC694 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GiftComponent_Template_img_click_7_listener() {
            return ctx.img_click(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GiftComponent_Template_img_click_9_listener() {
            return ctx.img_click(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GiftComponent_Template_img_click_11_listener() {
            return ctx.img_click(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]],
      styles: [".item[_ngcontent-%COMP%]{\r\n    flex: 1;\r\n    text-align: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n}\r\n\r\nh4[_ngcontent-%COMP%]{\r\n    margin-top: 40px;\r\n    font-family: 'LotteMartHappy';\r\n    margin-top: 40px;\r\n    font-size: 25px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    background-color: #fefefe;\r\n    margin: 15% auto; \r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 50%;                           \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2lmdC9naWZ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxPQUFPO0lBQ1Asa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCLEVBQUUsa0NBQWtDO0lBQ3BELGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVSxFQUFFLG9EQUFvRDtBQUNwRSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dpZnQvZ2lmdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW17XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbmg0e1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTG90dGVNYXJ0SGFwcHknO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDUwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi8gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GiftComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gift',
          templateUrl: './gift.component.html',
          styleUrls: ['./gift.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/hbd/hbd.component.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/hbd/hbd.component.ts ***!
    \********************************************/

  /*! exports provided: HbdComponent */

  /***/
  function srcAppPagesHbdHbdComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HbdComponent", function () {
      return HbdComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../main/main.component */
    "./src/app/pages/main/main.component.ts");
    /* harmony import */


    var ngx_audio_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-audio-player */
    "./node_modules/ngx-audio-player/__ivy_ngcc__/fesm2015/ngx-audio-player.js"); // import { Track } from './../../../assets/song.mp3';


    var HbdComponent =
    /*#__PURE__*/
    function () {
      function HbdComponent() {
        _classCallCheck(this, HbdComponent);

        this.playlist = [{
          title: '배유라 생축',
          link: 'https://drive.google.com/u/0/uc?id=1xpxXlFhSLq9-bYoCcvQJH8WXW_kc9Md1&export=download'
        }, {
          title: 'ㅅㄱ',
          link: 'https://funksyou.com/fileDownload/Songs/128/13091.mp3'
        }];
      }

      _createClass(HbdComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HbdComponent;
    }();

    HbdComponent.ɵfac = function HbdComponent_Factory(t) {
      return new (t || HbdComponent)();
    };

    HbdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HbdComponent,
      selectors: [["app-hbd"]],
      decls: 4,
      vars: 1,
      consts: [[2, "text-align", "center", "margin-top", "40px"], ["src", "https://user-images.githubusercontent.com/42020919/84667102-e01bed00-af5c-11ea-8df7-29bfd5d7879c.PNG", 2, "width", "700px"], [3, "playlist"]],
      template: function HbdComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-advanced-audio-player", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playlist", ctx.playlist);
        }
      },
      directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_2__["MatAdvancedAudioPlayerComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hiZC9oYmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HbdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hbd',
          templateUrl: './hbd.component.html',
          styleUrls: ['./hbd.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/letter/letter.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/letter/letter.component.ts ***!
    \**************************************************/

  /*! exports provided: LetterComponent */

  /***/
  function srcAppPagesLetterLetterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LetterComponent", function () {
      return LetterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../main/main.component */
    "./src/app/pages/main/main.component.ts");

    var LetterComponent =
    /*#__PURE__*/
    function () {
      function LetterComponent() {
        _classCallCheck(this, LetterComponent);
      }

      _createClass(LetterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LetterComponent;
    }();

    LetterComponent.ɵfac = function LetterComponent_Factory(t) {
      return new (t || LetterComponent)();
    };

    LetterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LetterComponent,
      selectors: [["app-letter"]],
      decls: 7,
      vars: 0,
      consts: [[2, "text-align", "center"], [1, "card"], [2, "margin-top", "100px"], ["src", "https://user-images.githubusercontent.com/42020919/84669962-6d147580-af60-11ea-8925-7c09a72fe12b.PNG", "onmouseout", "this.src='https://user-images.githubusercontent.com/42020919/84669962-6d147580-af60-11ea-8925-7c09a72fe12b.PNG'", "onmouseover", "this.src='https://user-images.githubusercontent.com/42020919/84669962-6d147580-af60-11ea-8925-7c09a72fe12b.PNG'"]],
      template: function LetterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \uD3B8\uC9C0\uAC00 \uAD81\uAE08\uD558\uC2E0\uAC00\uC5EC? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]],
      styles: ["img[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n}\r\n\r\nh4[_ngcontent-%COMP%]{\r\n    margin-top: 40px;\r\n    font-family: 'LotteMartHappy';\r\n    margin-top: 40px;\r\n    font-size: 25px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGV0dGVyL2xldHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZXR0ZXIvbGV0dGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbmg0e1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTG90dGVNYXJ0SGFwcHknO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LetterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-letter',
          templateUrl: './letter.component.html',
          styleUrls: ['./letter.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/main-img/main-img.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/main-img/main-img.component.ts ***!
    \******************************************************/

  /*! exports provided: MainImgComponent */

  /***/
  function srcAppPagesMainImgMainImgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainImgComponent", function () {
      return MainImgComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../main/main.component */
    "./src/app/pages/main/main.component.ts");

    var MainImgComponent =
    /*#__PURE__*/
    function () {
      function MainImgComponent() {
        _classCallCheck(this, MainImgComponent);
      }

      _createClass(MainImgComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainImgComponent;
    }();

    MainImgComponent.ɵfac = function MainImgComponent_Factory(t) {
      return new (t || MainImgComponent)();
    };

    MainImgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainImgComponent,
      selectors: [["app-main-img"]],
      decls: 3,
      vars: 0,
      consts: [[2, "text-align", "center", "margin-top", "40px"], ["src", "KakaoTalk_20211215_010944795.jpg", 2, "width", "700px"]],
      template: function MainImgComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4taW1nL21haW4taW1nLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainImgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-img',
          templateUrl: './main-img.component.html',
          styleUrls: ['./main-img.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/main/main.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/main/main.component.ts ***!
    \**********************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppPagesMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 18,
      vars: 0,
      consts: [["color", "none"], [1, "title-center"], ["routerLink", "/"], ["src", "https://user-images.githubusercontent.com/42020919/84585451-e91c9980-ae4a-11ea-8220-191c12f3671c.GIF", 2, "width", "200px"], [2, "text-align", "center", "margin-top", "15px"], [2, "width", "70%", "display", "inline-flex"], [1, "menu-item"], ["routerLink", "/gift"], ["routerLink", "/letter"], ["routerLink", "/camera"], ["routerLink", "/hbd"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "GIFT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "LETTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "CAMERA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "HBD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".title-center[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n    text-align: center;\r\n    padding: 40px;\r\n  }\r\n\r\nmat-toolbar[_ngcontent-%COMP%]{\r\n    background-color: #fdfbe1;;\r\n    padding: 80px;\r\n}\r\n\r\n.menu-item[_ngcontent-%COMP%]{\r\n    flex: 1;\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n    font-family: 'LotteMartHappy';\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: rgb(31, 31, 31);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1jZW50ZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gIH1cclxuXHJcbm1hdC10b29sYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmJlMTs7XHJcbiAgICBwYWRkaW5nOiA4MHB4O1xyXG59XHJcblxyXG4ubWVudS1pdGVte1xyXG4gICAgZmxleDogMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0xvdHRlTWFydEhhcHB5JztcclxufVxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHJnYigzMSwgMzEsIDMxKTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Yeono\Documents\GitHub\HBDDD\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map