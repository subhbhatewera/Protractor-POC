import { browser, by, element, ElementFinder } from "protractor";

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
        await this.orderNumber.getText().then((orderno)=>{
            console.log(orderno);
        })
    }

    async clickOnContinueShoppingBtn(){
        console.log("Clicking on continueShoppingBtn");
        await this.continueShoppingBtn.click();
    }
}