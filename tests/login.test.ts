import { test, expect } from "../fixtures/pomfixture";
import dotenv from 'dotenv'
dotenv.config()

// Valid username from the .env file
const USERNAME: any = process.env.LOGINNAME;
// Valid password from the .env file
const PASSWORD: any = process.env.PASSWORD;
// Test data for the username
const INVALIDUSERNAME = "invalidusername";
// Test data for the password
const INVALIDPASSWORD = "invalidpassword";


test.describe("Login test cases", async () => {
    
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
    
})


