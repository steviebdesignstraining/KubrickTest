describe('Create a new account and Login successfully', () => {
    const uuid = () =>  Cypress._.random(0, 1e6);
    const email = `steviebdesigns1+${uuid()}@gmail.com`;
    const incorrectEmail = `steviebdesigns1+${uuid()}gmail.com`;
    const longEmail = 'contact-admin-hello-webmaster-info-services-peter-crazy-but-oh-so-ubber-cool-english-alphabet-loverer-abcdefghijklmnopqrstuvwxyz@please-try-to.send-me-an-email-if-you-can-possibly-begin-to-remember-this-coz.this-is-the-longest-email-address-known-to-man-but-to-be-honest.this-is-such-a-stupidly-long-sub-domain-it-could-go-on-forever.pacraig.com'
    const password = 'password';
    
    beforeEach(() => {
      cy.visit('index.php?controller=authentication&back=my-account');
      cy.clearCookies()
      cy.wait(1000)
    });
    it('Validate email field without an @ symbol', () => {
        //Sign in to create account
        cy.goToLoginPage()
        cy.get('#email_create').type(incorrectEmail)
        cy.get('#SubmitCreate').click()
        cy.wait(2000)
        cy.get('#create_account_error').should('be.visible')
        cy.get('#create_account_error').first().should('have.text', 'Invalid email address.');
      })
       it('Validate email field with long string', () => {
        //Sign in to create account
        cy.goToLoginPage()
        cy.get('#email_create').type(longEmail)
        cy.get('#SubmitCreate').click()
        cy.wait(2000)
      })
      
      it('Short password < than 5 characters', () => {
        //Sign in to create account
        cy.wait(2000)
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate').click()
        cy.incorrectPassword1()  
        cy.get('.alert').should('be.visible')
        cy.get('.alert').should('have.text', '\n\t\tThere is 1 error\n\t\t\n\t\t\t\t\tpasswd is invalid.\n\t\t\t\t\n\t\t\t');
      })

      it('Empty address field', () => {
        //Sign in to create account
        cy.wait(2000)
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate').click()
        cy.incorrectAddress()  
        cy.get('.alert').should('be.visible')
        cy.get('.alert').should('have.text', '\n\t\tThere is 1 error\n\t\t\n\t\t\t\t\taddress1 is required.\n\t\t\t\t\n\t\t\t');
      })

})