import { Page } from "@playwright/test";

export default class DashboardPage {

    constructor(public page: Page) { }

    // Locators
    profile = () => this.page.locator('#header-details-user-fullname');
    viewProfile = () => this.page.locator('#view_profile');
    logOutMessage = () => this.page.locator("#//div[@class='aui-message aui-message-info']");
    logOutBtn = () => this.page.locator('#log_out');
    createBtn = () => this.page.locator('#create_link');
    projectField = () => this.page.locator('#project-field');
    summary = () => this.page.locator('#summary');
    createIssueBtn = () => this.page.locator('#create-issue-submit');
    createIssueHeading = () => this.page.getByRole('heading', { name: 'Create Issue' });
    createdIssueLink = () => this.page.locator('.issue-created-key.issue-link');
    modalWindow = () => this.page.locator('#create-issue-dialog');
    createIssueCancelBtn = () => this.page.getByRole('button', { name: 'Cancel' });
    issueType = () => this.page.locator('#issuetype-field'); 

    // Actions
    async clickOnProfile() {
        await this.profile().click();
    }

    async clickOnViewProfile() {
        await this.viewProfile().click();
    }

    async logoutMessageIsPresent() {
        return this.logOutMessage().isVisible;
    }

    async clickOnLogoutBtn() {
        await this.logOutBtn().click();
    }

    async clickOnCreateBtn() {
        await this.createBtn().click();
    }

    async fillProjectField(project: string) {
        await this.projectField().fill(project);
    }

    async fillSummary(summary: string) {
        await this.summary().type(summary);
    }

    async clickOnCreateIssueBtn() {
        await this.createIssueBtn().click();
    }

    async clickOnCreateIssueHeading() {
        await this.createIssueHeading().click();
    }

    async clickOnCreatedIssueLink() {
        await this.createdIssueLink().click();
    }

    async getCreatedIssueText() {
        return await this.createdIssueLink().textContent();
    }

    async isModalWindowDisplayed() {
        return await this.modalWindow().isVisible();
    }

    async acceptAlert() {
        this.page.on("dialog", async (dialog) => {
            dialog.accept();
        })
    }

    async clickOnCreateIssueCancelBtn() {
        await this.createIssueCancelBtn().click();
    }

    async isSummaryFieldEmpty() {
        return await this.page.getByText('You must specify a summary of the issue.').isVisible();
    }

    async fillIssueTypeField(type: string) {
        await this.issueType().fill(type);
    }

    async openIssue(issue: string) {
        await this.page.goto(issue, { waitUntil: "networkidle" });
    }

    async createIssue(summary: string, project: string, type: string) {
        await this.clickOnCreateBtn();
        await this.fillProjectField(project);
        await this.clickOnCreateIssueHeading();
        await this.fillIssueTypeField(type);
        await this.clickOnCreateIssueBtn();
        await this.page.waitForLoadState("networkidle");
        await this.page.mouse.click(200, 200);
        await this.fillSummary(summary);
        await this.clickOnCreateIssueBtn();
    }
}