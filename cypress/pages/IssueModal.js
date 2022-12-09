class IssueModal {
    constructor() {
        this.submitButton = 'button[type="submit"]';
        this.issueModal = '[data-testid="modal:issue-create"]';
        this.title = 'input[name="title"]';
        this.issueType = '[data-testid="select:type"]';
        this.iconStory = '[data-testid="icon:story"]';
        this.issueTypeStory = '[data-testid="select-option:Story"]';
        this.issueDescription = '.ql-editor';
        this.assignee = '[data-testid="select:userIds"]';
        this.assigneeLordGaben = '[data-testid="select-option:Lord Gaben"]';
        this.issuesList = '[data-testid="list-issue"]';
        this.issueBacklog = '[data-testid="board-list:backlog';
        this.trashIcon = '[data-testid="icon:trash"]';
        this.modalConfirm = '[data-testid="modal:confirm"]';
        this.iconClose = '[data-testid="icon:close"]';
        this.deleteButton = 'button'
        
    }

    getIssueModal() {
        return cy.get(this.issueModal);
    }

    selectIssueType(issueType) {
        cy.get(this.issueType).click('bottomRight');
        cy.get(`[data-testid="select-option:${issueType}"]`)
            .trigger('mouseover')
            .trigger('click');
    }

    selectAssignee(assigneeName) {
        cy.get(this.assignee).click('bottomRight');
        cy.get(`[data-testid="select-option:${assigneeName}"]`).click();
    }

    editTitle(title) {
        cy.get(this.title).type(title);
    }

    editDescription(description) {
        cy.get(this.descriptionField).type(description);
    }

    createIssue(issueDetails) {
        this.getIssueModal().within(() => {
            this.selectIssueType(issueDetails.type);
            this.editTitle(issueDetails.title);
            this.editDescription(issueDetails.description);
            this.selectAssignee(issueDetails.assignee);

            cy.get(this.submitButton).click();
        });
    }

    ensureIssueIsCreated(expectedAmountIssues, issueDetails) {
        cy.get(this.issueModal).should('not.exist');
        cy.contains('Issue has been successfully created.').should('not.exist');

        cy.get(this.backlogList).should('be.visible').and('have.length', '1').within(() => {
            cy.get(this.issuesList)
                .should('have.length', expectedAmountIssues)
                .first()
                .find('p')
                .contains(issueDetails.title);
            cy.get(`[data-testid="avatar:${issueDetails.assignee}"]`).should('be.visible');
        });
    }

    deleteIssue() {
        cy.contains('ws22 deleting issue').click();
        cy.get(this.trashIcon).click();
        cy.get(this.deleteButton).contains('Delete issue').click();
        cy.get(this.modalConfirm).should('not.exist');
        cy.contains('ws22 deleting issue').should('not.exist')
    }

    cancelDelete() {
        cy.contains('ws22 deleting issue').click();
        cy.get(this.trashIcon).click();
        cy.get(this.modalConfirm).contains('Cancel').click();
        cy.get(this.modalConfirm).should('not.exist');
        cy.get(this.iconClose).click();
        cy.contains('ws22 deleting issue').should('exist');
    }
}

export default new IssueModal();