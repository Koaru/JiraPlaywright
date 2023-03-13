import {test, expect} from "@playwright/test";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";

const USERNAME = "automation40";
const INVALIDUSERNAME = "invalidusername";
const PASSWORD = "CCAutoTest19.";
const INVALIDPASSWORD = "invalidpassword";


test("Happy Path login", async ({page}) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    await login.login(USERNAME,PASSWORD);
    await dashboard.clickOnProfile();
    await dashboard.clickOnViewProfile();
    let userName = await page.textContent("#up-d-username");
    expect(userName).toContain(USERNAME); 
})


test("Invalid username", async ({page}) => {
    const login = new LoginPage(page);
    await login.login(INVALIDUSERNAME,PASSWORD);
    console.log(login.errorMessageIsPresent);
    expect(login.errorMessageIsPresent).toBeTruthy();
})

test("Invalid password", async ({page}) => {
    const login = new LoginPage(page);
    await login.login(USERNAME,INVALIDPASSWORD);
    console.log(login.errorMessageIsPresent);
    expect(login.errorMessageIsPresent).toBeTruthy();
})