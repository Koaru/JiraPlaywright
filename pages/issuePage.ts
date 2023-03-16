import { Page } from "@playwright/test";

export default class IssuePage{

    constructor(public page: Page){}

    async getIssueKey(){
        return await this.page.textContent("#key-val");
    }

    async clickOnMoreBtn(){
        await this.page.click("#opsbar-operations_more");
    }

    async clickOnDeleteBtn(){
        await this.page.click("#delete-issue");
    }

    async clickOnDeleteIssueBtn(){
        await this.page.click("#delete-issue-submit");
        
    }

    async deleteIssue(){
        await this.clickOnMoreBtn();
        await this.clickOnDeleteBtn();
        await this.clickOnDeleteIssueBtn();
    }

}