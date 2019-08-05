
describe('My first test', function(){
    it('Visits a web page', function(){
        cy.visit('https://google.co.uk');
        cy.location('href').should('equal', 'https://www.google.co.uk/');
        cy.get('.gLFyf').type('Example search query');
        cy.get('.aajZCb > .VlcLAe > center > .gNO89b').click();
        cy.location('href').should('contain', 'https://www.google.co.uk/search?');
    })
});