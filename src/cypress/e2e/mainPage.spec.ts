describe('Main Page Tests', () => {
    it('should load the main page', () => {
      cy.visit('/'); 
      cy.contains('Welcome to Food Delivery').should('exist');
    });
  
    it('should navigate to the restaurant page', () => {
      cy.visit('/');  
  
      cy.contains('Browse Restaurants').click();
      cy.url().should('include', '/restaurants');
      cy.contains('Restaurants').should('exist');
    });
  });
  