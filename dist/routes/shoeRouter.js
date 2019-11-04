"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("./router");
var shoe_model_1 = require("../models/shoe_model");
var ShoeRouter = /** @class */ (function (_super) {
    __extends(ShoeRouter, _super);
    function ShoeRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShoeRouter.create = function (router) {
        // log
        console.log("[ShoeRoute::create] Creating ShoeRoutes route.");
        // add home page route
        router.get("/user/:id/shoes", function (req, res, next) {
            new ShoeRouter().getAll(req, res, next);
        });
        // add getOne route
        router.get("/user/:id/shoes/:id2", function (req, res, next) {
            new ShoeRouter().getOne(req, res, next);
        });
        router.get("/api/sortpricelow", function (req, res, next) {
            new ShoeRouter().sortPriceLow(req, res, next);
        });
        router.get("/api/sortpricehigh", function (req, res, next) {
            new ShoeRouter().sortPriceHigh(req, res, next);
        });
    };
    // constructor() {
    // not much here yet
    // }
    ShoeRouter.prototype.sortPriceLow = function (req, res, next) {
        var shoes = [];
        // Shoes.forEach((element: any) => {
        //     shoes.push(JSON.parse(JSON.stringify(element)));
        // });
        shoes.sort(function (a, b) { return a.current_price - b.current_price; });
        console.log(shoes);
        this.render(req, res, "allShoes", { title: "Shoes", data: shoes });
    };
    ShoeRouter.prototype.sortPriceHigh = function (req, res, next) {
        var shoes = [];
        // Shoes.forEach((element: any) => {
        //     shoes.push(JSON.parse(JSON.stringify(element)));
        // });
        shoes.sort(function (a, b) { return b.current_price - a.current_price; });
        console.log(shoes);
        this.render(req, res, "allShoes", { title: "Shoes", data: shoes });
    };
    /**
     * GET all Shoes. Take user id from the url parameter. Then get all shoes for that user.
     */
    ShoeRouter.prototype.getAll = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var idString, queryint, yeet, shoes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("in ther other one");
                        idString = "id";
                        queryint = parseInt(req.params[idString], 10);
                        yeet = new shoe_model_1.ShoeModel();
                        return [4 /*yield*/, yeet.get_one_shoe(2)];
                    case 1:
                        shoes = _a.sent();
                        console.log(shoes);
                        if (shoes.length !== 0) {
                            res.send(shoes);
                        }
                        else {
                            res.send("404 not found lol");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * GET one shoe by id
     */
    ShoeRouter.prototype.getOne = function (req, res, next) {
        // const idString = "id";
        // const queryint = parseInt(req.params[idString], 10);
        // // let shoe: any = Shoes[1];
        // const shoe: any = Shoes;
        // for (const item in Shoes) {
        //     if (Shoes.hasOwnProperty(item)) {
        //         // const shoeid: number = Shoes[item].id;
        //         // if (shoeid === queryint) {
        //             // shoe = Shoes[item];
        //         // }
        //     }
        // }
        // if (shoe) {
        //     const diff = "diff";
        //     shoe[diff] = shoe.current_price - shoe.retail_price;
        //     this.render(req, res, "oneShoe", shoe);
        //     /* res.status(200)
        //         .send({
        //             message: 'Success',
        //             status: res.status,
        //             shoe
        //         }); */
        // } else {
        //     res.status(404)
        //         .send({
        //             message: "No shoe found with the given id.",
        //             status: res.status,
        //         });
        // }
    };
    return ShoeRouter;
}(router_1.BaseRoute));
exports.ShoeRouter = ShoeRouter;
//# sourceMappingURL=shoeRouter.js.map