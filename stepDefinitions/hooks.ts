import { After, Before, Status } from "@cucumber/cucumber";
import { browser } from "protractor";

Before(async()=>{
    await browser.waitForAngularEnabled(false);
    await browser.get("https://gili-products.myshopify.com/"); 
    await browser.manage().window().maximize();
})

After(async function(scenario){
    if(scenario.result.status==Status.FAILED){
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot,"image/png"); 
    }
})