"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['../features/PlaceSimpleOrder.feature'],
    cucumberOpts: {
        format: 'json:../report.json',
        require: './stepDefinitions/*.js'
    },
    onComplete: () => {
        var reporter = require('cucumber-html-reporter');
        var options = {
            theme: "bootstrap",
            jsonFile: "./report.json",
            output: "./report.html",
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "1.0.0",
                "Test Environment": "PRODUCTION",
                "Browser": "Chrome  90.0.4430.93",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Local"
            }
        };
        reporter.generate(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRVcsUUFBQSxNQUFNLEdBQVU7SUFDdkIsYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsS0FBSyxFQUFDLENBQUMsc0NBQXNDLENBQUM7SUFDOUMsWUFBWSxFQUFDO1FBQ1QsTUFBTSxFQUFFLHFCQUFxQjtRQUM3QixPQUFPLEVBQUUsd0JBQXdCO0tBQ3BDO0lBQ0QsVUFBVSxFQUFDLEdBQUUsRUFBRTtRQUNYLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2pELElBQUksT0FBTyxHQUFHO1lBQ2IsS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLGVBQWU7WUFDekIsTUFBTSxFQUFFLGVBQWU7WUFDdkIsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUMsT0FBTztnQkFDckIsa0JBQWtCLEVBQUUsWUFBWTtnQkFDaEMsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsT0FBTzthQUN0QjtTQUNKLENBQUM7UUFDRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDSixDQUFBIn0=