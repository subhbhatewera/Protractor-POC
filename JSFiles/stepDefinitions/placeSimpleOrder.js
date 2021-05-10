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
const protractor_1 = require("protractor");
const addtocartpage_1 = require("../pageObjects/addtocartpage");
const checkout_1 = require("../pageObjects/checkout");
const contactinformationpage_1 = require("../pageObjects/contactinformationpage");
const homepage_1 = require("../pageObjects/homepage");
const loginpage_1 = require("../pageObjects/loginpage");
const menspantspage_1 = require("../pageObjects/menspantspage");
const myaccountpage_1 = require("../pageObjects/myaccountpage");
const orderconfirmationpage_1 = require("../pageObjects/orderconfirmationpage");
const paymentpage_1 = require("../pageObjects/paymentpage");
const shippingpage_1 = require("../pageObjects/shippingpage");
let home = new homepage_1.Homepage();
let login = new loginpage_1.Loginpage();
let myaccount = new myaccountpage_1.MyAccount();
let mensp = new menspantspage_1.MensPants();
let addtc = new addtocartpage_1.AddToCart();
let cout = new checkout_1.Checkout();
let contact = new contactinformationpage_1.ContactInformation();
let shipping = new shippingpage_1.Shipping();
let pay = new paymentpage_1.Payment();
let orderconf = new orderconfirmationpage_1.OrderConfirmation();
let EC = protractor_1.browser.ExpectedConditions;
cucumber_1.Given('Enter {string}, {string} and login', (email, pwd) => __awaiter(void 0, void 0, void 0, function* () {
    yield home.clickOnLoginLink();
    yield login.enterEmail(email);
    yield login.enterPassword(pwd);
    yield login.clickOnSigninBtn();
}));
cucumber_1.When('User select a {string} and Checkout', (productName) => __awaiter(void 0, void 0, void 0, function* () {
    yield home.clickOnMensPantsLink();
    yield mensp.selectProduct(productName);
    yield addtc.clickOnAddToCartBtn();
    yield cout.clickOnCheckoutBtn();
    yield contact.clickOnContinueToShippingBtn();
    yield shipping.clickOnContinueToPaymentBtn();
}));
cucumber_1.When("Make Payment using {string}, {string}, {string} and {string}", (cardNumber, name, expirationDate, securityCode) => __awaiter(void 0, void 0, void 0, function* () {
    yield pay.enterCardNumber(cardNumber);
    yield pay.enterName(name);
    yield pay.enterExpirationDate(expirationDate);
    yield pay.enterSecutiryCode(securityCode);
    yield pay.clickOnPayNowBtn();
}));
cucumber_1.Then('Order will be placed and Order number will be returned', () => __awaiter(void 0, void 0, void 0, function* () {
    yield orderconf.getOrderNumber();
    yield orderconf.clickOnContinueShoppingBtn();
    yield myaccount.clickOnAccountLink();
    yield myaccount.clickOnLogoutLink();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VTaW1wbGVPcmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9ucy9wbGFjZVNpbXBsZU9yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsaURBQXVEO0FBQ3ZELDJDQUFxQztBQUNyQyxnRUFBeUQ7QUFDekQsc0RBQW1EO0FBQ25ELGtGQUEyRTtBQUMzRSxzREFBbUQ7QUFDbkQsd0RBQXFEO0FBQ3JELGdFQUF5RDtBQUN6RCxnRUFBeUQ7QUFDekQsZ0ZBQXlFO0FBQ3pFLDREQUFxRDtBQUNyRCw4REFBdUQ7QUFFdkQsSUFBSSxJQUFJLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFDMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFDNUIsSUFBSSxTQUFTLEdBQUcsSUFBSSx5QkFBUyxFQUFFLENBQUM7QUFDaEMsSUFBSSxLQUFLLEdBQUcsSUFBSSx5QkFBUyxFQUFFLENBQUM7QUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSx5QkFBUyxFQUFFLENBQUM7QUFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFDMUIsSUFBSSxPQUFPLEdBQUcsSUFBSSwyQ0FBa0IsRUFBRSxDQUFDO0FBQ3ZDLElBQUksUUFBUSxHQUFHLElBQUksdUJBQVEsRUFBRSxDQUFDO0FBQzlCLElBQUksR0FBRyxHQUFHLElBQUkscUJBQU8sRUFBRSxDQUFDO0FBQ3hCLElBQUksU0FBUyxHQUFHLElBQUkseUNBQWlCLEVBQUUsQ0FBQztBQUN4QyxJQUFJLEVBQUUsR0FBRyxvQkFBTyxDQUFDLGtCQUFrQixDQUFDO0FBRXBDLGdCQUFLLENBQUMsb0NBQW9DLEVBQUUsQ0FBTyxLQUFZLEVBQUUsR0FBVSxFQUFDLEVBQUU7SUFDMUUsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM5QixNQUFNLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsTUFBTSxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLE1BQU0sS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDakMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVMLGVBQUksQ0FBQyxxQ0FBcUMsRUFBRSxDQUFPLFdBQWtCLEVBQUMsRUFBRTtJQUNwRSxNQUFNLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2xDLE1BQU0sS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxNQUFNLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2xDLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDaEMsTUFBTSxPQUFPLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUM3QyxNQUFNLFFBQVEsQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0FBQy9DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFTCxlQUFJLENBQUMsOERBQThELEVBQUUsQ0FBTSxVQUFpQixFQUFFLElBQVcsRUFBRSxjQUFxQixFQUFFLFlBQW1CLEVBQUMsRUFBRTtJQUNySixNQUFNLEdBQUcsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsTUFBTSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sR0FBRyxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFDLE1BQU0sR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDaEMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLGVBQUksQ0FBQyx3REFBd0QsRUFBRSxHQUFRLEVBQUU7SUFDdEUsTUFBTSxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDakMsTUFBTSxTQUFTLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztJQUM3QyxNQUFNLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3JDLE1BQU0sU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFDckMsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9