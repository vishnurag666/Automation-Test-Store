class Purchase{
    purchase_whiteShirt(){
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click();
        cy.xpath('(//img[@src="//automationteststore.com/image/thumbnails/18/79/t_shirt_3_jpg-100243-250x250.jpg"])[1]').click();
        cy.get('[class="fa fa-cart-plus fa-fw"]').click();
        cy.get('#cart_checkout1').click();
        cy.get('[title="Confirm Order"]').click();
    }
}
export default Purchase;