import { by, element, ElementFinder } from "protractor";

const log = require('../logging').default;

export class Loginpage{
    emailField:ElementFinder;
    pwdField:ElementFinder;
    signinBtn:ElementFinder;

    constructor(){
        this.emailField=element(by.css("#CustomerEmail"));
        this.pwdField=element(by.css("#CustomerPassword"));
        this.signinBtn=element(by.css("[value='Sign In']")); 
    }

    async enterEmail(email:string){
        console.log("Entering email in emailField");
        await log.debug("Entering email in emailField");
        await this.emailField.sendKeys(email);
    }

    async enterPassword(password:string){
        console.log("Entering email in pwdField");
        await log.debug("Entering email in pwdField");
        await this.pwdField.sendKeys(password);
    }

    async clickOnSigninBtn(){
        console.log("Clicking on signinBtn");
        await log.debug("Clicking on signinBtn");
        await this.signinBtn.click();
    }
}