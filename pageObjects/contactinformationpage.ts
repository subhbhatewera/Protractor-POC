import { browser, by, element, ElementFinder } from "protractor";

export class ContactInformation{
    continueToShippingBtn:ElementFinder;
    giftCardField:ElementFinder;
    applyBtn:ElementFinder;
    appliedCodeTag:ElementFinder;
    
    constructor(){
        this.continueToShippingBtn=element(by.css("#continue_button"));
        this.giftCardField=element(by.css("#checkout_reduction_code"));
        this.applyBtn=element(by.css(".field__input-btn"));
        this.appliedCodeTag=element(by.css("[class='tag__wrapper']"));
    }

    async enterGiftCard(giftcard:string){
        console.log("Entering value in giftCardField");
        await this.giftCardField.sendKeys(giftcard);
    }

    async enterDiscountCode(discountcode:string){
        console.log("Entering value in giftCardField");
        await this.giftCardField.sendKeys(discountcode);
    }

    async clickOnApplyBtn(){
        console.log("Clicking on applyBtn");
        this.applyBtn.click();
    }

    async clickOnContinueToShippingBtn(){
        console.log("Clicking on continueToShippingBtn");
        this.continueToShippingBtn.click();
    }

    async validateCodeTagDisplayed(){
        let EC = browser.ExpectedConditions;
        await browser.wait(EC.visibilityOf(this.appliedCodeTag), 15000);
    }
}