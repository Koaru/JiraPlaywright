import { test, expect } from "../fixtures/pomfixture";
import dotenv from 'dotenv'
dotenv.config()

// Valid username from the .env file
const USERNAME: any = process.env.LOGINNAME;
// Valid password from the .env file
const PASSWORD: any = process.env.PASSWORD;
// Test data for the project 
const PROJECT = "Main Testing Project (MTP)";
// Test data for the summary
const SUMMARY = "Test summary";
// Test data for the type
const TYPE = "Story";
// Test data for the edited summary
const EDITED_SUMMARY = "Edited summary";


// Open the page and log in before every test
test.beforeEach(async ({ loginPage }) => {
    await loginPage.login(USERNAME, PASSWORD);
});


test.describe("Edit issue test suit", async () => {

    test("Edit issue", async ({ dashboardPage, issuePage }) => {
        await dashboardPage.createIssue(SUMMARY, PROJECT, TYPE);
        await dashboardPage.clickOnCreatedIssueLink();
        await issuePage.clickOnEditBtn();
        await issuePage.fillSummary(EDITED_SUMMARY);
        await issuePage.clickOnUpdateBtn();
        await expect(async () => {
            const actualResult = await issuePage.getSummary();
            expect(actualResult).toBe(EDITED_SUMMARY);
        }).toPass();
        await issuePage.deleteIssue();
    });

    test("Edit issue with empty summary", async ({ dashboardPage, issuePage }) => {
        await dashboardPage.createIssue(SUMMARY, PROJECT, TYPE);
        await dashboardPage.clickOnCreatedIssueLink();
        await issuePage.clickOnEditBtn();
        await issuePage.fillSummary("");
        await issuePage.clickOnUpdateBtn();
        await expect(async () => {
            expect(await dashboardPage.isSummaryFieldEmpty()).toBeTruthy();
        }).toPass();

    });
});