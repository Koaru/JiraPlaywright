import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import dotenv from 'dotenv'
dotenv.config()

const USERNAME: any = process.env.LOGINNAME;
const PASSWORD: any = process.env.PASSWORD;
const INVALIDUSERNAME = "invalidusername";
const INVALIDPASSWORD = "invalidpassword";


test("Happy Path login", async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    await login.login(USERNAME, PASSWORD);
    await dashboard.clickOnProfile();
    await dashboard.clickOnViewProfile();
    let userName = await page.textContent("#up-d-username");
    expect(userName).toContain(USERNAME);
})


test("Invalid username", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(INVALIDUSERNAME, PASSWORD);
    expect(await login.errorMessageIsPresent()).toBeTruthy();
})

test("Invalid password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(USERNAME, INVALIDPASSWORD);
    expect(await login.errorMessageIsPresent()).toBeTruthy();
})