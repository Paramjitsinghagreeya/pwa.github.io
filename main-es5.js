var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>About PWA </p>\nIn the last few years there has been exponential growth in the number of mobile phone users. Today, more than 60% of total internet usage is happening via mobile phone.\nObviously, the reasons include portability, cheap hardware, easy access to the internet and the increased number of services on the internet. With more users on mobile, the optimization of user experience on the phone is essential.\nFor smaller companies, which often do not have native apps due to cost or time constraints, the web app is the key opportunity where they can win customers by providing the best possible experience.\nIf companies have a dedicated native mobile apps, there is a possibility that many users will prefer their web version to avoid downloading and installing due to hardware and memory constraint or some other personal preference.\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-nav/app-nav.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-nav/app-nav.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"(isHandset$ | async) === false\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a  routerLink =\"/home\" mat-list-item>Home</a> \n      <a  routerLink=\"/contactus\" mat-list-item>Contact us</a>\n      <a  routerLink=\"/aboutus\" mat-list-item>About us</a>\n     <!-- <a  routerLink=\"/appnav\" mat-list-item>Information</a>\n       <a  routerLink=\"/thanks\" mat-list-item>Thanks</a> \n      <a  routerLink=\"/feedback\" mat-list-item>Feedback</a>-->\n\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>Portable Web Application</span>\n    </mat-toolbar>\n    <!-- <app-app-table></app-app-table> -->\n    <!-- Add Content Here -->\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n  \n</mat-sidenav-container>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-table/app-table.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-table/app-table.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-elevation-z8\">\n  <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n      [length]=\"dataSource?.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"50\"\n      [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style>\n\n<!-- Toolbar -->\n<app-app-nav></app-app-nav>\n\n\n\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>contactus </p>\n<style>\n.example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  td {\n    padding-right: 8px;\n  }\n</style>\n<form class=\"example-form\">\n        <!-- <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\n        </mat-form-field>\n      \n        <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n          <td><mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"First name\">\n          </mat-form-field></td>\n          <td><mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Last Name \">\n          </mat-form-field></td>\n        </tr></table>\n      \n        <p>\n          <mat-form-field class=\"example-full-width\">\n            <textarea matInput placeholder=\"Address\"></textarea>\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <textarea matInput placeholder=\"Address 2\"></textarea>\n          </mat-form-field>\n        </p>\n      \n        <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n          <td><mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"City\">\n          </mat-form-field></td>\n          <td><mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"State\">\n          </mat-form-field></td>\n          <td><mat-form-field class=\"example-full-width\">\n            <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"\">\n            <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n          </mat-form-field></td>\n        </tr></table>\n        <button mat-button id=\"btnsubmit\">Submit</button>\n         <button mat-button id=\"btnCancel\">Cancel</button> -->\n      </form>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Bootstrap Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js\"></script>\n  <style>\n    /* Remove the navbar's default margin-bottom and rounded borders */ \n    .navbar {\n      margin-bottom: 0;\n      border-radius: 0;\n    }\n    \n    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */\n    .row.content {height: 450px}\n    \n    /* Set gray background color and 100% height */\n    .sidenav {\n      padding-top: 20px;\n      background-color: #f1f1f1;\n      height: 100%;\n    }\n    \n    /* Set black background color, white text and some padding */\n    footer {\n      background-color: #555;\n      color: white;\n      padding: 15px;\n    }\n    \n    /* On small screens, set height to 'auto' for sidenav and grid */\n    @media screen and (max-width: 767px) {\n      .sidenav {\n        height: auto;\n        padding: 15px;\n      }\n      .row.content {height:auto;} \n    }\n  </style>\n</head>\n<body>\n\n\n  \n<div class=\"container-fluid text-center\">    \n  <div class=\"row content\">\n    <div class=\"col-sm-2 sidenav\">\n      \n    </div>\n    <div class=\"col-sm-8 text-left\"> \n     \n     \n      <form>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label for=\"inputEmail4\">Name</label>\n                <input type=\"email\" class=\"form-control\" id=\"inputname\" placeholder=\"Name\">\n              </div>\n              <div class=\"form-group col-md-6\">\n                <label for=\"inputPassword4\"></label>\n                <div class=\"form-check form-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\" value=\"option1\" checked>\n                        <label class=\"form-check-label\" for=\"gridRadios1\">Veg</label>\n                      \n                      <div class=\"form-check\">\n                            <input class=\"form-check-input\" width=\"25\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\" value=\"option1\" checked>\n                            <label class=\"form-check-label\" for=\"gridRadios1\">Non Veg</label>\n                          </div>\n                        </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"inputAddress\">Date</label>\n              <input type=\"date\" class=\"form-control\"  id=\"inputAddress\" placeholder=\"Date\">\n            </div>\n            <div class=\"form-row\">\n              <label for=\"inputAddress2\">What was the quality of food?</label>\n              <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\">\n                    <option selected>Choose...</option>\n                        <option value=\"1\">Bad</option>\n                        <option value=\"2\">Mediocre</option>\n                        <option value=\"3\">Good</option>\n                        <option value=\"4\">Best</option>\n                  </select>\n            </div>\n            <div class=\"form-row\">\n                <label for=\"inputAddress2\">What was the quality of dessert?</label>\n                <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\">\n                        <option selected>Choose...</option>\n                        <option value=\"1\">Bad</option>\n                        <option value=\"2\">Mediocre</option>\n                        <option value=\"3\">Good</option>\n                        <option value=\"4\">Best</option>\n                      </select>\n              \n            </div>\n            <div class=\"form-row\">\n             \n                <label for=\"inputState\">Quality of Non-Veg ?</label>\n                <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\">\n                        <option selected>Choose...</option>\n                        <option value=\"1\">Bad</option>\n                        <option value=\"2\">Mediocre</option>\n                        <option value=\"3\">Good</option>\n                        <option value=\"4\">Best</option>\n                      </select>\n             \n            </div>\n              <div class=\"form-row\">\n                    <label for=\"inputState\">Leave a comment</label>\n                    <textarea class=\"form-control\" rows=\"2\" id=\"comment\"></textarea>\n                  </div>\n                 <br>\n                  <div class=\"form-row\">\n            \n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                  </div>\n          </form>\n\n\n\n\n\n\n\n\n\n\n\n\n    </div>\n    <div class=\"col-sm-2 sidenav\">\n      <div>\n      \n      </div>\n      <div >\n       \n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n</body>\n</html>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form class=\"example-form\"  novalidate #f=\"ngForm\" (ngSubmit)=\"submission(f)\" >\n    <mat-tab-group>\n    <mat-tab  label=\"lunch/Dinner\">\n      <!-- <mat-toolbar>Feedback</mat-toolbar>  -->\n      \n      <mat-form-field  class=\"example-full-width\">\n          <input matInput placeholder=\"Name (optional)\" id=\"txtname\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\" value=\"\"  >\n        </mat-form-field>\n       \n        <mat-form-field class=\"example-full-width\">\n        <input matInput [matDatepicker] = \"picker\" id=\"txtdate\" [(ngModel)]=\"date\" [ngModelOptions]=\"{standalone: true}\" placeholder = \"Choose a date\">\n    <mat-datepicker-toggle matSuffix [for] = \"picker\"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n       \n       \n        <mat-radio-group class=\"example-full-width\" id=\"txtoption\" [(ngModel)]=\"optn\" [ngModelOptions]=\"{standalone: true}\" aria-label=\"Select an option\">\n            <mat-radio-button value=\"1\">Veg&nbsp;</mat-radio-button> \n            <mat-radio-button value=\"2\">Non-Veg</mat-radio-button>\n        </mat-radio-group>  \n\n\n        <mat-form-field class=\"example-full-width\">\n            <!-- <input id=\"q1\" matInput placeholder=\"What was the quality of food\" value=\"\"> -->\n            <mat-label>What was the quality of food</mat-label>\n            <mat-select id=\"qualityoffood\" [(ngModel)]=\"qualityoffood\" [ngModelOptions]=\"{standalone: true}\">\n              <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                {{food.viewValue}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n              <mat-label>What was the quality of dessert</mat-label>\n              <mat-select id=\"qualityofdessert\" [(ngModel)]=\"qualityofdessert\" [ngModelOptions]=\"{standalone: true}\">\n                <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                  {{food.viewValue}}\n                </mat-option>\n              </mat-select>\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n              <mat-label>What was the quality of Non-Veg</mat-label>\n              <mat-select id=\"qualityofnonveg\" [(ngModel)]=\"qualityofnonveg\" [ngModelOptions]=\"{standalone: true}\">\n                <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                  {{food.viewValue}}\n                </mat-option>\n              </mat-select> \n           \n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n              <textarea matInput placeholder=\"Leave a comment\" id=\"comment\" [(ngModel)]=\"comment\" [ngModelOptions]=\"{standalone: true}\" ></textarea>\n            </mat-form-field>\n\n          <button mat-raised-button id=\"btnsubmit\" class=\"mat-button\" color=\"primary\" (click)=\"submission()\">Submit</button>\n          &nbsp;<button  mat-raised-button color=\"primary\" id=\"btnCancel\">Cancel</button>\n\n        </mat-tab>\n        <mat-tab label=\"Parking\">Parking Detail</mat-tab>\n        <mat-tab label=\"Lavatory\">\n\n\n            <mat-form-field  class=\"example-full-width\">\n                <input matInput placeholder=\"Name (optional)\" id=\"ltxtname\" [(ngModel)]=\"lname\" [ngModelOptions]=\"{standalone: true}\" value=\"\"  >\n              </mat-form-field>\n             \n              <mat-form-field class=\"example-full-width\">\n                  <input matInput [matDatepicker] = \"lpicker\" id=\"ltxtdate\" [(ngModel)]=\"ldate\" [ngModelOptions]=\"{standalone: true}\" placeholder = \"Choose a date\">\n              <mat-datepicker-toggle matSuffix [for]=\"lpicker\"></mat-datepicker-toggle>\n              <mat-datepicker #lpicker></mat-datepicker>\n                  </mat-form-field>\n\n                  <mat-radio-group class=\"example-full-width\" id=\"ltxtoption\" [(ngModel)]=\"loptn\" [ngModelOptions]=\"{standalone: true}\" aria-label=\"Select an option\">\n                      <mat-radio-button value=\"1\">Boys &nbsp;</mat-radio-button> \n                      <mat-radio-button value=\"2\">Girls</mat-radio-button>\n                  </mat-radio-group>  \n                \n             \n                  <mat-form-field class=\"example-full-width\">\n                      <mat-label>Issue on Which Floor ?</mat-label>\n                      <mat-select id=\"qualityofdessert\" [(ngModel)]=\"qualityofdessert\" [ngModelOptions]=\"{standalone: true}\">\n                        <mat-option value=\"1\">Basement</mat-option>\n                        <mat-option value=\"2\">Ground Floor</mat-option>\n                        <mat-option value=\"3\">Floor 1</mat-option>\n                        <mat-option value=\"4\">Floor 2</mat-option>\n                      </mat-select>\n                  </mat-form-field>\n\n                  <mat-form-field class=\"example-full-width\">\n                      <!-- <input id=\"q1\" matInput placeholder=\"What was the quality of food\" value=\"\"> -->\n                      <mat-label>Water Problem ?</mat-label>\n                      <mat-select id=\"lqualityoffood\" [(ngModel)]=\"lqualityoffood\" [ngModelOptions]=\"{standalone: true}\">\n                          <mat-option value=\"1\">Yes</mat-option>\n                          <mat-option value=\"2\">No</mat-option>\n                         \n                      \n                      </mat-select>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>Condition of washroom</mat-label>\n                        <mat-select id=\"lqualityofdessert\" [(ngModel)]=\"lqualityofdessert\" [ngModelOptions]=\"{standalone: true}\">\n                         \n                              <mat-option value=\"1\">Bad</mat-option>\n                              <mat-option value=\"2\">Good</mat-option>\n                       \n                        </mat-select>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width\">\n                        <textarea matInput placeholder=\"Leave a comment\" id=\"lcomment\" [(ngModel)]=\"lcomment\" [ngModelOptions]=\"{standalone: true}\" ></textarea>\n                      </mat-form-field>\n\n                      <button mat-raised-button id=\"btnsubmit\" class=\"mat-button\" color=\"primary\" (click)=\"lsubmission()\">Submit</button> &nbsp;\n         <button  mat-raised-button color=\"primary\" id=\"btnCancel\">Cancel</button>\n             \n          \n        </mat-tab>\n      </mat-tab-group>\n\n    \n    </form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/thanks/thanks.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/thanks/thanks.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\">\n<html>\n  <head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\" />\n    <meta name=\"HandheldFriendly\" content=\"true\" />\n    <title>Thank You</title>\n    <link href='' rel='stylesheet' type='text/css'>\n    <script type=\"text/javascript\" src=\"https://submit.jotform.me/js/prototype.js\"></script>\n    <style type=\"text/css\">\n      @import url();\n      * {\n        -moz-box-sizing:border-box;\n        -webkit-box-sizing:border-box;\n        box-sizing:border-box;\n        *behavior:url(js/boxsizing.htc);\n      }\n      html, body { width:100%; margin:0px; padding:0px; }\n      body {\n        background: ghostwhite;\n        background-repeat: repeat;\n        background-attachment: scroll;\n        background-position: center top;\n        background-size: auto;\n        \n        font-family: Lucida Grande, sans-serif;\n        font-size: 14px;\n        color: #3e4e1a;\n        text-align:center;\n      }\n      .form-all {\n        background:  #d5eef3;\n        background-repeat: repeat;\n        background-attachment: scroll;\n        background-position: center top;\n        background-size: auto;\n        \n        width: 100%;\n        max-width: 690px;\n        margin: 36px auto;\n        padding: 35px 29px ;\n        -webkit-box-shadow: 0 4px 4px -1px rgba(0,0,0,0.1);\n        box-shadow: 0 4px 4px -1px rgba(0,0,0,0.1);\n      }\n\n      #footer {\n        text-align: left;\n        margin: -35px auto 0;\n        font-size: 14px;\n        width: 690px;\n      }\n\n      #footer > div {\n        box-shadow: 0 4px 4px -1px rgba(0,0,0,0.1);\n        background-color: #fff;\n        padding: 12px 15px;\n        overflow: hidden;\n      }\n\n      #footer > div > div { padding: 10px 0 10px 5px }\n\n      .thankYouPage-footerJFLink span { display: none }\n\n      @media screen and (max-width: 690px), screen and (max-device-width: 768px) and (orientation: portrait), screen and (max-device-width: 415px) and (orientation: landscape) {\n        body {\n          background-color: #d5eef3;\n        }\n        .form-all {\n          margin: 12px 3%;\n          border: 0;\n          -webkit-box-shadow: none;\n          box-shadow: none;\n          width: 94%;\n          max-width: initial;\n        }\n\n        .thankYouPage-footerJFLink img { display: none }\n        .thankYouPage-footerJFLink span { display: inline-block }\n\n        #footer {\n          width: 94%;\n          margin-top: 0;\n        }\n        #footer > div.summer-sale-2018 > div a { padding: 3px 0 0 1px; font-size: 10px; }\n        #footer > div > div { padding: 3px 0 0 5px; font-size: 12px; }\n\n\n        #footer > div > div span { display: block }\n        #footer > div > div span.footer-dash { display: none }\n      }\n      @media print {\n       body {\n        background: white;\n        color: black;\n       }\n\n       .form-all {\n        margin:0 auto;\n        max-width: 100%;\n        box-shadow: none;\n        background:white;\n        float:none;\n        width: 690px;\n       } \n       img {\n        max-width: 100% !important;\n        page-break-inside: avoid;\n       }\n\n      }\n    </style>\n    <style type=\"text/css\">\n    \n    </style>\n    <!-- <link href=\"css/print-new.css\" rel=\"stylesheet\" type=\"text/css\" media=\"print\"> -->\n  </head>\n  <body class=\"thankyou\">\n    <div id=\"stage\" class=\"form-all\">\n      <p style=\"text-align:center;\"><img src=\"https://cdn.jotfor.ms/img/check-icon.png\" alt=\"\" width=\"128\" height=\"128\" /></p><div style=\"text-align:center;\"><h1 style=\"text-align:center;\">Thank You!</h1><p style=\"text-align:center;\">Your submission has been received.</p></div>\n    </div>\n    \n  </body>\n  <script type=\"text/javascript\">\n    if (window.parent !== window) {\n      var stageMarginTop = ($('stage')) ? parseInt($('stage').getStyle('marginTop')) : 0;\n      var height = $$('body').first().getHeight() + stageMarginTop;\n      window.parent.postMessage('setHeight:' + height, '*');\n      window.parent.postMessage({ action: 'submission-completed' }, '*');\n    }\n  </script>\n</html>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/aboutus/aboutus.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/aboutus/aboutus.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/aboutus/aboutus.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/aboutus/aboutus.component.ts ***!
          \**********************************************/
        /*! exports provided: AboutusComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function () { return AboutusComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutusComponent = /** @class */ (function () {
                function AboutusComponent() {
                    this.currentRate = 6;
                }
                AboutusComponent.prototype.ngOnInit = function () {
                };
                return AboutusComponent;
            }());
            AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-aboutus',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aboutus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./aboutus.component.scss */ "./src/app/aboutus/aboutus.component.scss")).default]
                })
            ], AboutusComponent);
            /***/ 
        }),
        /***/ "./src/app/app-nav/app-nav.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/app-nav/app-nav.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLW5hdi9EOlxcY3JlYXRlXFxteS1wd2Evc3JjXFxhcHBcXGFwcC1uYXZcXGFwcC1uYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC1uYXYvYXBwLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC1uYXYvYXBwLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cbiIsIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app-nav/app-nav.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/app-nav/app-nav.component.ts ***!
          \**********************************************/
        /*! exports provided: AppNavComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavComponent", function () { return AppNavComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AppNavComponent = /** @class */ (function () {
                function AppNavComponent(breakpointObserver) {
                    this.breakpointObserver = breakpointObserver;
                    this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
                }
                return AppNavComponent;
            }());
            AppNavComponent.ctorParameters = function () { return [
                { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }
            ]; };
            AppNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-app-nav',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-nav/app-nav.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app-nav.component.scss */ "./src/app/app-nav/app-nav.component.scss")).default]
                })
            ], AppNavComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
            /* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
            /* harmony import */ var _app_table_app_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-table/app-table.component */ "./src/app/app-table/app-table.component.ts");
            /* harmony import */ var _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./thanks/thanks.component */ "./src/app/thanks/thanks.component.ts");
            /* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
            var routes = [
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__["ContactusComponent"] },
                { path: 'aboutus', component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_5__["AboutusComponent"] },
                { path: 'appnav', component: _app_table_app_table_component__WEBPACK_IMPORTED_MODULE_6__["AppTableComponent"] },
                { path: 'thanks', component: _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_7__["ThanksComponent"] },
                { path: 'feedback', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__["FeedbackComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app-table/app-table-datasource.ts": 
        /*!***************************************************!*\
          !*** ./src/app/app-table/app-table-datasource.ts ***!
          \***************************************************/
        /*! exports provided: AppTableDataSource */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTableDataSource", function () { return AppTableDataSource; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            // TODO: replace this with real data from your application
            var EXAMPLE_DATA = [
                { id: 1, name: 'Hydrogen' },
                { id: 2, name: 'Helium' },
                { id: 3, name: 'Lithium' },
                { id: 4, name: 'Beryllium' },
                { id: 5, name: 'Boron' },
                { id: 6, name: 'Carbon' },
                { id: 7, name: 'Nitrogen' },
                { id: 8, name: 'Oxygen' },
                { id: 9, name: 'Fluorine' },
                { id: 10, name: 'Neon' },
                { id: 11, name: 'Sodium' },
                { id: 12, name: 'Magnesium' },
                { id: 13, name: 'Aluminum' },
                { id: 14, name: 'Silicon' },
                { id: 15, name: 'Phosphorus' },
                { id: 16, name: 'Sulfur' },
                { id: 17, name: 'Chlorine' },
                { id: 18, name: 'Argon' },
                { id: 19, name: 'Potassium' },
                { id: 20, name: 'Calcium' },
            ];
            /**
             * Data source for the AppTable view. This class should
             * encapsulate all logic for fetching and manipulating the displayed data
             * (including sorting, pagination, and filtering).
             */
            var AppTableDataSource = /** @class */ (function (_super) {
                __extends(AppTableDataSource, _super);
                function AppTableDataSource() {
                    var _this = _super.call(this) || this;
                    _this.data = EXAMPLE_DATA;
                    return _this;
                }
                /**
                 * Connect this data source to the table. The table will only update when
                 * the returned stream emits new items.
                 * @returns A stream of the items to be rendered.
                 */
                AppTableDataSource.prototype.connect = function () {
                    var _this = this;
                    // Combine everything that affects the rendered data into one update
                    // stream for the data-table to consume.
                    var dataMutations = [
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data),
                        this.paginator.page,
                        this.sort.sortChange
                    ];
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"]).apply(void 0, __spread(dataMutations)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
                        return _this.getPagedData(_this.getSortedData(__spread(_this.data)));
                    }));
                };
                /**
                 *  Called when the table is being destroyed. Use this function, to clean up
                 * any open connections or free any held resources that were set up during connect.
                 */
                AppTableDataSource.prototype.disconnect = function () { };
                /**
                 * Paginate the data (client-side). If you're using server-side pagination,
                 * this would be replaced by requesting the appropriate data from the server.
                 */
                AppTableDataSource.prototype.getPagedData = function (data) {
                    var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
                    return data.splice(startIndex, this.paginator.pageSize);
                };
                /**
                 * Sort the data (client-side). If you're using server-side sorting,
                 * this would be replaced by requesting the appropriate data from the server.
                 */
                AppTableDataSource.prototype.getSortedData = function (data) {
                    var _this = this;
                    if (!this.sort.active || this.sort.direction === '') {
                        return data;
                    }
                    return data.sort(function (a, b) {
                        var isAsc = _this.sort.direction === 'asc';
                        switch (_this.sort.active) {
                            case 'name': return compare(a.name, b.name, isAsc);
                            case 'id': return compare(+a.id, +b.id, isAsc);
                            default: return 0;
                        }
                    });
                };
                return AppTableDataSource;
            }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));
            /** Simple sort comparator for example ID/Name columns (for client-side sorting). */
            function compare(a, b, isAsc) {
                return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
            }
            /***/ 
        }),
        /***/ "./src/app/app-table/app-table.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/app-table/app-table.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".full-width-table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXRhYmxlL0Q6XFxjcmVhdGVcXG15LXB3YS9zcmNcXGFwcFxcYXBwLXRhYmxlXFxhcHAtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC10YWJsZS9hcHAtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAtdGFibGUvYXBwLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIi5mdWxsLXdpZHRoLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/app-table/app-table.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/app-table/app-table.component.ts ***!
          \**************************************************/
        /*! exports provided: AppTableComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTableComponent", function () { return AppTableComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _app_table_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-table-datasource */ "./src/app/app-table/app-table-datasource.ts");
            var AppTableComponent = /** @class */ (function () {
                function AppTableComponent() {
                    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
                    this.displayedColumns = ['id', 'name'];
                }
                AppTableComponent.prototype.ngOnInit = function () {
                    this.dataSource = new _app_table_datasource__WEBPACK_IMPORTED_MODULE_5__["AppTableDataSource"]();
                };
                AppTableComponent.prototype.ngAfterViewInit = function () {
                    this.dataSource.sort = this.sort;
                    this.dataSource.paginator = this.paginator;
                    this.table.dataSource = this.dataSource;
                };
                return AppTableComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
            ], AppTableComponent.prototype, "paginator", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
            ], AppTableComponent.prototype, "sort", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], { static: false })
            ], AppTableComponent.prototype, "table", void 0);
            AppTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-app-table',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-table/app-table.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app-table.component.scss */ "./src/app/app-table/app-table.component.scss")).default]
                })
            ], AppTableComponent);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Portable Web Application';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _app_nav_app_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-nav/app-nav.component */ "./src/app/app-nav/app-nav.component.ts");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _app_table_app_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-table/app-table.component */ "./src/app/app-table/app-table.component.ts");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
            /* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
            /* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
            /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            /* harmony import */ var _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./thanks/thanks.component */ "./src/app/thanks/thanks.component.ts");
            /* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _app_nav_app_nav_component__WEBPACK_IMPORTED_MODULE_7__["AppNavComponent"],
                        _app_table_app_table_component__WEBPACK_IMPORTED_MODULE_14__["AppTableComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
                        _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_21__["ContactusComponent"],
                        _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_22__["AboutusComponent"],
                        _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_27__["ThanksComponent"],
                        _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_28__["FeedbackComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
                        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
                        _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"],
                        _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production })
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/contactus/contactus.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/contactus/contactus.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/contactus/contactus.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/contactus/contactus.component.ts ***!
          \**************************************************/
        /*! exports provided: ContactusComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function () { return ContactusComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ContactusComponent = /** @class */ (function () {
                function ContactusComponent() {
                }
                ContactusComponent.prototype.ngOnInit = function () {
                };
                return ContactusComponent;
            }());
            ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contactus',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contactus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contactus.component.scss */ "./src/app/contactus/contactus.component.scss")).default]
                })
            ], ContactusComponent);
            /***/ 
        }),
        /***/ "./src/app/feedback/feedback.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/feedback/feedback.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/feedback/feedback.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/feedback/feedback.component.ts ***!
          \************************************************/
        /*! exports provided: FeedbackComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function () { return FeedbackComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var FeedbackComponent = /** @class */ (function () {
                function FeedbackComponent(router) {
                    this.router = router;
                    this.seasons = ['Veg', 'Non Veg'];
                    this.foods = [
                        { value: 'Bad', viewValue: 'Bad' },
                        { value: 'mediocre', viewValue: 'Mediocre' },
                        { value: 'Good', viewValue: 'Good' },
                        { value: 'Best', viewValue: 'Best' }
                    ];
                }
                FeedbackComponent.prototype.ngOnInit = function () {
                };
                return FeedbackComponent;
            }());
            FeedbackComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-feedback',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feedback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feedback.component.scss */ "./src/app/feedback/feedback.component.scss")).default]
                })
            ], FeedbackComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/home/home.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  height: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\np {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcY3JlYXRlXFxteS1wd2Evc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NIOztBREVDO0VBQ0UsV0FBQTtBQ0NIOztBRENDO0VBQ0UsaUJBQUE7QUNFSCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gfVxyXG4gXHJcbiAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiB9XHJcbiBwIHtcclxuICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiB9IiwiLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(router) {
                    this.router = router;
                    this.seasons = ['Veg', 'Non Veg'];
                    this.foods = [
                        { value: 'Bad', viewValue: 'Bad' },
                        { value: 'mediocre', viewValue: 'Mediocre' },
                        { value: 'Good', viewValue: 'Good' },
                        { value: 'Best', viewValue: 'Best' }
                    ];
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                HomeComponent.prototype.submission = function () {
                    alert(this.name + " Date:- " + this.date + " option:-" + this.optn + "qualityoffood:-" + this.qualityoffood + " qualityofdessert:- " + this.qualityofdessert + " qualityofnonveg:- " + this.qualityofnonveg + " comment:-" + this.comment);
                    this.router.navigate(['/', 'thanks']);
                };
                HomeComponent.prototype.lsubmission = function () {
                    alert(this.lname + " lDate:- " + this.ldate + " " + "comment:-" + this.lcomment);
                    this.router.navigate(['/', 'thanks']);
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/thanks/thanks.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/thanks/thanks.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoYW5rcy90aGFua3MuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/thanks/thanks.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/thanks/thanks.component.ts ***!
          \********************************************/
        /*! exports provided: ThanksComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksComponent", function () { return ThanksComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ThanksComponent = /** @class */ (function () {
                function ThanksComponent() {
                }
                ThanksComponent.prototype.ngOnInit = function () {
                };
                return ThanksComponent;
            }());
            ThanksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-thanks',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thanks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/thanks/thanks.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thanks.component.scss */ "./src/app/thanks/thanks.component.scss")).default]
                })
            ], ThanksComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
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
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\create\my-pwa\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map