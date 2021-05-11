import { Given, Then, When } from "@cucumber/cucumber";
import { browser } from "protractor";
import { AddToCart } from "../pageObjects/addtocartpage";
import { Checkout } from "../pageObjects/checkout";
import { ContactInformation } from "../pageObjects/contactinformationpage";
import { Homepage } from "../pageObjects/homepage";
import { Loginpage } from "../pageObjects/loginpage";
import { MensPants } from "../pageObjects/selectproduct";
import { MyAccount } from "../pageObjects/myaccountpage";
import { OrderConfirmation } from "../pageObjects/orderconfirmationpage";
import { Payment } from "../pageObjects/paymentpage";
import { Shipping } from "../pageObjects/shippingpage";

let home = new Homepage();
let login = new Loginpage();
let myaccount = new MyAccount();
let mensp = new MensPants();
let addtc = new AddToCart();
let cout = new Checkout();
let contact = new ContactInformation();
let shipping = new Shipping();
let pay = new Payment();
let orderconf = new OrderConfirmation();
let EC = browser.ExpectedConditions;

Given('Enter {string}, {string} and login', async (email:string, pwd:string)=> {
    await home.clickOnLoginLink();
    await login.enterEmail(email);
    await login.enterPassword(pwd);
    await login.clickOnSigninBtn();
  });

When('User select a {string} and Checkout', async (productName:string)=> {
    await home.clickOnMensPantsLink();
    await mensp.selectProduct(productName);
    await addtc.clickOnAddToCartBtn();
    await cout.clickOnCheckoutBtn();
    await contact.clickOnContinueToShippingBtn();
    await shipping.clickOnContinueToPaymentBtn();
  });

When("Make Payment using {string}, {string}, {string} and {string}", async(cardNumber:string, name:string, expirationDate:string, securityCode:string)=>{
   await pay.enterCardNumber(cardNumber);
   await pay.enterName(name);
   await pay.enterExpirationDate(expirationDate);
   await pay.enterSecutiryCode(securityCode);
   await pay.clickOnPayNowBtn();
})

Then('Order will be placed and Order number will be returned', async ()=> {
   await orderconf.getOrderNumber();
   await orderconf.clickOnContinueShoppingBtn();
   await myaccount.clickOnAccountLink();
   await myaccount.clickOnLogoutLink();
  });
