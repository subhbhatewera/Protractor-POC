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
exports.OrderConfirmation = void 0;
const protractor_1 = require("protractor");
const log = require('../logging').default;
class OrderConfirmation {
    constructor() {
        this.orderNumber = protractor_1.element(protractor_1.by.css("[class='os-order-number']"));
        this.continueShoppingBtn = protractor_1.element(protractor_1.by.css("[class='step__footer__continue-btn btn']"));
    }
    getOrderNumber() {
        return __awaiter(this, void 0, void 0, function* () {
            let EC = protractor_1.browser.ExpectedConditions;
            yield protractor_1.browser.wait(EC.visibilityOf(this.orderNumber), 20000);
            yield this.orderNumber.getText().then((orderno) => __awaiter(this, void 0, void 0, function* () {
                console.log("Order number is -> " + orderno);
                yield log.debug("Order number is -> " + orderno);
            }));
        });
    }
    clickOnContinueShoppingBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on continueShoppingBtn");
            yield log.debug("Clicking on continueShoppingBtn");
            yield this.continueShoppingBtn.click();
        });
    }
}
exports.OrderConfirmation = OrderConfirmation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJjb25maXJtYXRpb25wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvb3JkZXJjb25maXJtYXRpb25wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFpRTtBQUVqRSxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBRTFDLE1BQWEsaUJBQWlCO0lBSTFCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxtQkFBbUIsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFSyxjQUFjOztZQUNoQixJQUFJLEVBQUUsR0FBRyxvQkFBTyxDQUFDLGtCQUFrQixDQUFDO1lBQ3BDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDN0QsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFPLE9BQU8sRUFBQyxFQUFFO2dCQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLEdBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtJQUVLLDBCQUEwQjs7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNDLENBQUM7S0FBQTtDQUNKO0FBdkJELDhDQXVCQyJ9