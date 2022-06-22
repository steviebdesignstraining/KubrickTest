describe('Create a new account and Login successfully', () => {
  const uuid = () =>  Cypress._.random(0, 1e6);
  const email = `steviebdesigns1+${uuid()}@gmail.com`;
  const password = 'password';
  beforeEach(() => {
    cy.visit('index.php');
    cy.clearCookies()
    // cy.wait(3000)
  });
  
  it('Create new account', () => {
    //Sign in to create account
    cy.goToLoginPage()
    cy.get('#email_create').type(email)
    cy.get('#SubmitCreate').click()
    cy.wait(1000)

    // Create an account by filling in form
   cy.fillAccountForm()
   cy.get('#submitAccount').click()
   
   
   // Created account
   cy.get('.page-heading').first().should('have.text', 'My account');
   cy.logout()
  })

  it('Sign into New Account', () => {
    cy.goToLoginPage()
    cy.get('#email').type(email)
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin').click()
  })
})