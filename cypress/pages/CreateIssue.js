class CreateIssue {
    constructor() {
        this.submitButton = 'button[type="submit"]';
        this.issueModal = '[data-testid="modal:issue-create"]';
        this.title = 'input[name="title"]';
        this.issueType = '[data-testid="select:type"]';
        this.descriptionField = '.ql-editor';
        this.assignee = '[data-testid="select:userIds"]';
        this.backlogList = '[data-testid="board-list:backlog"]';
        this.issuesList = '[data-testid="list-issue"]';
    }


createIssue(issueDetails) {
    this.getIssueModal().within(() => {

        cy.get(this.submitButton).click();
    });
}
}
export default new CreateIssue();