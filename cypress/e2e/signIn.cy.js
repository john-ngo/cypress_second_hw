/// <reference types="cypress" />

describe('Second homework', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('Home page', () => {        
        cy.get('h2').should('contain.text', 'Login Page');
    });

    it('Login', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.contains('.radius', 'Login').click();

        cy.get('#flash').should('contain.text', 'You logged into a secure area!');
        cy.get('h2').should('contain.text', 'Secure Area');
        cy.url().should('include', '/secure');
    });

    it('Incorrect user', () => {
        cy.get('#username').type('tomsmith1');
        cy.get('#password').type('SuperSecretPassword!');
        cy.contains('.radius', 'Login').click();

        cy.get('#flash').should('contain.text', 'Your username is invalid!');
        cy.url().should('include', '/login');
    });

    it('Logout', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.contains('.radius', 'Login').click();

        cy.get('.button').click();

        cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
        cy.url().should('include', '/login');
    });
});