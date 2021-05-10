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
class OrderConfirmation {
    constructor() {
        this.orderNumber = protractor_1.element(protractor_1.by.css("[class='os-order-number']"));
        this.continueShoppingBtn = protractor_1.element(protractor_1.by.css("[class='step__footer__continue-btn btn']"));
    }
    getOrderNumber() {
        return __awaiter(this, void 0, void 0, function* () {
            let EC = protractor_1.browser.ExpectedConditions;
            yield protractor_1.browser.wait(EC.visibilityOf(this.orderNumber), 20000);
            yield this.orderNumber.getText().then((orderno) => {
                console.log(orderno);
            });
        });
    }
    clickOnContinueShoppingBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on continueShoppingBtn");
            yield this.continueShoppingBtn.click();
        });
    }
}
exports.OrderConfirmation = OrderConfirmation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJjb25maXJtYXRpb25wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvb3JkZXJjb25maXJtYXRpb25wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFpRTtBQUVqRSxNQUFhLGlCQUFpQjtJQUkxQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsbUJBQW1CLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUssY0FBYzs7WUFDaEIsSUFBSSxFQUFFLEdBQUcsb0JBQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNwQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzdELE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUMsRUFBRTtnQkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtJQUVLLDBCQUEwQjs7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNDLENBQUM7S0FBQTtDQUNKO0FBckJELDhDQXFCQyJ9