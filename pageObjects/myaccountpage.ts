import { by, element, ElementFinder } from "protractor";

const log = require('../logging').default;

export class MyAccount{
    myAccountHeading:ElementFinder;
    logOutLink:ElementFinder;
    customerDetails:ElementFinder;    
    accountLink:ElementFinder;

    constructor(){
        this.myAccountHeading=element(by.css("h1"));
        this.logOutLink=element(by.linkText("Log out"));
        this.customerDetails=element(by.xpath("(//div //p)[1]"));        
        this.accountLink=element(by.css("[class*='footer'] a[href*='/account']"));
    }

    async clickOnLogoutLink(){
        console.log("Clicking on logOutLink");
        await log.debug("Clicking on logOutLink");
        await this.logOutLink.click();
    }

    async clickOnAccountLink(){
        console.log("Clicking on accountLink");
        await log.debug("Clicking on accountLink");
        await this.accountLink.click();
    }
}