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
exports.Shipping = void 0;
const protractor_1 = require("protractor");
const log = require('../logging').default;
class Shipping {
    constructor() {
        this.radioBtns = protractor_1.element.all(protractor_1.by.css("[class='radio-wrapper'] label span[class*='primary']"));
        this.continueToPaymentBtn = protractor_1.element(protractor_1.by.buttonText("Continue to payment"));
        this.shippingSpinner = protractor_1.element(protractor_1.by.css("svg[class*='spinner blank-slate']"));
    }
    selectShipping(shipmethod) {
        return __awaiter(this, void 0, void 0, function* () {
            let EC = protractor_1.browser.ExpectedConditions;
            protractor_1.browser.wait(EC.elementToBeClickable(this.continueToPaymentBtn), 15000);
            yield this.radioBtns.getAttribute("data-shipping-method-label-title").then((temp) => __awaiter(this, void 0, void 0, function* () {
                for (let i = 0; i < temp.length; i++) {
                    if (temp[i].includes(shipmethod)) {
                        console.log("Clicking on " + temp[i] + " radio button");
                        yield log.debug("Clicking on " + temp[i] + " radio button");
                        yield protractor_1.element.all(protractor_1.by.css("[class='radio__input']")).get(i).click();
                        break;
                    }
                }
            }));
        });
    }
    clickOnContinueToPaymentBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on continueToPaymentBtn");
            yield log.debug("Clicking on continueToPaymentBtn");
            let EC = protractor_1.browser.ExpectedConditions;
            protractor_1.browser.wait(EC.elementToBeClickable(this.continueToPaymentBtn), 15000);
            yield this.continueToPaymentBtn.click();
        });
    }
}
exports.Shipping = Shipping;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmdwYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvc2hpcHBpbmdwYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFxRjtBQUVyRixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBRTFDLE1BQWEsUUFBUTtJQUtqQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzREFBc0QsQ0FBQyxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLG9CQUFvQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGVBQWUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFSyxjQUFjLENBQUMsVUFBaUI7O1lBQ2xDLElBQUksRUFBRSxHQUFHLG9CQUFPLENBQUMsa0JBQWtCLENBQUM7WUFDcEMsb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBTyxJQUFJLEVBQUMsRUFBRTtnQkFDckYsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUcsQ0FBQyxFQUFFLEVBQUM7b0JBQ2xDLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBQzt3QkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUNwRCxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDeEQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ25FLE1BQU87cUJBQ1Y7aUJBQ0o7WUFDTixDQUFDLENBQUEsQ0FBQyxDQUFBO1FBQ0wsQ0FBQztLQUFBO0lBRUssMkJBQTJCOztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7WUFDaEQsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7WUFDcEQsSUFBSSxFQUFFLEdBQUcsb0JBQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNwQyxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEUsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsQ0FBQztLQUFBO0NBQ0o7QUFqQ0QsNEJBaUNDIn0=