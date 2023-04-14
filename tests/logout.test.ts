import { test, expect } from "../fixtures/pomfixture";
import dotenv from 'dotenv'
dotenv.config()

const USERNAME: any = process.env.LOGINNAME;
const PASSWORD: any = process.env.PASSWORD;


test("Logout", async ({ loginPage, dashboardPage }) => {
    await loginPage.login(USERNAME, PASSWORD);
    await dashboardPage.clickOnProfile();
    await dashboardPage.clickOnLogoutBtn();
    expect(dashboardPage.logoutMessageIsPresent).toBeTruthy;
})