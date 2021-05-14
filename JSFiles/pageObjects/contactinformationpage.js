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
const log = require('../logging').default;
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
            yield log.debug("Entering value in giftCardField");
            yield this.giftCardField.sendKeys(giftcard);
        });
    }
    enterDiscountCode(discountcode) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Entering value in giftCardField");
            yield log.debug("Entering value in giftCardField");
            yield this.giftCardField.sendKeys(discountcode);
        });
    }
    clickOnApplyBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on applyBtn");
            yield log.debug("Clicking on applyBtn");
            this.applyBtn.click();
        });
    }
    clickOnContinueToShippingBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on continueToShippingBtn");
            yield log.debug("Clicking on continueToShippingBtn");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdGluZm9ybWF0aW9ucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2NvbnRhY3RpbmZvcm1hdGlvbnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWlFO0FBRWpFLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFMUMsTUFBYSxrQkFBa0I7SUFNM0I7UUFDSSxJQUFJLENBQUMscUJBQXFCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsYUFBYSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxjQUFjLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUssYUFBYSxDQUFDLFFBQWU7O1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUMvQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUNuRCxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtJQUVLLGlCQUFpQixDQUFDLFlBQW1COztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7WUFDL0MsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7WUFDbkQsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRCxDQUFDO0tBQUE7SUFFSyxlQUFlOztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDcEMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixDQUFDO0tBQUE7SUFFSyw0QkFBNEI7O1lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztZQUNqRCxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkMsQ0FBQztLQUFBO0lBRUssd0JBQXdCOztZQUMxQixJQUFJLEVBQUUsR0FBRyxvQkFBTyxDQUFDLGtCQUFrQixDQUFDO1lBQ3BDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEUsQ0FBQztLQUFBO0NBQ0o7QUF6Q0QsZ0RBeUNDIn0=