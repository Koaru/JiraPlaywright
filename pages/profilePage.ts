import { Page } from "@playwright/test";

//This class is containing the profile page elements and actions performed on them
export default class ProfilePage {

    constructor(public page: Page) { }

    // Locators
    userName = () => this.page.locator('#up-d-username');

    // Actions

    // Get the username as a text
    async getUserName() {
        return await this.userName().textContent();
    }

}