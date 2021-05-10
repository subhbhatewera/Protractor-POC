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
class Shipping {
    constructor() {
        this.radioBtns = protractor_1.element.all(protractor_1.by.css("[class='radio-wrapper'] label span[class*='primary']"));
        this.continueToPaymentBtn = protractor_1.element(protractor_1.by.buttonText("Continue to payment"));
        this.shippingSpinner = protractor_1.element(protractor_1.by.css("svg[class*='spinner blank-slate']"));
    }
    selectShipping(shipmethod) {
        return __awaiter(this, void 0, void 0, function* () {
            this.radioBtns.getAttribute("data-shipping-method-label-title").then((temp) => __awaiter(this, void 0, void 0, function* () {
                for (let i = 0; i < temp.length; i++) {
                    if (temp[i].includes(shipmethod)) {
                        console.log("Clicking on " + temp[i] + " radio button");
                        yield protractor_1.element.all(protractor_1.by.css("[class='radio__input']")).get(i).click();
                        break;
                    }
                    else {
                        console.log(shipmethod + " option is not available so Order will be placed using default shipping option");
                    }
                }
            }));
        });
    }
    clickOnContinueToPaymentBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on continueToPaymentBtn");
            let EC = protractor_1.browser.ExpectedConditions;
            protractor_1.browser.wait(EC.elementToBeClickable(this.continueToPaymentBtn), 15000);
            yield this.continueToPaymentBtn.click();
        });
    }
}
exports.Shipping = Shipping;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmdwYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvc2hpcHBpbmdwYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFxRjtBQUVyRixNQUFhLFFBQVE7SUFLakI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0RBQXNELENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxvQkFBb0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxlQUFlLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUssY0FBYyxDQUFDLFVBQWlCOztZQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFPLElBQUksRUFBQyxFQUFFO2dCQUMvRSxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRyxDQUFDLEVBQUUsRUFBQztvQkFDbEMsSUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFDO3dCQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUMsZUFBZSxDQUFDLENBQUM7d0JBQ3BELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNuRSxNQUFPO3FCQUNWO3lCQUNHO3dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFDLGdGQUFnRixDQUFDLENBQUM7cUJBQzVHO2lCQUNKO1lBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQTtRQUNMLENBQUM7S0FBQTtJQUVLLDJCQUEyQjs7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2hELElBQUksRUFBRSxHQUFHLG9CQUFPLENBQUMsa0JBQWtCLENBQUM7WUFDcEMsb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVDLENBQUM7S0FBQTtDQUNKO0FBaENELDRCQWdDQyJ9