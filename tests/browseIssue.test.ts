import { test, expect } from "../fixtures/pomfixture";
import dotenv from 'dotenv'
dotenv.config()

// Valid username from the .env file
const USERNAME: any = process.env.LOGINNAME;
// Valid password from the .env file
const PASSWORD: any = process.env.PASSWORD;
// Expected summary 
const EXPECTED_RESULT = "Test summary";


// Open the page and log in before every test
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