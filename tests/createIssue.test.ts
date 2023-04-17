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


// Open the page and log in before every test
test.beforeEach(async ({ loginPage }) => {
    await loginPage.login(USERNAME, PASSWORD);
});


test.describe("Create issue test suit", async () => {


    test("Create issue", async ({ dashboardPage, issuePage }) => {
        await dashboardPage.createIssue(SUMMARY, PROJECT, TYPE);
        const issueKey = await dashboardPage.getCreatedIssueText();
        await dashboardPage.clickOnCreatedIssueLink();
        const expectedResult = await issuePage.getIssueKey() + " - " + SUMMARY;
        expect(issueKey).toBe(expectedResult);
        await issuePage.deleteIssue();
    });


    test("Cancel issue create", async ({ dashboardPage }) => {
        await dashboardPage.clickOnCreateBtn();
        await dashboardPage.fillProjectField(PROJECT);
        await dashboardPage.clickOnCreateIssueHeading();
        await dashboardPage.clickOnCreateIssueCancelBtn();
    });


    test("Create issue with empty summary", async ({ dashboardPage }) => {
        await dashboardPage.clickOnCreateBtn();
        await dashboardPage.clickOnCreateIssueBtn();
        await expect(async () => {
            expect(await dashboardPage.isSummaryFieldEmpty()).toBeTruthy();
        }).toPass();
    });
})



