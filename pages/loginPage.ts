import { Page } from "@playwright/test";

export default class LoginPage{

    constructor(public page: Page){}

    async enterUserName(username: string){
       await this.page.locator("#login-form-username").type(username);
    }

    async enterPassword(pwd: string){
        await this.page.locator("#login-form-password").type(pwd);
    }

    async clickLogIn(){
        await this.page.click("#login");
    }

    async navigateToLoginPage(){
        await this.page.goto("https://jira-auto.codecool.metastage.net/secure/Dashboard.jspa")
    }

    async errorMessageIsPresent(){
        return this.page.locator("#usernameerror").isVisible;
    }

    async login(username: string, pwd: string){
        await this.navigateToLoginPage();
        await this.enterUserName(username);
        await this.enterPassword(pwd);
        await this.clickLogIn();
    }
}