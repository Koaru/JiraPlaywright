import { test, expect } from "../fixtures/pomfixture";
import dotenv from 'dotenv'
dotenv.config()

const USERNAME: any = process.env.LOGINNAME;
const PASSWORD: any = process.env.PASSWORD;
const EXPECTED_RESULT = "Test summary";


test.beforeEach(async ({ loginPage }) => {
    await loginPage.login(USERNAME, PASSWORD);
});

test.describe("Browse issue test suite", async () => {

    test("Browse issue", async ({ page, dashboardPage, issuePage }) => {
        await (await page.waitForSelector("#header-details-user-fullname")).isVisible();
        await dashboardPage.openIssue("https://jira-auto.codecool.metastage.net/browse/MTP-3546");
        await expect(async () => {
            const actualResult = await issuePage.getSummary();
            expect(actualResult).toEqual(EXPECTED_RESULT);
        }).toPass();
    })

})