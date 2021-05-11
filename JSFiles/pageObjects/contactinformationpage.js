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
        this.appliedCodeTag = protractor_1.element(protractor_1.by.css("[class='tag__wrapper']"));
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
    validateCodeTagDisplayed() {
        return __awaiter(this, void 0, void 0, function* () {
            let EC = protractor_1.browser.ExpectedConditions;
            yield protractor_1.browser.wait(EC.visibilityOf(this.appliedCodeTag), 15000);
        });
    }
}
exports.ContactInformation = ContactInformation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdGluZm9ybWF0aW9ucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2NvbnRhY3RpbmZvcm1hdGlvbnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWlFO0FBRWpFLE1BQWEsa0JBQWtCO0lBTTNCO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLGFBQWEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsY0FBYyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVLLGFBQWEsQ0FBQyxRQUFlOztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7WUFDL0MsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxDQUFDO0tBQUE7SUFFSyxpQkFBaUIsQ0FBQyxZQUFtQjs7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEQsQ0FBQztLQUFBO0lBRUssZUFBZTs7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsQ0FBQztLQUFBO0lBRUssNEJBQTRCOztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLENBQUM7S0FBQTtJQUVLLHdCQUF3Qjs7WUFDMUIsSUFBSSxFQUFFLEdBQUcsb0JBQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNwQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLENBQUM7S0FBQTtDQUNKO0FBckNELGdEQXFDQyJ9