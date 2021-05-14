import { by, element, ElementFinder } from "protractor";

const log = require('../logging').default;

export class AddToCart{
    addToCartBtn:ElementFinder;

    constructor(){
        this.addToCartBtn=element(by.css("button[id*='Add']"));
    }

    async clickOnAddToCartBtn(){
        console.log("Click on addToCartBtn");
        await log.debug("Clicking on addToCartBtn");
        await this.addToCartBtn.click();
    }
}