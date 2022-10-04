import { expect, Locator, Page } from "@playwright/test";
import * as data from "../config/data.json"
export class LoginPage {
    // Define selectors
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitLoginBtn: Locator
    readonly errorMessage: Locator
    readonly allBoards: Locator

    // Init selectors using constructor
    constructor(page: Page) {
        this.page = page
        this.usernameInput = page.locator('#user')
        this.passwordInput = page.locator('#password')
        this.submitLoginBtn = page.locator(`//input[@id='login'] | //button[@id='login-submit']`)
        this.errorMessage = page.locator('#error')
        this.allBoards = page.locator('.all-boards')
    }
    // Define login page methods
    async gotoTrelloLoginPage() {
        await this.page.goto(data.UI.trelloLoginUrl)
    }

    async login(username: string, password: string) {
        await this.usernameInput.type(username)
        await this.submitLoginBtn.click()
        await this.passwordInput.waitFor({state: "visible"})
        await this.passwordInput.type(password)
        await this.submitLoginBtn.click()
    }

    async assertErrorMessage() {
        await this.errorMessage.waitFor({state: "visible"})
        await expect(this.errorMessage).toContainText(`You don't have a Trello account. Would you like to create one using your `)
    }

    async verifyLoginSuccess() {
        await this.allBoards.waitFor({state: "visible"})
        await expect(this.allBoards).toBeVisible()
    }
}