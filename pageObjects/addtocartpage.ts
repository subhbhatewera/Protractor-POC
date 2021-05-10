import { by, element, ElementFinder } from "protractor";

export class AddToCart{
    addToCartBtn:ElementFinder;

    constructor(){
        this.addToCartBtn=element(by.css("button[id*='Add']"));
    }

    async clickOnAddToCartBtn(){
        console.log("Click on addToCartBtn");
        await this.addToCartBtn.click();
    }
}