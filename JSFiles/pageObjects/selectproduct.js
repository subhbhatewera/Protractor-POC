"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensPants = void 0;
const protractor_1 = require("protractor");
class MensPants {
    constructor() {
        this.productList = protractor_1.element.all(protractor_1.by.css(".h4"));
    }
    selectProduct(productName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.productList.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                for (let i = 0; i < text.length; i++) {
                    if (text[i] == productName) {
                        console.log("Clicking on " + text[i]);
                        yield this.productList.get(i).click();
                        break;
                    }
                }
            }));
        });
    }
}
exports.MensPants = MensPants;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0cHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL3NlbGVjdHByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNFO0FBRXRFLE1BQWEsU0FBUztJQUdsQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFSyxhQUFhLENBQUMsV0FBa0I7O1lBQ3BDLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBTyxJQUFJLEVBQUMsRUFBRTtnQkFDOUMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUcsQ0FBQyxFQUFFLEVBQUM7b0JBQ2xDLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFFLFdBQVcsRUFBQzt3QkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ3JDLE1BQU07cUJBQ1Q7aUJBQ0o7WUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUFBO0NBQ0o7QUFsQkQsOEJBa0JDIn0=