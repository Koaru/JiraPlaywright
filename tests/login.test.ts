import {test, expect} from "@playwright/test";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import ProfilePage from "../pages/profilePage";

const USERNAME = "automation40";
const PASSWORD = "CCAutoTest19.";

test("Happy Path login",async ({page}) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    const profilePage = new ProfilePage(page);
    await login.navigateToLoginPage();
    await login.enterUserName(USERNAME);
    await login.enterPassword(PASSWORD);
    await login.clickLogIn();
    await dashboard.clickOnProfile();
    await dashboard.clickOnViewProfile();
    let userName = await page.textContent("#up-d-username");
    expect(userName).toContain(USERNAME);
})