import { test, expect } from "../fixtures/pomfixture";
import dotenv from 'dotenv'
dotenv.config()

const USERNAME: any = process.env.LOGINNAME;
const PASSWORD: any = process.env.PASSWORD;
const INVALIDUSERNAME = "invalidusername";
const INVALIDPASSWORD = "invalidpassword";


test("Happy Path login", async ({ page, loginPage, dashboardPage }) => {
    await loginPage.login(USERNAME, PASSWORD);
    await dashboardPage.clickOnProfile();
    await dashboardPage.clickOnViewProfile();
    let userName = await page.textContent("#up-d-username");
    expect(userName).toContain(USERNAME);
})


test("Invalid username", async ({ loginPage }) => {
    await loginPage.login(INVALIDUSERNAME, PASSWORD);
    expect(await loginPage.errorMessageIsPresent()).toBeTruthy();
})

test("Invalid password", async ({ loginPage }) => {
    await loginPage.login(USERNAME, INVALIDPASSWORD);
    expect(await loginPage.errorMessageIsPresent()).toBeTruthy();
})