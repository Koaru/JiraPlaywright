import { Page } from "@playwright/test";

//This class is containing the login page elements and actions performed on them
export default class LoginPage {

    constructor(public page: Page) { }

    // Locators
    userName = () => this.page.locator("#login-form-username");
    password = () => this.page.locator("#login-form-password");
    logInBtn = () => this.page.locator('#login');
    userNameError = () => this.page.locator("#usernameerror");

    // Actions
    // Fill the username
    async enterUserName(username: string) {
        await this.userName().type(username);
    }
    // Fill the password
    async enterPassword(pwd: string) {
        await this.password().fill(pwd);
    }
    // Click on login button
    async clickLogIn() {
        await this.logInBtn().click();
    }
    // Open the login page
    async navigateToLoginPage() {
        await this.page.goto("https://jira-auto.codecool.metastage.net/secure/Dashboard.jspa", { waitUntil: "networkidle" });
    }
    // Return a boolean based on the error message status
    async errorMessageIsPresent() {
        return this.userNameError().isVisible;
    }
    // This is a happy path test case for a login
    async login(username: string, pwd: string) {
        await this.navigateToLoginPage();
        await this.enterUserName(username);
        await this.enterPassword(pwd);
        await this.clickLogIn();
    }
}