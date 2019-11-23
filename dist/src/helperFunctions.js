"use strict";
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
var customerModel_1 = require("./models/customerModel");
var productModel_1 = require("./models/productModel");
var userJson;
var userKeys;
var userShoes = [];
var netGain = 0;
var sunkCost = 0;
var totalRevenue = 0;
var Shoes;
var helpers = /** @class */ (function () {
    function helpers() {
    }
    helpers.prototype.check_local = function (userID) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!(userJson && userShoes)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getUserInfo(userID)];
                    case 1:
                        userJson = _a.sent();
                        if (!userJson) {
                            return [2 /*return*/, false];
                        }
                        console.log("setting shoes");
                        return [4 /*yield*/, this.getUserKeys(userID)];
                    case 2:
                        userKeys = _a.sent();
                        return [4 /*yield*/, this.setUserShoes(userKeys)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.setNet(userShoes)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 5:
                        if (!(userJson.user_id != userID)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.getUserInfo(userID)];
                    case 6:
                        userJson = _a.sent();
                        if (!userJson) {
                            return [2 /*return*/, false];
                        }
                        userShoes = [];
                        netGain = 0;
                        sunkCost = 0;
                        totalRevenue = 0;
                        return [4 /*yield*/, this.getUserKeys(userID)];
                    case 7:
                        userKeys = _a.sent();
                        return [4 /*yield*/, this.setUserShoes(userKeys)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.setNet(userShoes)];
                    case 9:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 10: return [2 /*return*/, true];
                }
            });
        });
    };
    ;
    helpers.prototype.setUserShoes = function (userKeys) {
        return __awaiter(this, void 0, void 0, function () {
            var item, key, shoe;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllDbShoes()];
                    case 1:
                        Shoes = _a.sent();
                        for (item in userKeys) {
                            if (userKeys.hasOwnProperty(item)) {
                                key = userKeys[item];
                                shoe = this.getShoeInfo(key.shoe_id);
                                key["name"] = shoe.brand + ' ' + shoe.model + ' ' + shoe.colorway;
                                key["size"] = shoe.size;
                                key["current_price"] = shoe.current_price;
                                key["retail_price"] = shoe.retail_price;
                                userShoes.push(key);
                            }
                        }
                        return [2 /*return*/, userShoes];
                }
            });
        });
    };
    helpers.prototype.getUserInfo = function (queryint) {
        return __awaiter(this, void 0, void 0, function () {
            var userIf, userInfo, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userIf = new customerModel_1.CustomerModel();
                        userInfo = null;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, userIf.userInfo(queryint)];
                    case 2:
                        userInfo = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        return [2 /*return*/, false];
                    case 4:
                        if (userInfo.length !== 0) {
                            return [2 /*return*/, userInfo[0]];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    helpers.prototype.setNet = function (shoelist) {
        return __awaiter(this, void 0, void 0, function () {
            var item, shoe;
            return __generator(this, function (_a) {
                for (item in shoelist) {
                    if (shoelist.hasOwnProperty(item)) {
                        shoe = shoelist[item];
                        netGain = netGain + shoe.current_price - shoe.purchase_price;
                        sunkCost = sunkCost + parseInt(shoe.purchase_price);
                        totalRevenue = totalRevenue + shoe.current_price;
                    }
                }
                return [2 /*return*/, [netGain, sunkCost, totalRevenue]];
            });
        });
    };
    helpers.prototype.getShoeInfo = function (shoeID) {
        for (var item in Shoes) {
            if (Shoes.hasOwnProperty(item)) {
                var shoe = Shoes[item];
                if (shoe.shoe_id === shoeID)
                    return shoe;
            }
        }
    };
    helpers.prototype.getUserKeys = function (userID) {
        return __awaiter(this, void 0, void 0, function () {
            var user_if, userKeys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user_if = new customerModel_1.CustomerModel();
                        return [4 /*yield*/, user_if.get_keys(userID)];
                    case 1:
                        userKeys = _a.sent();
                        console.log(userKeys);
                        return [2 /*return*/, userKeys];
                }
            });
        });
    };
    helpers.prototype.isUser = function (userID) {
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
    /* returns every shoe in db */
    helpers.prototype.getAllDbShoes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allShoes, shoeIf, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        allShoes = null;
                        shoeIf = new productModel_1.ProductModel();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, shoeIf.getAllDB()];
                    case 2:
                        allShoes = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        return [2 /*return*/, false];
                    case 4:
                        if (allShoes) {
                            return [2 /*return*/, allShoes];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    helpers.prototype.findShoe = function (shoeID) {
        for (var item in userShoes) {
            if (userShoes.hasOwnProperty(item)) {
                var shoe = userShoes[item];
                if (shoe._id == shoeID)
                    return shoe;
            }
        }
    };
    helpers.prototype.getUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user_arr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new user_model_1.UserModel().get_users()];
                    case 1:
                        user_arr = _a.sent();
                        return [2 /*return*/, user_arr];
                }
            });
        });
    };
    helpers.prototype.getShoe = function (shoeId) {
        return __awaiter(this, void 0, void 0, function () {
            var shoeIf, shoe;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shoeIf = new shoe_model_1.ShoeModel();
                        return [4 /*yield*/, shoeIf.getOneShoe(shoeId)];
                    case 1:
                        shoe = _a.sent();
                        if (shoe) {
                            return [2 /*return*/, shoe];
                        }
                        else {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    helpers.prototype.getUserShoes = function (userKeys) {
        return __awaiter(this, void 0, void 0, function () {
            var shoeIf, uShoes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shoeIf = new shoe_model_1.ShoeModel();
                        return [4 /*yield*/, shoeIf.getAllShoes(userKeys)];
                    case 1:
                        uShoes = _a.sent();
                        return [2 /*return*/, uShoes];
                }
            });
        });
    };
    return helpers;
}());
module.exports = new helpers();
//# sourceMappingURL=helperFunctions.js.map