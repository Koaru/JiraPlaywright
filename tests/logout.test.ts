import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";

const USERNAME = "automation40";
const PASSWORD = "CCAutoTest19.";


test("Logout", async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    await login.login(USERNAME, PASSWORD);
    await dashboard.clickOnProfile();
    await dashboard.clickOnLogoutBtn();
    expect(dashboard.logoutMessageIsPresent).toBeTruthy;
})