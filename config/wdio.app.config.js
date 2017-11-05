
const host = '127.0.0.1';
const port = 4730;

const waitforTimeout = 30 * 60000;
const commandTimeout = 30 * 60000;

exports.config = {
    debug: false,
    specs: [
        './features/calculator.feature',
    ],

    reporters: ['spec'],
    reporterOptions: {
        outputDir: './output/reports'
    },

    host: host,
    port: port,

    maxInstances: 1,

    capabilities: [
        {
            appiumVersion: '1.7.1',
            browserName: '',
            platformName: 'Android',
            app: './app/LGCalculator.apk',
            appPackage: 'com.android.calculator2',
            appActivity: 'com.android.calculator2.Calculator',
            platformVersion: '5.1.1',
            deviceName: 'LGK3322fc71e93',
            waitforTimeout: waitforTimeout,
            commandTimeout: commandTimeout,
            newCommandTimeout: 30 * 60000,
        }
    ],

    services: ['appium'],
    appium: {
        waitStartTime: 6000,
        waitforTimeout: waitforTimeout,
        command: 'appium',
        logFileName: 'appium.log',
        args: {
            address: host,
            port: port,
            commandTimeout: commandTimeout,
            sessionOverride: true,
            debugLogSpacing: true
        }
    },

    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    //name of package is generated like wdio-<framework_name>-framework in source code of wdio runner
    framework: 'cucumber',
    cucumberOpts: {
        compiler: ['ts:ts-node/register'],
        backtrace: true,
        failFast: false,
        timeout: 5 * 60 * 60000,
        require: ['./stepDefinitions/calcSteps.ts']
    },

    /**
     * hooks
     */
    onPrepare: function () {

        const chai = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
        console.log('<<< TESTING STARTED >>>');
    },

    afterCommand: function (commandName, args, result, error) {
        browser.screenshot();
    },

    onComplete: function () {

        console.log('<<< TESTING FINISHED >>>');
    }

};