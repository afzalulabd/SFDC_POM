# SFDC_POM
Applying page object model pattern for automating Salesforce application using Playwright javascript.

Framework Approach :
1.source folder(src) -> pages,resources,tests,utils .
Source folder splitted into four modules.

2.pages -> Contains locators and functionalities of elements.

3.tests -> Added two scenarios
1. Login Salesforce test with POM
2. Login Salesforce test without POM

Please execute below command in terminal to automate test case :
Note : whitelist ip address in Network section to skip verification code for Salesforce application.
Test case execution : npx playwright test ./tests/LoginSFDCPOM.spec.ts --headed

4.playwright.config.ts - > Screenshot , Reporter , Parallel execution , Headless , Video.

5.Reports added with screenshot and video.Please execute below command to see report

Command :  npx playwright show-report


Scenario :  Login to Salesforce application 
Framework Status : In Progress
Framework Enhancements :
1. Data needs to be maintained external files.
2. More pages needs to added
3. Report needs to be enhanced.
