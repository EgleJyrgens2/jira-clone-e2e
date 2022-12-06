import CreateIssue from "../pages/CreateIssue";

describe('Issue create', () => {
    beforeEach(() => {
      cy.visit('https://jira.ivorreic.com/project/');
      cy.intercept('GET','**/currentUser').as('currentUserApiRequest')
      cy.url().should('eq', 'https://jira.ivorreic.com/project/').then((url) => {
        cy.wait('@currentUserApiRequest')
       // cy.visit(url + '/settings?modal-issue-create=true');
      });
    });
  
    it('Creating a task must fail', () => {
        cy.get('[data-testid="icon:plus"]').click();
        cy.get('[data-testid="modal:issue-create"]').should("be.visible");
        cy.get('[type="submit"]').click();
        cy.get('[data-testid="form-field:title"]').should("contain",'This field is required');
    });

    it('Cancel createing a task', () => {
        cy.get('[data-testid="icon:plus"]').click();
        cy.get('[data-testid="modal:issue-create"]').should("be.visible");
        cy.get('.sc-iGrrsa > .jYbwSu').click()
        cy.get('[data-testid="modal:issue-create"]').should('not.exist');
        cy.contains('Issue has been successfully created.').should('not.exist');
    });
  });



