import { Page } from "@playwright/test";

//This class is containing the dashboard page elements and actions performed on them
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

    // Click on the profile button
    async clickOnProfile() {
        await this.profile().click();
    }
    // Click on the view profile link
    async clickOnViewProfile() {
        await this.viewProfile().click();
    }
    // The log out message is present after logging out
    async logoutMessageIsPresent() {
        return this.logOutMessage().isVisible;
    }
    // Click on the log out button
    async clickOnLogoutBtn() {
        await this.logOutBtn().click();
    }
    // Click on the create button
    async clickOnCreateBtn() {
        await this.createBtn().click();
    }
    // Fill out the project field
    async fillProjectField(project: string) {
        await this.projectField().fill(project);
    }
    // Fill out the summary field
    async fillSummary(summary: string) {
        await this.summary().type(summary);
    }
    // Click on the create issue button
    async clickOnCreateIssueBtn() {
        await this.createIssueBtn().click();
    }
    // Click on the title when creating an issue
    async clickOnCreateIssueHeading() {
        await this.createIssueHeading().click();
    }
    // Click on the link after an issue is created
    async clickOnCreatedIssueLink() {
        await this.createdIssueLink().click();
    }
    // Get the text of the created issue link
    async getCreatedIssueText() {
        return await this.createdIssueLink().textContent();
    }
    // Return a boolean based on the modal window satus
    async isModalWindowDisplayed() {
        return await this.modalWindow().isVisible();
    }
    // Accept an alert
    async acceptAlert() {
        this.page.on("dialog", async (dialog) => {
            dialog.accept();
        })
    }
    // Click on the create issue cancel button
    async clickOnCreateIssueCancelBtn() {
        await this.createIssueCancelBtn().click();
    }
    // Return a boolean based on the summary field satus
    async isSummaryFieldEmpty() {
        return await this.page.getByText('You must specify a summary of the issue.').isVisible();
    }
    // Fill the issue type field
    async fillIssueTypeField(type: string) {
        await this.issueType().fill(type);
    }
    // Open an issue
    async openIssue(issue: string) {
        await this.page.goto(issue, { waitUntil: "networkidle" });
    }
    // This is a happy path test case for creating an issue
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