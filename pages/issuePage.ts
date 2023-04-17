import { Page } from "@playwright/test";

//This class is containing the issue page elements and actions performed on them
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

    // Get the issue key as text
    async getIssueKey() {
        return await this.issueKey().textContent();
    }
    // Click on the more button
    async clickOnMoreBtn() {
        await this.moreBtn().click();
    }
    // Click on the delete button
    async clickOnDeleteBtn() {
        await this.deleteBtn().click();
    }
    // Click on the delete issue button
    async clickOnDeleteIssueBtn() {
        await this.deleteIssueBtn().click();

    }
    // Click on the edit button
    async clickOnEditBtn() {
        await this.editBtn().click();
    }
    // Fill the summary
    async fillSummary(summary: string) {
        await this.page.waitForLoadState("networkidle");
        await this.summary().fill(summary);
    }
    // Click on the update button
    async clickOnUpdateBtn() {
        await this.updateBtn().click();
    }
    // Get the summary as text
    async getSummary() {
        return await this.summaryText().textContent();
    }
    // Return a boolean based on the summary field satus
    async isSummaryFieldEmpty() {
        return await this.page.getByText('You must specify a summary of the issue.').isVisible();
    }
    // Click on the cancel button
    async clickOnCancelBtn() {
        await this.cancelBtn().click();
    }
    // Click on the delete issue button
    async deleteIssue() {
        await this.clickOnMoreBtn();
        await this.clickOnDeleteBtn();
        await this.clickOnDeleteIssueBtn();
    }

}