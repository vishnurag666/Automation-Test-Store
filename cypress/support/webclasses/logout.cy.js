class Logout{
    logout(){
        cy.get('[data-original-title="Logoff"]').click();
    }
}
export default Logout;