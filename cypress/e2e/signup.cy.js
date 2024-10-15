describe('Signup', () => {
  beforeEach(() => {
    cy.visit('signup.html');
  });

  it('submits the form without errors', () => {
    cy.findByLabelText('Username').type('sparkbox');
    cy.findByLabelText('Password').type('passwords-are-actually-really-cool');
    cy.findByRole('button', { text: 'Submit' }).click();
    cy.get('.error').should('not.exist');
    cy.get('.error_message').should('not.exist');
  });

  describe('form validation displays an error when', () => {
    xit('the username is empty', () => {
      cy.findByRole('button', { text: 'Submit' }).click();
      cy.findByText('enter a username').should('have.class', 'error_message');
      cy.get('input[name=username]').should('have.class', 'error');
    });

    xit('the password is less than 10 characters', () => {
      // add test commands
    });
  });
});
