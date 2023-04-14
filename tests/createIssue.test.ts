import { test, expect } from "../fixtures/pomfixture";
import dotenv from 'dotenv'
dotenv.config()

const USERNAME: any = process.env.LOGINNAME;
const PASSWORD: any = process.env.PASSWORD;
const PROJECT = "Main Testing Project (MTP)";
const SUMMARY = "Test summary";
const TYPE = "Story";


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



