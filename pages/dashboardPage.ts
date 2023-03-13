import { Page } from "@playwright/test";

export default class DashboardPage{

    constructor(public page: Page){}

    async clickOnProfile(){
        await this.page.click("#header-details-user-fullname");
    }

    async clickOnViewProfile(){
        await this.page.click("#view_profile");
    }
}