class Price{
    price_changePound(){
       
        cy.get('[class="dropdown-menu currency"]').contains('£ Pound Sterling').click({force:true});
    }
    price_changeEuro(){
        cy.get('[class="dropdown-menu currency"]').contains('€ Euro').click({force:true});
    }
    price_changeDollar(){
        cy.get('[class="dropdown-menu currency"]').contains('$ US Dollar').click({force:true});
    }
}
export default Price;