import { test, type Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page';


const URL = 'https://power-dream-1191.lightning.force.com';
let loginSFDCPage: LoginPage;
//let topMenuPage: TopMenuPage;


test.beforeEach(async ({page}) => {
    await page.goto(URL);
    await page.waitForTimeout(5000);
    loginSFDCPage = new LoginPage(page);
});

// async function clickGetStarted(page: Page) {
//     await homePage.clickGetStarted();
//     topMenuPage = new TopMenuPage(page);
// }

async function clickGetStarted(page: Page) {
    await loginSFDCPage.setUserName();
    await loginSFDCPage.setPassword();
    await loginSFDCPage.clickSignInbutton();
    //topMenuPage = new TopMenuPage(page);
}

test.describe('Login Salesforce website with valid credentials.', () => {


    test('get started login to Salesforce trial version', async ({ page }) => {
        // Act
        await clickGetStarted(page);
        //Assert
        await loginSFDCPage.assertPageTitle();
        await loginSFDCPage.assertPageURL();
       
    });

    

   
    
    
    
    // test('check Java page', async ({ page }) => {
    //     await test.step('Act', async () => {
    //         await clickGetStarted(page);
    //         await topMenuPage.hoverNode();
    //         await topMenuPage.clickJava();
    //     });
      
    //     await test.step('Assert', async () => {
    //         await topMenuPage.assertPageUrl(pageUrl);
    //         await topMenuPage.assertNodeDescriptionNotVisible();
    //         await topMenuPage.assertJavaDescriptionVisible();
    //     });
    // });
});