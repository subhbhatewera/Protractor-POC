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
cucumber_1.When('User select a {string}, select {string} and Checkout', (productName, shipmethod) => __awaiter(void 0, void 0, void 0, function* () {
    yield home.clickOnMensTopsLink();
    yield mensp.selectProduct(productName);
    yield addtc.clickOnAddToCartBtn();
    yield cout.clickOnCheckoutBtn();
    yield contact.clickOnContinueToShippingBtn();
    yield shipping.selectShipping(shipmethod);
    yield shipping.clickOnContinueToPaymentBtn();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VPcmRlcldpdGhTaGlwcGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9ucy9wbGFjZU9yZGVyV2l0aFNoaXBwaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsaURBQTBDO0FBQzFDLGdFQUF5RDtBQUN6RCxzREFBbUQ7QUFDbkQsa0ZBQTJFO0FBQzNFLHNEQUFtRDtBQUNuRCxnRUFBeUQ7QUFDekQsOERBQXVEO0FBRXZELElBQUksSUFBSSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0FBQzFCLElBQUksS0FBSyxHQUFHLElBQUkseUJBQVMsRUFBRSxDQUFDO0FBQzVCLElBQUksS0FBSyxHQUFHLElBQUkseUJBQVMsRUFBRSxDQUFDO0FBQzVCLElBQUksSUFBSSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0FBQzFCLElBQUksT0FBTyxHQUFHLElBQUksMkNBQWtCLEVBQUUsQ0FBQztBQUN2QyxJQUFJLFFBQVEsR0FBRyxJQUFJLHVCQUFRLEVBQUUsQ0FBQztBQUU5QixlQUFJLENBQUMsc0RBQXNELEVBQUUsQ0FBTyxXQUFrQixFQUFFLFVBQWlCLEVBQUMsRUFBRTtJQUN4RyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2pDLE1BQU0sS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxNQUFNLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2xDLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDaEMsTUFBTSxPQUFPLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUM3QyxNQUFNLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsTUFBTSxRQUFRLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztBQUMvQyxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=