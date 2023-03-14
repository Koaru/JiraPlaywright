import { Page } from "@playwright/test";

export default class DashboardPage{

    constructor(public page: Page){}

    async clickOnProfile(){
        await this.page.click("#header-details-user-fullname");
    }

    async clickOnViewProfile(){
        await this.page.click("#view_profile");
    }

    async logoutMessageIsPresent(){
        return this.page.locator("#//div[@class='aui-message aui-message-info']").isVisible;
    }

    async clickOnLogoutBtn(){
        await this.page.click("#log_out");
    }

    async clickOnCreateBtn(){
        await this.page.click("#create_link");
    }

    async fillProjectField(project: string){
        await this.page.fill("#project-field", project);
    }

    async fillSummary(summary: string){
        await this.page.locator("#summary").type(summary);
    }

    async clickOnCreateIssueBtn(){
        await this.page.click("#create-issue-submit");
    }

    async clickOnCreateIssueHeading(){
        await this.page.getByRole('heading', { name: 'Create Issue' }).click();
    }

    async clickOnCreatedIssueLink(){
        await this.page.click('.issue-created-key.issue-link');
    }

    async getCreatedIssueText(){
        return await this.page.textContent('.issue-created-key.issue-link');
    }
}