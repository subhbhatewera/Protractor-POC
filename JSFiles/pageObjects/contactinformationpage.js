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
exports.ContactInformation = void 0;
const protractor_1 = require("protractor");
class ContactInformation {
    constructor() {
        this.continueToShippingBtn = protractor_1.element(protractor_1.by.css("#continue_button"));
        this.giftCardField = protractor_1.element(protractor_1.by.css("#checkout_reduction_code"));
        this.applyBtn = protractor_1.element(protractor_1.by.css(".field__input-btn"));
    }
    enterGiftCard(giftcard) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Entering value in giftCardField");
            yield this.giftCardField.sendKeys(giftcard);
        });
    }
    enterDiscountCode(discountcode) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Entering value in giftCardField");
            yield this.giftCardField.sendKeys(discountcode);
        });
    }
    clickOnApplyBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on applyBtn");
            this.applyBtn.click();
        });
    }
    clickOnContinueToShippingBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on continueToShippingBtn");
            this.continueToShippingBtn.click();
        });
    }
}
exports.ContactInformation = ContactInformation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdGluZm9ybWF0aW9ucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2NvbnRhY3RpbmZvcm1hdGlvbnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsa0JBQWtCO0lBSzNCO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLGFBQWEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUssYUFBYSxDQUFDLFFBQWU7O1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUMvQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtJQUVLLGlCQUFpQixDQUFDLFlBQW1COztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7WUFDL0MsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRCxDQUFDO0tBQUE7SUFFSyxlQUFlOztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixDQUFDO0tBQUE7SUFFSyw0QkFBNEI7O1lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkMsQ0FBQztLQUFBO0NBQ0o7QUE5QkQsZ0RBOEJDIn0=