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
const log = require('../logging').default;
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
                        yield log.debug("Clicking on " + text[i]);
                        yield this.productList.get(i).click();
                        break;
                    }
                }
            }));
        });
    }
}
exports.MensPants = MensPants;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0cHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL3NlbGVjdHByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNFO0FBRXRFLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFMUMsTUFBYSxTQUFTO0lBR2xCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVLLGFBQWEsQ0FBQyxXQUFrQjs7WUFDcEMsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFPLElBQUksRUFBQyxFQUFFO2dCQUM5QyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRyxDQUFDLEVBQUUsRUFBQztvQkFDbEMsSUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUUsV0FBVyxFQUFDO3dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDeEMsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDdEMsTUFBTTtxQkFDVDtpQkFDSjtZQUNMLENBQUMsQ0FBQSxDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7Q0FDSjtBQW5CRCw4QkFtQkMifQ==