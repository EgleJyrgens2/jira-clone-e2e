import IssueModal from "../pages/IssueModal";

describe('Time tracking', () => {
    beforeEach(() => {
        cy.visit('https://jira.ivorreic.com/project/');
        cy.intercept('GET', '**/currentUser').as('currentUserApiRequest')
        cy.url().should('eq', 'https://jira.ivorreic.com/project/').then((url) => {
            cy.wait('@currentUserApiRequest')
        });
        cy.get('[data-testid="icon:plus"]').click();
        cy.wait(2000);
        cy.get('input[name="title"]').type('ws23 time tracking assigment');
        cy.get('button[type="submit"]').click()
    });
    

    it('User can add estimation to recently created issue', () => {
        //cy.get('[data-testid="board-list:backlog"] p').eq(0).click();
        cy.contains('ws23 time tracking assigment').click();
        cy.get
    });
});





//cy.get("div>input[placeholder='Number']").should('be.visible');
//cy.get("div>input[placeholder='Number']").should('have.value', '');
