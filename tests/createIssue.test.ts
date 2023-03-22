import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import IssuePage from "../pages/issuePage";

const USERNAME = "automation40";
const PASSWORD = "CCAutoTest19.";
const PROJECT = "Main Testing Project (MTP)";
const SUMMARY = "Test summary";
const TYPE = "Story";


test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(USERNAME, PASSWORD);
});


test.describe("Create issue test suit", async () => {


    test("Create issue", async ({ page }) => {
        const dashboard = new DashboardPage(page);
        const issue = new IssuePage(page);
        await dashboard.createIssue(SUMMARY, PROJECT, TYPE);
        const issueKey = await dashboard.getCreatedIssueText();
        await dashboard.clickOnCreatedIssueLink();
        const expectedResult = await issue.getIssueKey() + " - " + SUMMARY;
        expect(issueKey).toBe(expectedResult);
        await issue.deleteIssue();
    });


    test("Cancel issue create", async ({ page }) => {
        const dashboard = new DashboardPage(page);
        await dashboard.clickOnCreateBtn();
        await dashboard.fillProjectField(PROJECT);
        await dashboard.clickOnCreateIssueHeading();
        await dashboard.clickOnCreateIssueCancelBtn();
    });


    test("Create issue with empty summary", async ({ page }) => {
        const dashboard = new DashboardPage(page);
        await dashboard.clickOnCreateBtn();
        await dashboard.clickOnCreateIssueBtn();
        await expect(async () => {
            expect(await dashboard.isSummaryFieldEmpty()).toBeTruthy();
        }).toPass();
    });
})



