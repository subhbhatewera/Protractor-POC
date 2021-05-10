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
exports.Loginpage = void 0;
const protractor_1 = require("protractor");
class Loginpage {
    constructor() {
        this.emailField = protractor_1.element(protractor_1.by.css("#CustomerEmail"));
        this.pwdField = protractor_1.element(protractor_1.by.css("#CustomerPassword"));
        this.signinBtn = protractor_1.element(protractor_1.by.css("[value='Sign In']"));
    }
    enterEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Entering email in emailField");
            yield this.emailField.sendKeys(email);
        });
    }
    enterPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Entering email in pwdField");
            yield this.pwdField.sendKeys(password);
        });
    }
    clickOnSigninBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on signinBtn");
            yield this.signinBtn.click();
        });
    }
}
exports.Loginpage = Loginpage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvbG9naW5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF3RDtBQUV4RCxNQUFhLFNBQVM7SUFLbEI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUssVUFBVSxDQUFDLEtBQVk7O1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQTtZQUMzQyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxRQUFlOztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUE7WUFDekMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxDQUFDO0tBQUE7SUFFSyxnQkFBZ0I7O1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUNyQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakMsQ0FBQztLQUFBO0NBQ0o7QUF6QkQsOEJBeUJDIn0=