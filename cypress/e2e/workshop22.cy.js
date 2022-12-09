import IssueModal from "../pages/IssueModal";

describe('Deleting issue', () => {
  beforeEach(() => {
      cy.visit('https://jira.ivorreic.com/project/');
      cy.intercept('GET', '**/currentUser').as('currentUserApiRequest')
      cy.url().should('eq', 'https://jira.ivorreic.com/project/').then((url) => {
          cy.wait('@currentUserApiRequest')
      });
      createIssue(issueDetails)
      //cy.get('[data-testid="icon:plus"]').click();
      //cy.wait(2000);
      //cy.get('input[name="title"]').type('ws22 deleting issue');
      //cy.get('button[type="submit"]').click()
  });
    

     it('Delete recently created issue and confirm its deleted', () => {
      IssueModal.deleteIssue();
     });

     it('Start deletion process for recently created issue, but cancel it', () => {
      IssueModal.cancelDelete();
     });

  });