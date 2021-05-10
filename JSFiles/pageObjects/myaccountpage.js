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
exports.MyAccount = void 0;
const protractor_1 = require("protractor");
class MyAccount {
    constructor() {
        this.myAccountHeading = protractor_1.element(protractor_1.by.css("h1"));
        this.logOutLink = protractor_1.element(protractor_1.by.linkText("Log out"));
        this.customerDetails = protractor_1.element(protractor_1.by.xpath("(//div //p)[1]"));
        this.accountLink = protractor_1.element(protractor_1.by.css("[class*='footer'] a[href*='/account']"));
    }
    clickOnLogoutLink() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on logOutLink");
            yield this.logOutLink.click();
        });
    }
    clickOnAccountLink() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on accountLink");
            yield this.accountLink.click();
        });
    }
}
exports.MyAccount = MyAccount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlhY2NvdW50cGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL215YWNjb3VudHBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsU0FBUztJQU1sQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxlQUFlLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVLLGlCQUFpQjs7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQyxDQUFDO0tBQUE7SUFFSyxrQkFBa0I7O1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtZQUN0QyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsQ0FBQztLQUFBO0NBQ0o7QUF0QkQsOEJBc0JDIn0=