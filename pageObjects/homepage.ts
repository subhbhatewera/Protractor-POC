import { by, element, ElementFinder, logging } from "protractor";
//import { log4jsconfiguration } from "../log4jsconfiguration";

const log = require("../logging").default;

export class Homepage{
    mensPantsLink:ElementFinder;
    mensTopsLink:ElementFinder;
    womensPantsLink:ElementFinder;
    womensTopsLink:ElementFinder;
    outerwearLink:ElementFinder;
    skirtsLink:ElementFinder;
    scarvesLink:ElementFinder;
    loginLink:ElementFinder;

    constructor(){
        this.mensPantsLink=element(by.css("[class*='site-nav'] a[href='/collections/mens-jeans-pants']"));
        this.mensTopsLink=element(by.css("[class*='site-nav'] a[href='/collections/mens-tops']"));
        this.womensPantsLink=element(by.css("[class*='site-nav'] a[href='/collections/womens-jeans-pants']")); 
        this.womensTopsLink=element(by.css("[class*='site-nav'] a[href='/collections/womens-tops']"));
        this.outerwearLink=element(by.css("[class*='site-nav'] a[href='/collections/outerwear']"));
        this.skirtsLink=element(by.css("[class*='site-nav'] a[href='/collections/skirts']"));
        this.scarvesLink=element(by.css("[class*='site-nav'] a[href='/collections/scarves']"));
        this.loginLink=element(by.css("a[href*='login']"));
    }

    async clickOnMensPantsLink(){
        console.log("Clicking on mensPantsLink" );
        await log.debug("Clicking on mensPantsLink");
        await this.mensPantsLink.click();
    }

    async clickOnMensTopsLink(){
        console.log("Clicking on mensTopsLink" );
        await log.debug("Clicking on mensTopsLink");
        await this.mensTopsLink.click();
    }

    async clickOnWomensPantsLink(){
        console.log("Clicking on womensPantsLink" );
        await log.debug("Clicking on womensPantsLink");
        await this.womensPantsLink.click();
    }

    async clickOnWomensTopsLink(){
        console.log("Clicking on womensTopsLink" );
        await log.debug("Clicking on womensTopsLink");
        await this.womensTopsLink.click();
    }

    async clickOnOuterwearLink(){
        console.log("Clicking on outerwearLink");
        await log.debug("Clicking on outerwearLink");
        await this.outerwearLink.click();
    }

    async clickOnSkirtsLink(){
        console.log("Clicking on skirtsLink");
        await log.debug("Clicking on skirtsLink");
        await this.skirtsLink.click();
    }

    async clickOnScarvesLink(){
        console.log("Clicking on scarvesLink");
        await log.debug("Clicking on scarvesLink");
        await this.scarvesLink.click();
    }

    async clickOnLoginLink(){
        console.log("Clicking on loginLink");
        await log.debug("Clicking on loginLink");
        await this.loginLink.click();
    }   
}