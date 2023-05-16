class LoginPage {

    navigateSignInPage(){
        return cy.contains('Sign In')
    }

    usernameInput(){
        return cy.get('[id="email"]')
    }

    passwordInput(){
        return cy.get('[type="password"]')
    }

    clickSignIn(){
        return cy.get('#send2')
    }
}

export const SignIn = new LoginPage()