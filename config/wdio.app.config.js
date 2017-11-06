
const host = '127.0.0.1';
const port = 4730;

const waitforTimeout = 30 * 60000;
const commandTimeout = 30 * 60000;

exports.config = {
    debug: false,
    specs: [
        './features/calculator.feature',
    ],

    reporters: ['allure','spec'],
    reporterOptions: {
        allure: {
            outputDir: './allure-results/'
        }
    },

    host: host,
    port: port,

    maxInstances: 1,

    capabilities: [
        {
            appiumVersion: '1.7.1',                 // Appium module version
            browserName: '',                        // browser name is empty for native apps
            platformName: 'Android',
            app: './app/LGCalculator.apk',          // Path to your native app
            appPackage: 'com.android.calculator2',  // Package name of your app
            appActivity: 'com.android.calculator2.Calculator', // App activity of the app
            platformVersion: '5.1.1',              // Android platform version of the device
            deviceName: 'THF755e0384',              // device name of the mobile device
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
        console.log('<<< NATIVE APP TESTS STARTED >>>');
    },

    afterScenario: function (scenario) {
        browser.screenshot();
     },

    onComplete: function () {
        console.log('<<< TESTING FINISHED >>>');
    }

};