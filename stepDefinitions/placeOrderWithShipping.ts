import { When } from "@cucumber/cucumber";
import { AddToCart } from "../pageObjects/addtocartpage";
import { Checkout } from "../pageObjects/checkout";
import { ContactInformation } from "../pageObjects/contactinformationpage";
import { Homepage } from "../pageObjects/homepage";
import { MensPants } from "../pageObjects/selectproduct";
import { Shipping } from "../pageObjects/shippingpage";

let home = new Homepage();
let mensp = new MensPants();
let addtc = new AddToCart();
let cout = new Checkout();
let contact = new ContactInformation();
let shipping = new Shipping();

When('User select a {string}, select {string} and Checkout', async (productName:string, shipmethod:string)=> {
    await home.clickOnMensTopsLink();
    await mensp.selectProduct(productName);
    await addtc.clickOnAddToCartBtn();
    await cout.clickOnCheckoutBtn();
    await contact.clickOnContinueToShippingBtn();
    await shipping.selectShipping(shipmethod);
    await shipping.clickOnContinueToPaymentBtn();
  });