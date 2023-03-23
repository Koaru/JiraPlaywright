import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import dotenv from 'dotenv'
dotenv.config()

const USERNAME: any = process.env.LOGINNAME;
const PASSWORD: any = process.env.PASSWORD;


test("Logout", async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    await login.login(USERNAME, PASSWORD);
    await dashboard.clickOnProfile();
    await dashboard.clickOnLogoutBtn();
    expect(dashboard.logoutMessageIsPresent).toBeTruthy;
})