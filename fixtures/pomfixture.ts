import { test as baseTest } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import IssuePage from "../pages/issuePage";
import ProfilePage from "../pages/profilePage";

type pages = {
    loginPage : LoginPage;
    dashboardPage : DashboardPage;
    issuePage : IssuePage;
    profilePage : ProfilePage;
}

const testPages = baseTest.extend<pages>({
    loginPage : async({ page }, use) => {
        await use (new LoginPage(page)); 
    },
    dashboardPage : async({ page }, use) => {
        await use (new DashboardPage(page)); 
    },
    issuePage : async({ page }, use) => {
        await use (new IssuePage(page)); 
    },
    profilePage : async({ page }, use) => {
        await use (new ProfilePage(page)); 
    },
})

export const test = testPages;
export const expect = testPages.expect;