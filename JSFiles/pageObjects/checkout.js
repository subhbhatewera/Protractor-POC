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
exports.Checkout = void 0;
const protractor_1 = require("protractor");
class Checkout {
    constructor() {
        this.removeBtn = protractor_1.element(protractor_1.by.css("p [class*='cart__remove']"));
        this.quantityField = protractor_1.element(protractor_1.by.css("input[id*='updates_']"));
        this.checkoutBtn = protractor_1.element(protractor_1.by.css("[name='checkout']"));
        this.updateBtn = protractor_1.element(protractor_1.by.css("[class*='cart__update--large']"));
    }
    clickOnRemoveBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on removeBtn");
            yield this.removeBtn.click();
        });
    }
    enterQuantity(quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Entering value in quantityField");
            yield this.quantityField.sendKeys(quantity);
        });
    }
    clickOnUpdateBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on updateBtn");
            yield this.updateBtn.click();
        });
    }
    clickOnCheckoutBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on checkoutBtn");
            yield this.checkoutBtn.click();
        });
    }
}
exports.Checkout = Checkout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9jaGVja291dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxRQUFRO0lBTWpCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxhQUFhLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFSyxnQkFBZ0I7O1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUNyQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakMsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLFFBQWU7O1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUMvQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtJQUVLLGdCQUFnQjs7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQyxDQUFDO0tBQUE7SUFFSyxrQkFBa0I7O1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsQ0FBQztLQUFBO0NBRUo7QUFqQ0QsNEJBaUNDIn0=