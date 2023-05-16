class SignUp {
    navigateSignUpPage(){
        return cy.contains('Create an Account')
    }

    setFirstName(){
        return cy.get('#firstname')
    }

    setSecondName(){
        return cy.get('#lastname')
    }

    setCheckBox(){
        return cy.get('[type="checkbox"]')
    }

    setEmail(){
        return cy.get('#email_address')
    }

    setPassword(){
        return cy.get('#password')
    }

    confirmPassword(){
        return cy.get('[name="password_confirmation"]')
    }

    clickSignUpButton(){
        return cy.get('[title="Create an Account"]')
    }
}

export const MakeAccount = new SignUp()