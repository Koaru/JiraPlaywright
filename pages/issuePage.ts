import { Page } from "@playwright/test";

export default class IssuePage {

    constructor(public page: Page) { }

    // Locators
    issueKey = () => this.page.locator('#key-val');
    moreBtn = () => this.page.locator('#opsbar-operations_more');
    deleteBtn = () => this.page.locator('#delete-issue');
    deleteIssueBtn = () => this.page.locator('#delete-issue-submit');
    editBtn = () => this.page.locator('#edit-issue');
    summary = () => this.page.locator('#summary');
    updateBtn = () => this.page.locator('#edit-issue-submit');
    summaryText = () => this.page.locator('#summary-val');
    cancelBtn = () => this.page.getByRole('button', { name: 'Cancel' });

    // Actions
    async getIssueKey() {
        return await this.issueKey().textContent();
    }

    async clickOnMoreBtn() {
        await this.moreBtn().click();
    }

    async clickOnDeleteBtn() {
        await this.deleteBtn().click();
    }

    async clickOnDeleteIssueBtn() {
        await this.deleteIssueBtn().click();

    }

    async clickOnEditBtn() {
        await this.editBtn().click();
    }

    async fillSummary(summary: string) {
        await this.page.waitForLoadState("networkidle");
        await this.summary().fill(summary);
    }

    async clickOnUpdateBtn() {
        await this.updateBtn().click();
    }

    async getSummary() {
        return await this.summaryText().textContent();
    }

    async isSummaryFieldEmpty() {
        return await this.page.getByText('You must specify a summary of the issue.').isVisible();
    }

    async clickOnCancelBtn() {
        await this.cancelBtn().click();
    }

    async deleteIssue() {
        await this.clickOnMoreBtn();
        await this.clickOnDeleteBtn();
        await this.clickOnDeleteIssueBtn();
    }

}