import { type Locator, type Page, expect } from '@playwright/test';


export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly signin: Locator;
    readonly pageTitle: RegExp;
    readonly pageURL: string;
    

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator("//input[@type='email']");
        this.password = page.locator("//input[@type='password']");
        this.signin = page.locator("//input[@type='submit']");
        this.pageTitle = /Salesforce/;
        this.pageURL=  'https://power-dream-1191.lightning.force.com/lightning/page/home';
    }
    

    async setUserName() {
        await this.username.type("afzalul94-nuzu@force.com",{delay:100});
    }

    async setPassword() {
        await this.password.type("SoftwareTesting@12",{delay:100});
    }

    async clickSignInbutton() {
        await this.signin.click();
        await this.page.waitForTimeout(10000);
    }

    async assertPageTitle() {
        await expect(this.page).toHaveTitle(this.pageTitle);
    }

    async assertPageURL() {
        await expect(this.page).toHaveURL(this.pageURL);
    }
}

export default LoginPage;