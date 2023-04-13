import { Page } from "@playwright/test";

export default class ProfilePage {

    constructor(public page: Page) { }

    // Locators
    userName = () => this.page.locator('#up-d-username');

    // Actions
    async getUserName() {
        return await this.userName().textContent();
    }

}