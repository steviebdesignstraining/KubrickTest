Cypress.Commands.add('fillAccountForm', () => {
   cy.wait(4000)
    cy.get('#id_gender1').click()
    cy.get('#customer_firstname').click().type('James')
    cy.get('#customer_lastname').click().type('Brown')
    const password = 'password'
    cy.get('#passwd').click().type(password)
    cy.get('#days').select('25')
    cy.get('#months').select('October')
    cy.get('#years').select('1985')
    cy.get('#newsletter').click()
    cy.get('#optin').click()
    cy.get('#id_state').select('Georgia')
    cy.get('#company').click().type('BennettProspects')
    cy.get('#address1').click().type('2727 Paces Ferry Rd')
    cy.get('#address2').click().type('SE Suite 750')
    cy.get('#city').click().type('Atlanta')
    cy.get('#postcode').click().type('30339')
    //cy.get('#id_country').select('United Kingdom')
    cy.get('#other').click().type('Not Applicable')
    cy.get('#phone').click().type('02012345678')
    cy.get('#phone_mobile').click().type('07791969230')
    cy.get('#alias').click().clear().type('2727 Paces Ferry Rd')
 });

 Cypress.Commands.add('incorrectPassword1', () => {
   cy.wait(4000)
   cy.get('#id_gender1').click()
   cy.get('#customer_firstname').click().type('James')
   cy.get('#customer_lastname').click().type('Brown')
   const shortPassword = 'blue'
   cy.get('#passwd').click().type(shortPassword)
   cy.get('#days').select('25')
   cy.get('#months').select('October')
   cy.get('#years').select('1985')
   cy.get('#newsletter').click()
   cy.get('#optin').click()
   cy.get('#id_state').select('Georgia')
   cy.get('#company').click().type('BennettProspects')
   cy.get('#address1').click().type('2727 Paces Ferry Rd')
   cy.get('#address2').click().type('SE Suite 750')
   cy.get('#city').click().type('Atlanta')
   cy.get('#postcode').click().type('30339')
   //cy.get('#id_country').select('United Kingdom')
   cy.get('#other').click().type('Not Applicable')
   cy.get('#phone').click().type('02012345678')
   cy.get('#phone_mobile').click().type('07791969230')
   cy.get('#alias').click().clear().type('2727 Paces Ferry Rd')
   cy.get('#submitAccount').click()
});

Cypress.Commands.add('incorrectAddress', () => {
   cy.wait(4000)
   cy.get('#id_gender1').click()
   cy.get('#customer_firstname').click().type('James')
   cy.get('#customer_lastname').click().type('Brown')
   const shortPassword = 'password'
   cy.get('#passwd').click().type(shortPassword)
   cy.get('#days').select('25')
   cy.get('#months').select('October')
   cy.get('#years').select('1985')
   cy.get('#newsletter').click()
   cy.get('#optin').click()
   cy.get('#id_state').select('Georgia')
   cy.get('#company').click().type('BennettProspects')
   cy.get('#address2').click().type('SE Suite 750')
   cy.get('#city').click().type('Atlanta')
   cy.get('#postcode').click().type('30339')
   cy.get('#other').click().type('Not Applicable')
   cy.get('#phone').click().type('02012345678')
   cy.get('#phone_mobile').click().type('07791969230')
   cy.get('#alias').click().clear().type('2727 Paces Ferry Rd')
   cy.get('#submitAccount').click()
});

 Cypress.Commands.add('goToLoginPage', () => {
    cy.get('.login').click()
    cy.get('.page-heading').first().should('have.text', 'Authentication');
 });

 Cypress.Commands.add('logout', () => {
    cy.get('.logout').click()
    cy.get('.page-heading').first().should('have.text', 'Authentication');
 });