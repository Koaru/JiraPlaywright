import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import IssuePage from "../pages/issuePage";

const USERNAME = "automation40";
const PASSWORD = "CCAutoTest19.";
const PROJECT = "Main Testing Project (MTP)";
const SUMMARY = "Test summary";
const TYPE = "Story";
const EDITED_SUMMARY = "Edited summary";

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(USERNAME, PASSWORD);
});


test.describe("Edit issue test suit", async () => {

    test("Edit issue", async ({ page }) => {
        const dashboard = new DashboardPage(page);
        const issue = new IssuePage(page);
        await dashboard.createIssue(SUMMARY, PROJECT, TYPE);
        await dashboard.clickOnCreatedIssueLink();
        await issue.clickOnEditBtn();
        await issue.fillSummary(EDITED_SUMMARY);
        await issue.clickOnUpdateBtn();
        await expect(async () => {
            const actualResult = await issue.getSummary();
            expect(actualResult).toBe(EDITED_SUMMARY);
        }).toPass();
        await issue.deleteIssue();
    });

    test("Edit issue with empty summary", async ({ page }) => {
        const dashboard = new DashboardPage(page);
        const issue = new IssuePage(page);
        await dashboard.createIssue(SUMMARY, PROJECT, TYPE);
        await dashboard.clickOnCreatedIssueLink();
        await issue.clickOnEditBtn();
        await issue.fillSummary("");
        await issue.clickOnUpdateBtn();
        await expect(async () => {
            expect(await dashboard.isSummaryFieldEmpty()).toBeTruthy();
        }).toPass();

    });
});