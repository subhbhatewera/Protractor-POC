import { Config } from "protractor";

export let config:Config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs:['../features/PlaceSimpleOrder.feature'],
    cucumberOpts:{
        format: 'json:../report.json',
        require: './stepDefinitions/*.js'
    },
    onComplete:()=>{
        var reporter = require('cucumber-html-reporter');
        var options = {
         theme: "bootstrap",
         jsonFile: "./report.json", //Path of the Json report
         output: "./report.html",  //Path of the report that will be generated
         reportSuiteAsScenarios: true,
         scenarioTimestamp: true,
         launchReport: true,
         metadata: {
             "App Version":"1.0.0",
             "Test Environment": "PRODUCTION",
             "Browser": "Chrome  90.0.4430.93",
             "Platform": "Windows 10",
             "Parallel": "Scenarios",
             "Executed": "Local"
         }
     }; 
     reporter.generate(options);
    }
}