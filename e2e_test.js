const loginPage = require("./pages/loginPage")

Feature("Zero Bank app - E2E test")

Before(({I})=>{
    console.log("BEFORE hook")
    I.amOnPage("http://zero.webappsecurity.com/")
})

After(({I})=>{
    console.log("AFTER hook")
})

Scenario ("Login Test - Negative",({I, loginPage})=>{
    I.click(loginPage.signInButton)
    loginPage.loginForm
    loginPage.submitLogin("invalid username","invalid password")
    loginPage.assertLoginFormIsVisible()

    I.seeElement(loginPage.errorMessage)
})