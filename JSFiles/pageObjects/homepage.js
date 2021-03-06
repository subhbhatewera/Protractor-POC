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
exports.Homepage = void 0;
const protractor_1 = require("protractor");
//import { log4jsconfiguration } from "../log4jsconfiguration";
const log = require("../logging").default;
class Homepage {
    constructor() {
        this.mensPantsLink = protractor_1.element(protractor_1.by.css("[class*='site-nav'] a[href='/collections/mens-jeans-pants']"));
        this.mensTopsLink = protractor_1.element(protractor_1.by.css("[class*='site-nav'] a[href='/collections/mens-tops']"));
        this.womensPantsLink = protractor_1.element(protractor_1.by.css("[class*='site-nav'] a[href='/collections/womens-jeans-pants']"));
        this.womensTopsLink = protractor_1.element(protractor_1.by.css("[class*='site-nav'] a[href='/collections/womens-tops']"));
        this.outerwearLink = protractor_1.element(protractor_1.by.css("[class*='site-nav'] a[href='/collections/outerwear']"));
        this.skirtsLink = protractor_1.element(protractor_1.by.css("[class*='site-nav'] a[href='/collections/skirts']"));
        this.scarvesLink = protractor_1.element(protractor_1.by.css("[class*='site-nav'] a[href='/collections/scarves']"));
        this.loginLink = protractor_1.element(protractor_1.by.css("a[href*='login']"));
    }
    clickOnMensPantsLink() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on mensPantsLink");
            yield log.debug("Clicking on mensPantsLink");
            yield this.mensPantsLink.click();
        });
    }
    clickOnMensTopsLink() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on mensTopsLink");
            yield log.debug("Clicking on mensTopsLink");
            yield this.mensTopsLink.click();
        });
    }
    clickOnWomensPantsLink() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on womensPantsLink");
            yield log.debug("Clicking on womensPantsLink");
            yield this.womensPantsLink.click();
        });
    }
    clickOnWomensTopsLink() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on womensTopsLink");
            yield log.debug("Clicking on womensTopsLink");
            yield this.womensTopsLink.click();
        });
    }
    clickOnOuterwearLink() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on outerwearLink");
            yield log.debug("Clicking on outerwearLink");
            yield this.outerwearLink.click();
        });
    }
    clickOnSkirtsLink() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on skirtsLink");
            yield log.debug("Clicking on skirtsLink");
            yield this.skirtsLink.click();
        });
    }
    clickOnScarvesLink() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on scarvesLink");
            yield log.debug("Clicking on scarvesLink");
            yield this.scarvesLink.click();
        });
    }
    clickOnLoginLink() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on loginLink");
            yield log.debug("Clicking on loginLink");
            yield this.loginLink.click();
        });
    }
}
exports.Homepage = Homepage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9ob21lcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBaUU7QUFDakUsK0RBQStEO0FBRS9ELE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFMUMsTUFBYSxRQUFRO0lBVWpCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNkRBQTZELENBQUMsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNEQUFzRCxDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsZUFBZSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrREFBK0QsQ0FBQyxDQUFDLENBQUM7UUFDdEcsSUFBSSxDQUFDLGNBQWMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0RBQXdELENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxhQUFhLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNEQUFzRCxDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsVUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsQ0FBQyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUssb0JBQW9COztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFFLENBQUM7WUFDMUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDN0MsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUVLLG1CQUFtQjs7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBRSxDQUFDO1lBQ3pDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFFSyxzQkFBc0I7O1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUUsQ0FBQztZQUM1QyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUMvQyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkMsQ0FBQztLQUFBO0lBRUsscUJBQXFCOztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFFLENBQUM7WUFDM0MsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDOUMsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQUVLLG9CQUFvQjs7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFFSyxpQkFBaUI7O1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN0QyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUMxQyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEMsQ0FBQztLQUFBO0lBRUssa0JBQWtCOztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDdkMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDM0MsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25DLENBQUM7S0FBQTtJQUVLLGdCQUFnQjs7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQyxDQUFDO0tBQUE7Q0FDSjtBQXBFRCw0QkFvRUMifQ==