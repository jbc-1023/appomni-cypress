describe('Signup', () => {
  beforeEach(() => {
    cy.visit('signup.html');
  });

  /* Happy path testing signup */
  it('Submits the form without errors', { tags: ["smoke", "regression"] }, () => {
    const username = 'Black Widow';
    const password = "I will not be back in Avengers 5";
    const message_good = "Avengers Assemble!";

    cy.findByLabelText('Username:').type(username);
    cy.findByLabelText('Password:').type(password);
    cy.findByLabelText('Verify\ password:').type(password);
    cy.findByRole('button', { text: 'Submit' }).click();
    cy.get('.error').should('not.exist');
    cy.get('.error_message').should('not.exist');
    cy.contains(message_good).should('be.visible');
    cy.get('.success').should('exist');
  });

  /* Error handling */
  describe('Form validation displays an error when', () => {
    /* Empty username */
    it('The username is empty', { tags: ["error_handling", "regression"] }, () => {
      const dummy_password = "anything";
      const look_text = "User name can't be blank";
      const tag_name_attr = "username";

      cy.findByLabelText('Username:').type(" ");
      cy.findByLabelText('Password:').type(dummy_password);
      cy.findByLabelText('Verify\ password:').type(dummy_password);  
      cy.findByRole('button', { text: 'Submit' }).click();
      cy.findByText(look_text).should('have.class', 'error_message');
      cy.get(`input[name=${tag_name_attr}]`).should('have.class', 'error');
    });

    /* Password too short */
    it('The password is less than 10 characters', { tags: ["error_handling", "regression"] }, () => {
      const username = "Ant-Man";
      const short_password = "I'm tiny!";
      const look_text = "Password needs to be 10 characters or longer";
      const tag_name_attr = "password";

      cy.findByLabelText('Username:').type(username);
      cy.findByLabelText('Password:').type(short_password);
      cy.findByLabelText('Verify\ password:').type(short_password);  
      cy.findByRole('button', { text: 'Submit' }).click();
      cy.findByText(look_text).should('have.class', 'error_message');
      cy.get(`input[name=${tag_name_attr}]`).should('have.class', 'error');
    });
  });
});