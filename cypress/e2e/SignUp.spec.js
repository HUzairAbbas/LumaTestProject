import { MakeAccount } from "../Pages/SignUp"
describe("In this spec we will sign up Into the applocation", ()=>{
    it('User Signs Up', ()=>{
        cy.visit('/')
        MakeAccount.navigateSignUpPage().click()
        MakeAccount.setFirstName().type('Uzair')
        MakeAccount.setSecondName().type('Abbas')
        MakeAccount.setCheckBox().check()
        MakeAccount.setEmail().type('malik.uzair.cs@gmail.com')
        MakeAccount.setPassword().type('12bn34nm56m,78,.')
        MakeAccount.confirmPassword().type('12bn34nm56m,78,.')
        MakeAccount.clickSignUpButton().click()
    })
})