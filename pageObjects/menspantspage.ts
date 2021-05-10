import { browser, by, element, ElementArrayFinder } from "protractor";

export class MensPants{
    productList:ElementArrayFinder;

    constructor(){
        this.productList=element.all(by.css(".h4"));
    }

    async selectProduct(productName:string){
      await this.productList.getText().then(async (text)=>{       
            for(let i = 0 ; i < text.length ; i++){
                if(text[i]==productName){
                    console.log("Clicking on "+text[i]);
                   await this.productList.get(i).click();
                    break;
                }
            }            
        })
    }
}