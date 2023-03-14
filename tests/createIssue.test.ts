import {test, Page, expect} from "@playwright/test";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import IssuePage from "../pages/issuePage";

const USERNAME = "automation40";
const PASSWORD = "CCAutoTest19.";
const PROJECT = "Main Testing Project (MTP)";
const SUMMARY = "Test summary";



test.beforeEach(async ( {page} ) => {
    const login = new LoginPage(page);
    await login.login(USERNAME,PASSWORD);
  });


test.describe("Create issue test suit", async () => {
    test("Create issue", async ({ page }) => {
        const dashboard = new DashboardPage(page);
        const issue = new IssuePage(page);
        await dashboard.clickOnCreateBtn();
        await page.waitForSelector("#create-issue-submit");
        await page.waitForLoadState("networkidle");
        await page.pause();
        await dashboard.fillProjectField(PROJECT);
        await dashboard.clickOnCreateIssueHeading();
        await dashboard.fillSummary(SUMMARY);
        await dashboard.clickOnCreateIssueBtn();
        const issueKey = await dashboard.getCreatedIssueText();
        await dashboard.clickOnCreatedIssueLink();
        const expectedResult = await issue.getIssueKey() + " - " + SUMMARY;
        expect(issueKey).toBe(expectedResult);
        await issue.deleteIssue();
    })
})



