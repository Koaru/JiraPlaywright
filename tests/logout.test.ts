import { test, expect } from "../fixtures/pomfixture";
import dotenv from 'dotenv'
dotenv.config()

// Valid username from the .env file
const USERNAME: any = process.env.LOGINNAME;
// Valid password from the .env file
const PASSWORD: any = process.env.PASSWORD;


test.describe("Logout test cases", async () => {

    test("Logout", async ({ loginPage, dashboardPage }) => {
        await loginPage.login(USERNAME, PASSWORD);
        await dashboardPage.clickOnProfile();
        await dashboardPage.clickOnLogoutBtn();
        expect(dashboardPage.logoutMessageIsPresent).toBeTruthy;
    })

})

