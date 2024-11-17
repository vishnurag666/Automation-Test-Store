class Remove_cart{
    remove_cart(){
        cy.get('[class="menu_text"]').contains('Cart').click({force:true});
        cy.xpath('(//i[@class="fa fa-trash-o fa-fw"])[1]').click();
    }
}
export default Remove_cart;