import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import IssuePage from "../pages/issuePage";

const USERNAME = "automation40";
const PASSWORD = "CCAutoTest19.";
const EXPECTED_RESULT = "Test summary";

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(USERNAME, PASSWORD);
});

test.describe("Browse issue test suite", async ()=> {

    test("Browse issue",async ( {page} ) => {
        const dashboard = new DashboardPage(page);
        const issue = new IssuePage(page);
        await (await page.waitForSelector("#header-details-user-fullname")).isVisible();
        await dashboard.openIssue("https://jira-auto.codecool.metastage.net/browse/MTP-3546");
        await expect(async () => {
            const actualResult = await issue.getSummary();
            expect(actualResult).toEqual(EXPECTED_RESULT);
        }).toPass();
    })
})