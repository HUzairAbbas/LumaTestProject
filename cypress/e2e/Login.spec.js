import { SignIn } from "../Pages/Login"
describe("In this spec we will login Into the applocation", ()=>{
    it('User logins', ()=>{
        cy.visit('/')
        SignIn.navigateSignInPage().click()
        SignIn.usernameInput().type('roni_cost@example.com')
        SignIn.passwordInput().type('roni_cost3@example.com')
        SignIn.clickSignIn().click()
    })
})