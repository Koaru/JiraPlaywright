import { test, expect } from "../fixtures/pomfixture";
import dotenv from 'dotenv'
dotenv.config()

const USERNAME: any = process.env.LOGINNAME;
const PASSWORD: any = process.env.PASSWORD;
const PROJECT = "Main Testing Project (MTP)";
const SUMMARY = "Test summary";
const TYPE = "Story";
const EDITED_SUMMARY = "Edited summary";

test.beforeEach(async ({ loginPage}) => {
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