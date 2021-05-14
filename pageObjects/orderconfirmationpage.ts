import { browser, by, element, ElementFinder } from "protractor";

const log = require('../logging').default;

export class OrderConfirmation{
    orderNumber:ElementFinder;
    continueShoppingBtn:ElementFinder;

    constructor(){
        this.orderNumber=element(by.css("[class='os-order-number']")); 
        this.continueShoppingBtn=element(by.css("[class='step__footer__continue-btn btn']"));
    }

    async getOrderNumber(){
        let EC = browser.ExpectedConditions;
        await browser.wait(EC.visibilityOf(this.orderNumber), 20000);        
        await this.orderNumber.getText().then(async (orderno)=>{
            console.log("Order number is -> "+orderno);
            await log.debug("Order number is -> "+orderno);
        })
    }

    async clickOnContinueShoppingBtn(){
        console.log("Clicking on continueShoppingBtn");
        await log.debug("Clicking on continueShoppingBtn");
        await this.continueShoppingBtn.click();
    }
}