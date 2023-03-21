import { Page } from "@playwright/test";

export default class ProfilePage {

    constructor(public page: Page) { }

    async getUserName() {
        return await this.page.textContent("#up-d-username");
    }

}