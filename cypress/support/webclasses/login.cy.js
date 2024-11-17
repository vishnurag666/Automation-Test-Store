class login{
    Url_login(){
        cy.visit('https://automationteststore.com/');
    }
    login_withValidCredentials(){
        cy.contains('Login or register').click();
        cy.get('#loginFrm_loginname').type('Tester0001');
        cy.get('#loginFrm_password').type('Tester123456');
        cy.get('[title="Login"]').click();
    }
    login_withInvalidCredentials(){
        cy.contains('Login or register').click();
        cy.get('#loginFrm_loginname').type('T');
        cy.get('#loginFrm_password').type('123456');
        cy.get('[title="Login"]').click();
       
    }
}
export default login;