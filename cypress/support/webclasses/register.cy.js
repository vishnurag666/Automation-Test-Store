class Register{
    register(){
        cy.contains('Login or register').click();
        cy.get('[title="Continue"]').click();
        cy.get('#AccountFrm_firstname').type('AutomationTester');
        cy.get('#AccountFrm_lastname').type('XYZ');
        cy.get('#AccountFrm_email').type('abc@sample.com');
        cy.get('#AccountFrm_company').type('AutomationXYZ');
        cy.get('#AccountFrm_address_1').type('Kasargod,Kerala');
        cy.get('#AccountFrm_city').type('Kasargod');
        cy.get('#AccountFrm_postcode').type('542565');
        cy.get('#AccountFrm_country_id').select('United Kingdom');
        cy.get('[name="zone_id"]').select('Angus');
        cy.get('#AccountFrm_loginname').type('Tester0001');
        cy.get('#AccountFrm_password').type('Tester123456');
        cy.get('#AccountFrm_confirm').type('Tester123456');
        cy.get('#AccountFrm_newsletter1').click();
        cy.get('#AccountFrm_agree').check();
        cy.get('[title="Continue"]').click();
    }
}
export default Register;