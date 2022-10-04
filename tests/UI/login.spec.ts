import { test } from '@playwright/test'
import { UserProfile } from '../../Pages/components/UserProfile'
import { LoginPage } from '../../Pages/LoginPage'
import * as data from "../../config/data.json"


test.describe.parallel('Positive scenario', () => {
    let loginPage: LoginPage
    let userProfile: UserProfile
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        userProfile = new UserProfile(page)
        await loginPage.gotoTrelloLoginPage()
    })
    test('Verify login to Trello @positiveTest', async ({ page }) => {
        await loginPage.login(data.UI.trelloUserEmail, data.UI.trelloPassword)
        await loginPage.verifyLoginSuccess()
    })

    test('Logout from Trello @positiveTest', async ({ page }) => {
        await loginPage.login(data.UI.trelloUserEmail, data.UI.trelloPassword)
        await userProfile.logout()
        await userProfile.verifyLogoutSuccess()
    })

    test('verify login failed with incorrect email @negativeTest', async ({ page }) => {
        await loginPage.login(data.UI.invalidEmail, data.UI.trelloPassword)
        await loginPage.assertErrorMessage()
    })
})

    
