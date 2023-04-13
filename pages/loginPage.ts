import { Page } from "@playwright/test";

export default class LoginPage {

    constructor(public page: Page) { }

    // Locators
    userName = () => this.page.locator("#login-form-username");
    password = () => this.page.locator("#login-form-password");
    logInBtn = () => this.page.locator('#login');
    userNameError = () => this.page.locator("#usernameerror");

    // Actions
    async enterUserName(username: string) {
        await this.userName().type(username);
    }

    async enterPassword(pwd: string) {
        await this.password().fill(pwd);
    }

    async clickLogIn() {
        await this.logInBtn().click();
    }

    async navigateToLoginPage() {
        await this.page.goto("https://jira-auto.codecool.metastage.net/secure/Dashboard.jspa", { waitUntil: "networkidle" });
    }

    async errorMessageIsPresent() {
        return this.userNameError().isVisible;
    }

    async login(username: string, pwd: string) {
        await this.navigateToLoginPage();
        await this.enterUserName(username);
        await this.enterPassword(pwd);
        await this.clickLogIn();
    }
}