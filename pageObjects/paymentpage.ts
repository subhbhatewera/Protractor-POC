import { browser, by, element, ElementFinder } from "protractor";

export class Payment{
    cardNumberField:ElementFinder;
    nameField:ElementFinder;
    expirationDateField:ElementFinder;
    securityCodeField:ElementFinder;
    payNowBtn:ElementFinder;

    constructor(){
        this.cardNumberField=element(by.css("[id='number']"));
        this.nameField=element(by.css("[placeholder*='Name on']"));
        this.expirationDateField=element(by.css("[id='expiry']"));
        this.securityCodeField=element(by.css("[placeholder*='Security']"));
        this.payNowBtn=element(by.css("[class*='shown'] #continue_button"));
    }

    async enterCardNumber(cardNumber:string){
        await browser.switchTo().frame(element(by.css("iframe[id*='card-fields-number']")).getWebElement());
        //Entering data one by one char becuase all the characters are not entered in one go
        console.log("Entering value in cardNumberField")
        for(let i = 0 ; i < cardNumber.length ; i ++){           
            let char = cardNumber.charAt(i);
            await browser.actions().mouseMove(this.cardNumberField).click().sendKeys(char).perform();                  
        }       
        await browser.switchTo().defaultContent();
    }

    async enterName(nameOnCard:string){        
        await browser.switchTo().frame(element(by.css("iframe[id*='card-fields-name']")).getWebElement());
        console.log("Entering value in nameField")
        await this.nameField.sendKeys(nameOnCard);
        await browser.switchTo().defaultContent();
     }

     async enterExpirationDate(expirationDate:string){
        await browser.switchTo().frame(element(by.css("[id*='card-fields-expiry']")).getWebElement()); 
        console.log("Entering value in expirationDateField")
        //Entering data one by one char becuase all the characters are not entered in one go
        for(let i = 0 ; i < expirationDate.length ; i ++){           
            let char = expirationDate.charAt(i);
            await browser.actions().mouseMove(this.expirationDateField).click().sendKeys(char).perform();                  
        } 
        await browser.switchTo().defaultContent();
    }

    async enterSecutiryCode(secutiryCode:string){
        await  browser.switchTo().frame(element(by.css("[id*='card-fields-verification']")).getWebElement());
        console.log("Entering value in securityCodeField")
        await this.securityCodeField.sendKeys(secutiryCode);
        await browser.switchTo().defaultContent();
    }

    async clickOnPayNowBtn(){  
        console.log("Clicking on payNowBtn")      
        await this.payNowBtn.click();
    }
}