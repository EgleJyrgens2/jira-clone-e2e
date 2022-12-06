import IssueModal from "../../pages/IssueModal";

describe('Issue create', () => {
  beforeEach(() => {
      cy.visit('https://jira.ivorreic.com/project/');
      cy.intercept('GET', '**/currentUser').as('currentUserApiRequest')
      cy.url().should('eq', 'https://jira.ivorreic.com/project/').then((url) => {
          cy.wait('@currentUserApiRequest')
          IssueModal.createIssue('TITLE', 'DESCRIPTION');
      });
  });

});