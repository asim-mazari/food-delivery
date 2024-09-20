describe('Restaurant Page Tests', () => {
    it('should load the restaurant page and display restaurant list', () => {
      cy.visit('/restaurants');
      cy.contains('Restaurants').should('exist');
      cy.get('.restaurant-card').should('have.length.greaterThan', 0);
    });

    it('should filter restaurants based on search input', () => {
      cy.visit('/restaurants');
      cy.get('input[placeholder="Search restaurants"]').type('Pizza');
      cy.contains('Pizza Place').should('exist');
    });

    it('should navigate to the restaurant details page', () => {
      cy.visit('/restaurants');
      cy.get('.restaurant-card').first().click();
      cy.url().should('include', '/restaurant/');
      cy.contains('Restaurant Details').should('exist');
    });
  });
  