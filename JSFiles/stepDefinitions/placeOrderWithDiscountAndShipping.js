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
const cucumber_1 = require("@cucumber/cucumber");
const addtocartpage_1 = require("../pageObjects/addtocartpage");
const checkout_1 = require("../pageObjects/checkout");
const contactinformationpage_1 = require("../pageObjects/contactinformationpage");
const homepage_1 = require("../pageObjects/homepage");
const selectproduct_1 = require("../pageObjects/selectproduct");
const shippingpage_1 = require("../pageObjects/shippingpage");
let home = new homepage_1.Homepage();
let mensp = new selectproduct_1.MensPants();
let addtc = new addtocartpage_1.AddToCart();
let cout = new checkout_1.Checkout();
let contact = new contactinformationpage_1.ContactInformation();
let shipping = new shippingpage_1.Shipping();
cucumber_1.When('User select a {string}, enter {string}, select {string} and Checkout', (productName, discountCode, shipmethod) => __awaiter(void 0, void 0, void 0, function* () {
    yield home.clickOnWomensTopsLink();
    yield mensp.selectProduct(productName);
    yield addtc.clickOnAddToCartBtn();
    yield cout.clickOnCheckoutBtn();
    yield contact.enterDiscountCode(discountCode);
    yield contact.clickOnApplyBtn();
    yield contact.validateCodeTagDisplayed();
    yield contact.clickOnContinueToShippingBtn();
    yield shipping.selectShipping(shipmethod);
    yield shipping.clickOnContinueToPaymentBtn();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VPcmRlcldpdGhEaXNjb3VudEFuZFNoaXBwaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL3BsYWNlT3JkZXJXaXRoRGlzY291bnRBbmRTaGlwcGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGlEQUEwQztBQUMxQyxnRUFBeUQ7QUFDekQsc0RBQW1EO0FBQ25ELGtGQUEyRTtBQUMzRSxzREFBbUQ7QUFDbkQsZ0VBQXlEO0FBQ3pELDhEQUF1RDtBQUV2RCxJQUFJLElBQUksR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztBQUMxQixJQUFJLEtBQUssR0FBRyxJQUFJLHlCQUFTLEVBQUUsQ0FBQztBQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLHlCQUFTLEVBQUUsQ0FBQztBQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztBQUMxQixJQUFJLE9BQU8sR0FBRyxJQUFJLDJDQUFrQixFQUFFLENBQUM7QUFDdkMsSUFBSSxRQUFRLEdBQUcsSUFBSSx1QkFBUSxFQUFFLENBQUM7QUFFOUIsZUFBSSxDQUFDLHNFQUFzRSxFQUFFLENBQU8sV0FBa0IsRUFBRSxZQUFtQixFQUFFLFVBQWlCLEVBQUMsRUFBRTtJQUM3SSxNQUFNLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ25DLE1BQU0sS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxNQUFNLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2xDLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDaEMsTUFBTSxPQUFPLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUMsTUFBTSxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDaEMsTUFBTSxPQUFPLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUN6QyxNQUFNLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO0lBQzdDLE1BQU0sUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxNQUFNLFFBQVEsQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0FBQy9DLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==