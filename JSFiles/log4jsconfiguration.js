"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log4jsconfiguration = void 0;
class log4jsconfiguration {
    static Log() {
        var log4js = require('log4js');
        log4js.configure('./log4js.json');
        let log = log4js.getLogger("default");
        return log;
    }
}
exports.log4jsconfiguration = log4jsconfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nNGpzY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xvZzRqc2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxtQkFBbUI7SUFFNUIsTUFBTSxDQUFDLEdBQUc7UUFDTixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNsQyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sR0FBRyxDQUFFO0lBQ2hCLENBQUM7Q0FDSjtBQVJELGtEQVFDIn0=