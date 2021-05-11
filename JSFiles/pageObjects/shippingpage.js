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
            let EC = protractor_1.browser.ExpectedConditions;
            protractor_1.browser.wait(EC.elementToBeClickable(this.continueToPaymentBtn), 15000);
            yield this.radioBtns.getAttribute("data-shipping-method-label-title").then((temp) => __awaiter(this, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmdwYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvc2hpcHBpbmdwYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFxRjtBQUVyRixNQUFhLFFBQVE7SUFLakI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0RBQXNELENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxvQkFBb0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxlQUFlLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUssY0FBYyxDQUFDLFVBQWlCOztZQUNsQyxJQUFJLEVBQUUsR0FBRyxvQkFBTyxDQUFDLGtCQUFrQixDQUFDO1lBQ3BDLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4RSxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGtDQUFrQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQU8sSUFBSSxFQUFDLEVBQUU7Z0JBQ3JGLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFHLENBQUMsRUFBRSxFQUFDO29CQUNsQyxJQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUM7d0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDcEQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ25FLE1BQU87cUJBQ1Y7eUJBQ0c7d0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUMsZ0ZBQWdGLENBQUMsQ0FBQztxQkFDNUc7aUJBQ0o7WUFDTixDQUFDLENBQUEsQ0FBQyxDQUFBO1FBQ0wsQ0FBQztLQUFBO0lBRUssMkJBQTJCOztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7WUFDaEQsSUFBSSxFQUFFLEdBQUcsb0JBQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNwQyxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEUsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsQ0FBQztLQUFBO0NBQ0o7QUFsQ0QsNEJBa0NDIn0=