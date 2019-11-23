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
var customerModel_1 = require("../models/customerModel");
var notificationModel_1 = require("../models/notificationModel");
var productModel_1 = require("../models/productModel");
var router_1 = require("../routes/router");
var userNotifications;
var Shoes;
var NotificationController = /** @class */ (function (_super) {
    __extends(NotificationController, _super);
    function NotificationController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationController.create = function (router) {
        router.get("/user/:id/notifications", function (req, res, next) {
            new NotificationController().notificationCentre(req, res, next);
        });
        router.get("/user/:id/add_notification/:id2", function (req, res, next) {
            new NotificationController().inputNotification(req, res, next);
        });
        router.get("/user/:id/edit_notification/:id2", function (req, res, next) {
            new NotificationController().editNotificationForm(req, res, next);
        });
        router.post("/user/:id/add_notification/:id2", function (req, res, next) {
            new NotificationController().addNotification(req, res, next);
        });
        router.post("/user/:id/remove_notification/:id2", function (req, res, next) {
            new NotificationController().removeNotification(req, res, next);
        });
        router.post("/user/:id/edit_notification/:id2", function (req, res, next) {
            new NotificationController().editNotification(req, res, next);
        });
    };
    // constructor() {
    // not much here yet
    // }
    NotificationController.prototype.notificationCentre = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var idString, userId, shoeIf, notifIf, notifArray, _a, _b, _i, item, notification, shoe;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        idString = "id";
                        userId = parseInt(req.params[idString], 10);
                        shoeIf = new productModel_1.ProductModel();
                        notifIf = new notificationModel_1.NotificationModel();
                        notifArray = [];
                        return [4 /*yield*/, this.isUser(userId)];
                    case 1:
                        if (!_c.sent()) return [3 /*break*/, 11];
                        return [4 /*yield*/, shoeIf.getAllDB()];
                    case 2:
                        Shoes = _c.sent();
                        return [4 /*yield*/, this.getUserNotifications(userId)];
                    case 3:
                        _c.sent();
                        _a = [];
                        for (_b in userNotifications)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 4;
                    case 4:
                        if (!(_i < _a.length)) return [3 /*break*/, 10];
                        item = _a[_i];
                        if (!userNotifications.hasOwnProperty(item)) return [3 /*break*/, 9];
                        notification = userNotifications[item];
                        shoe = this.getShoe(notification.shoe_id);
                        notification["shoename"] = shoe.brand + " " + shoe.model + " " + shoe.colorway;
                        notification["current_price"] = shoe.current_price;
                        notification["size"] = shoe.size;
                        if (!!notification.fulfilled) return [3 /*break*/, 8];
                        if (!((notification.type === "Below") && (notification.threshold > shoe.current_price))) return [3 /*break*/, 6];
                        return [4 /*yield*/, notifIf.fulfill(notification._id)];
                    case 5:
                        _c.sent();
                        notification.fulfilled = true;
                        _c.label = 6;
                    case 6:
                        if (!((notification.type === "Above") && (notification.threshold < shoe.current_price))) return [3 /*break*/, 8];
                        console.log(notification._id);
                        return [4 /*yield*/, notifIf.fulfill(notification._id)];
                    case 7:
                        _c.sent();
                        notification.fulfilled = true;
                        _c.label = 8;
                    case 8:
                        notifArray.push(notification);
                        _c.label = 9;
                    case 9:
                        _i++;
                        return [3 /*break*/, 4];
                    case 10:
                        this.render(req, res, "notificationCentre", { id: userId, title: "Notifications", notifications: notifArray });
                        return [3 /*break*/, 12];
                    case 11:
                        res.status(404)
                            .send({
                            message: "No user with associated ID. Check the entered number.",
                            status: res.status,
                        });
                        _c.label = 12;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    NotificationController.prototype.addNotification = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var uString, sString, userID, shoeID, nIF, threshold;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uString = "id";
                        sString = "id2";
                        userID = parseInt(req.params[uString], 10);
                        shoeID = parseInt(req.params[sString], 10);
                        nIF = new notificationModel_1.NotificationModel();
                        threshold = req.body.threshold;
                        if (!threshold) {
                            threshold = 0;
                        }
                        return [4 /*yield*/, nIF.addNotification(userID, shoeID, threshold, req.body.type)];
                    case 1:
                        _a.sent();
                        res.redirect("/user/" + userID + "/allShoes");
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationController.prototype.removeNotification = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var uString, idString, userID, notifID, nIF;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uString = "id";
                        idString = "id2";
                        userID = parseInt(req.params[uString], 10);
                        notifID = req.params[idString];
                        nIF = new notificationModel_1.NotificationModel();
                        return [4 /*yield*/, nIF.remove_notif(notifID)];
                    case 1:
                        _a.sent();
                        res.redirect("/user/" + userID + "/notifications");
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationController.prototype.editNotification = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var uString, idString, userID, notifID, nIF;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uString = "id";
                        idString = "id2";
                        userID = parseInt(req.params[uString], 10);
                        notifID = req.params[idString];
                        nIF = new notificationModel_1.NotificationModel();
                        if (!req.body.threshold) {
                            req.body.threshold = 0;
                        }
                        return [4 /*yield*/, nIF.edit_notif(notifID, req.body.threshold, req.body.type)];
                    case 1:
                        _a.sent();
                        res.redirect("/user/" + userID + "/notifications");
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationController.prototype.inputNotification = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userIdString, userId, shoeIdString, shoeId, shoeIF, shoe, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userIdString = "id";
                        userId = parseInt(req.params[userIdString], 10);
                        shoeIdString = "id2";
                        shoeId = parseInt(req.params[shoeIdString], 10);
                        shoeIF = new productModel_1.ProductModel();
                        return [4 /*yield*/, shoeIF.getOneShoe(shoeId)];
                    case 1:
                        shoe = _b.sent();
                        _a = shoe;
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.isUser(userId)];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        if (_a) {
                            this.render(req, res, "addNotification", { id: userId, shoe: shoe });
                            /* res.status(200)
                                .send({
                                    message: 'Success',
                                    status: res.status,
                                    shoe
                                }); */
                        }
                        else {
                            res.status(404)
                                .send({
                                message: "No shoe found with the given id.",
                                status: res.status,
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationController.prototype.editNotificationForm = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userIdString, userId, notIdString, notId, notification;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userIdString = "id";
                        userId = parseInt(req.params[userIdString], 10);
                        notIdString = "id2";
                        notId = req.params[notIdString];
                        return [4 /*yield*/, this.getNotif(notId)];
                    case 1:
                        notification = _a.sent();
                        this.render(req, res, "editNotification", { id: userId, title: "Notification", notification: notification });
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationController.prototype.getUserNotifications = function (userID) {
        return __awaiter(this, void 0, void 0, function () {
            var notifIf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        notifIf = new notificationModel_1.NotificationModel();
                        return [4 /*yield*/, notifIf.getUserNotifications(userID)];
                    case 1:
                        userNotifications = _a.sent();
                        return [2 /*return*/, userNotifications];
                }
            });
        });
    };
    NotificationController.prototype.getShoe = function (shoeID) {
        for (var item in Shoes) {
            if (Shoes.hasOwnProperty(item)) {
                var shoe = Shoes[item];
                if (shoe.shoe_id === shoeID) {
                    return shoe;
                }
            }
        }
    };
    NotificationController.prototype.getNotif = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var nIF, notif;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nIF = new notificationModel_1.NotificationModel();
                        return [4 /*yield*/, nIF.get_notif(id)];
                    case 1:
                        notif = _a.sent();
                        return [2 /*return*/, notif[0]];
                }
            });
        });
    };
    NotificationController.prototype.isUser = function (userID) {
        return __awaiter(this, void 0, void 0, function () {
            var userIF;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userIF = new customerModel_1.CustomerModel();
                        return [4 /*yield*/, userIF.isUser(userID)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return NotificationController;
}(router_1.BaseRoute));
exports.NotificationController = NotificationController;
//# sourceMappingURL=notificationController.js.map