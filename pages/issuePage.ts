import { Page } from "@playwright/test";

export default class IssuePage {

    constructor(public page: Page) { }

    async getIssueKey() {
        return await this.page.textContent("#key-val");
    }

    async clickOnMoreBtn() {
        await this.page.click("#opsbar-operations_more");
    }

    async clickOnDeleteBtn() {
        await this.page.click("#delete-issue");
    }

    async clickOnDeleteIssueBtn() {
        await this.page.click("#delete-issue-submit");

    }

    async clickOnEditBtn() {
        await this.page.click("#edit-issue");
    }

    async fillSummary(summary: string) {
        await this.page.waitForLoadState("networkidle");
        await this.page.fill("#summary", summary);
    }

    async clickOnUpdateBtn() {
        await this.page.click("#edit-issue-submit");
    }

    async getSummary() {
        return await this.page.textContent("#summary-val");
    }

    async deleteIssue() {
        await this.clickOnMoreBtn();
        await this.clickOnDeleteBtn();
        await this.clickOnDeleteIssueBtn();
    }

}