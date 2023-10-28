describe('Demo  App Test', () => {
  
  it('Start page successfully loads', () => {
    cy.visit('/')
  })

  it('Login page successfully loads', () => {
    cy.visit('/login')
  })

  it('Login functionality works', () => {
    const testUser = 'ebkjlvkmfv@xalardhf.wo';
    const testPass = '9qvX3NJm';
    const wrongLoginMessage = 'These credentials do not match our records';
    cy.visit('/login');
    cy.get('input[name=email]').type(testUser);
    cy.get('input[name=password]').type(`${testPass}{enter}`);  
    cy.get('strong').should('contain', wrongLoginMessage);
  })

})

