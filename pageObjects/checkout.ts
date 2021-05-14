import { by, element, ElementFinder } from "protractor";

const log = require('../logging').default;

export class Checkout{
    removeBtn:ElementFinder;
    quantityField:ElementFinder;
    checkoutBtn:ElementFinder;
    updateBtn:ElementFinder;

    constructor(){
        this.removeBtn=element(by.css("p [class*='cart__remove']"));
        this.quantityField=element(by.css("input[id*='updates_']"));
        this.checkoutBtn=element(by.css("[name='checkout']"));
        this.updateBtn=element(by.css("[class*='cart__update--large']"));
    }
    
    async clickOnRemoveBtn(){
        console.log("Clicking on removeBtn");
        await log.debug("Clicking on removeBtn");
        await this.removeBtn.click();
    }

    async enterQuantity(quantity:string){
        console.log("Entering value in quantityField");
        await log.debug("Entering value in quantityField");
        await this.quantityField.sendKeys(quantity);
    }

    async clickOnUpdateBtn(){
        console.log("Clicking on updateBtn");
        await log.debug("Clicking on updateBtn");
        await this.updateBtn.click();
    }

    async clickOnCheckoutBtn(){
        console.log("Clicking on checkoutBtn");
        await log.debug("Clicking on checkoutBtn");
        await this.checkoutBtn.click();
    }

}