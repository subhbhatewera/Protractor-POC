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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToCart = void 0;
const protractor_1 = require("protractor");
class AddToCart {
    constructor() {
        this.addToCartBtn = protractor_1.element(protractor_1.by.css("button[id*='Add']"));
    }
    clickOnAddToCartBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Click on addToCartBtn");
            yield this.addToCartBtn.click();
        });
    }
}
exports.AddToCart = AddToCart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkdG9jYXJ0cGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2FkZHRvY2FydHBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsU0FBUztJQUdsQjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUssbUJBQW1COztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDckMsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLENBQUM7S0FBQTtDQUNKO0FBWEQsOEJBV0MifQ==