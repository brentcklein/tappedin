import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import { spawn } from "child-process-promise";
import { buffer } from "mz/fs";


/**
 * / route
 *
 * @class User
 */
export class IndexRoute extends BaseRoute {

  /**
   * Create the routes.
   *
   * @class IndexRoute
   * @method create
   * @static
   */
  public static create(router: Router) {
    //log
    console.log("[IndexRoute::create] Creating index route.");

    //add home page route
    router.get("/", (req: Request, res: Response, next: NextFunction) => {
      new IndexRoute().index(req, res, next);
    });
  }

  /**
   * Constructor
   *
   * @class IndexRoute
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * The home page route.
   *
   * @class IndexRoute
   * @method index
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @next {NextFunction} Execute the next method.
   */
  public index(req: Request, res: Response, next: NextFunction) {
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

    // const spawn = require('child_process').spawn;
    spawn('ls', ['/usr'], {capture: ['stdout', 'stderr']})
      .then((firstResult) => {
        const first = new Date().getSeconds();
        setTimeout(() => {
          spawn('ls', ['/home/pi'], {capture: ['stdout']})
            .then((secondResult) => {
              const second = new Date().getSeconds();
              this.send(req, res, {first: first, second: second, firstResult: firstResult.stdout, secondResult: secondResult.stdout});
            });
        }, 5000);
      });
  }
}
