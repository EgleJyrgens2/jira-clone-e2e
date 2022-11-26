class EditIssueModal {
    constructor () {
        this.EditIssueModal = '[data-testid="modal:issue-details"]'
        this.issueType = '[data-testid="select:type"]';
        this.status = '[data-testid="select:status"]';
        this.assignee = '[data-testid="select:assignees"]';
        this.reporter = '[data-testid="select:reporter"]';
        this.priority = '[data-testid="select:priority"]'
    }

    getEditIssueModal() {
        return cy.get(this.EditissueModal);
    }

    selectIssueType(issueType) {
        cy.get(this.issueType).click('bottomRight')
    }

}