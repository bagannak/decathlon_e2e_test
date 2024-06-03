
import * as loginPage from "../support/components/loginpage/loginPageLocators";
import * as homePage from "../support/components/homepage/homePageLocators";

describe('login',()=>{
    let data;
    before(()=>{
        cy.fixture('credentials').then((userData)=>{
            data=userData;
        })
    })

    beforeEach(() => {
        homePage.navigateToLoginPage();
      });
    
    it('verify login with valid credentials', ()=>{

        cy.login(Cypress.env('email'),Cypress.env('password'));
        homePage.getTitle().should("eq", "Account – ul-web-playground");
    })

    it('verify login with invalid credentials', ()=>{
            cy.login(data.inValidCredentials.email,data.inValidCredentials.password)
            cy.getErrorMessageTag().should('be.visible');
    })

    it('verify try to login with empty username and password',()=>{
        cy.login(' ',' ');
        loginPage.getErrorMessageTag().should('be.visible');
    })
})