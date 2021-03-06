import { browser, by, element, ElementArrayFinder, ElementFinder } from "protractor";

const log = require('../logging').default;

export class Shipping{
    radioBtns:ElementArrayFinder;
    continueToPaymentBtn:ElementFinder;
    shippingSpinner:ElementFinder;
    
    constructor(){
        this.radioBtns=element.all(by.css("[class='radio-wrapper'] label span[class*='primary']"));
        this.continueToPaymentBtn=element(by.buttonText("Continue to payment"));
        this.shippingSpinner=element(by.css("svg[class*='spinner blank-slate']"));
    }

    async selectShipping(shipmethod:string){     
        let EC = browser.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(this.continueToPaymentBtn), 15000);
        await this.radioBtns.getAttribute("data-shipping-method-label-title").then(async (temp)=>{            
            for(let i = 0 ; i < temp.length ; i++){
                if(temp[i].includes(shipmethod)){                    
                    console.log("Clicking on "+temp[i]+" radio button");    
                    await log.debug("Clicking on "+temp[i]+" radio button");                                 
                    await element.all(by.css("[class='radio__input']")).get(i).click();
                    break ;
                }
            }
       })        
    }    

    async clickOnContinueToPaymentBtn(){
        console.log("Clicking on continueToPaymentBtn");
        await log.debug("Clicking on continueToPaymentBtn");
        let EC = browser.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(this.continueToPaymentBtn), 15000);
        await this.continueToPaymentBtn.click();
    }
}