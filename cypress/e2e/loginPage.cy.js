
import LoginPage from "../screens/loginPage";
import HomePage from "../screens/homePage";

import credential from "../testdata/credentials.json"
describe('Login Page',()=>{
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const validEmail = credential.validCredentials.email;
    const validPassword = credential.validCredentials.password;
    const invalidEamil = credential.inValidCredentials.email;
    const invalidPassword = credential.inValidCredentials.password;

    
    beforeEach(() => {
        cy.visit("https://web-playground.ultralesson.com/");
        homePage.navigateToLoginPage();
      });
    
    it('verify login with valid credentials', ()=>{
        loginPage.login(validEmail,validPassword)
        homePage.getTitle().should("eq", "Account – ul-web-playground");
    })

    it('verify login with invalid credentials', ()=>{
        loginPage.login(invalidEamil,invalidPassword)
        loginPage.getErrorMessageTag().should('be.visible');
    })

    it('verify try to login with empty username and password',()=>{
        loginPage.login(' ',' ');
        loginPage.getErrorMessageTag().should('be.visible');
    })
})