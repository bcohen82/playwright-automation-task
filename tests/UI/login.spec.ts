import { test } from '@playwright/test'
import { UserProfile } from '../../Pages/components/UserProfile'
import { LoginPage } from '../../Pages/LoginPage'

test.describe.parallel('Positive scenario', () => {
    let loginPage: LoginPage
    let userProfile: UserProfile
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        userProfile = new UserProfile(page)
        await loginPage.gotoTrelloLoginPage()
    })
    test('Verify login to Trello @positiveTest', async ({ page }) => {
        await loginPage.login('automaton.user@gmail.com', 'automation12345')
        await loginPage.verifyLoginSuccess()
    })

    test('Logout from Trello @positiveTest', async ({ page }) => {
        await loginPage.login('automaton.user@gmail.com', 'automation1234')
        await userProfile.logout()
        await userProfile.verifyLogoutSuccess()
    })

    test('verify login failed with incorrect email @negativeTest', async ({ page }) => {
        await loginPage.login('invalid@gmail.com', 'automation1234')
        await loginPage.assertErrorMessage()
    })
})

    
