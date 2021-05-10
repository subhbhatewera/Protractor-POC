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
exports.Payment = void 0;
const protractor_1 = require("protractor");
class Payment {
    constructor() {
        this.cardNumberField = protractor_1.element(protractor_1.by.css("[id='number']"));
        this.nameField = protractor_1.element(protractor_1.by.css("[placeholder*='Name on']"));
        this.expirationDateField = protractor_1.element(protractor_1.by.css("[id='expiry']"));
        this.securityCodeField = protractor_1.element(protractor_1.by.css("[placeholder*='Security']"));
        this.payNowBtn = protractor_1.element(protractor_1.by.css("[class*='shown'] #continue_button"));
    }
    enterCardNumber(cardNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.css("iframe[id*='card-fields-number']")).getWebElement());
            //Entering data one by one char becuase all the characters are not entered in one go
            console.log("Entering value in cardNumberField");
            for (let i = 0; i < cardNumber.length; i++) {
                let char = cardNumber.charAt(i);
                yield protractor_1.browser.actions().mouseMove(this.cardNumberField).click().sendKeys(char).perform();
            }
            yield protractor_1.browser.switchTo().defaultContent();
        });
    }
    enterName(nameOnCard) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.css("iframe[id*='card-fields-name']")).getWebElement());
            console.log("Entering value in nameField");
            yield this.nameField.sendKeys(nameOnCard);
            yield protractor_1.browser.switchTo().defaultContent();
        });
    }
    enterExpirationDate(expirationDate) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.css("[id*='card-fields-expiry']")).getWebElement());
            console.log("Entering value in expirationDateField");
            //Entering data one by one char becuase all the characters are not entered in one go
            for (let i = 0; i < expirationDate.length; i++) {
                let char = expirationDate.charAt(i);
                yield protractor_1.browser.actions().mouseMove(this.expirationDateField).click().sendKeys(char).perform();
            }
            yield protractor_1.browser.switchTo().defaultContent();
        });
    }
    enterSecutiryCode(secutiryCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.css("[id*='card-fields-verification']")).getWebElement());
            console.log("Entering value in securityCodeField");
            yield this.securityCodeField.sendKeys(secutiryCode);
            yield protractor_1.browser.switchTo().defaultContent();
        });
    }
    clickOnPayNowBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on payNowBtn");
            yield this.payNowBtn.click();
        });
    }
}
exports.Payment = Payment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudHBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9wYXltZW50cGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBaUU7QUFFakUsTUFBYSxPQUFPO0lBT2hCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLG1CQUFtQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxpQkFBaUIsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUssZUFBZSxDQUFDLFVBQWlCOztZQUNuQyxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztZQUNwRyxvRkFBb0Y7WUFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO1lBQ2hELEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFHLENBQUMsRUFBRyxFQUFDO2dCQUN6QyxJQUFJLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMs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