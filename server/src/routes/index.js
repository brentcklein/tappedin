"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require("./route");
var child_process_promise_1 = require("child-process-promise");
/**
 * / route
 *
 * @class User
 */
var IndexRoute = (function (_super) {
    __extends(IndexRoute, _super);
    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
    function IndexRoute() {
        return _super.call(this) || this;
    }
    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    IndexRoute.create = function (router) {
        //log
        console.log("[IndexRoute::create] Creating index route.");
        //add home page route
        router.get("/", function (req, res, next) {
            new IndexRoute().index(req, res, next);
        });
    };
    /**
     * The home page route.
     *
     * @class IndexRoute
     * @method index
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    IndexRoute.prototype.index = function (req, res, next) {
        //set custom title
        // this.title = "Home | Tour of Heroes";
        //
        // //set message
        // let options: Object = {
        //   "message": "Welcome to the Tour of Heroes, Brent!"
        // };
        //
        // //render template
        // this.render(req, res, "index", options);
        var _this = this;
        // const spawn = require('child_process').spawn;
        child_process_promise_1.spawn('ls', ['/usr'], { capture: ['stdout', 'stderr'] })
            .then(function (firstResult) {
            var first = new Date().getSeconds();
            setTimeout(function () {
                child_process_promise_1.spawn('ls', ['/home/pi'], { capture: ['stdout'] })
                    .then(function (secondResult) {
                    var second = new Date().getSeconds();
                    _this.send(req, res, { first: first, second: second, firstResult: firstResult.stdout, secondResult: secondResult.stdout });
                });
            }, 5000);
        });
    };
    return IndexRoute;
}(route_1.BaseRoute));
exports.IndexRoute = IndexRoute;
