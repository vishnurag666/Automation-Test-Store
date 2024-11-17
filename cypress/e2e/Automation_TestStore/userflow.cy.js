import Addtocart from "../../support/webclasses/AddCart.cy";
import login from "../../support/webclasses/login.cy";
import Logout from "../../support/webclasses/logout.cy";
import Price from "../../support/webclasses/PriceChange.cy";
import Purchase from "../../support/webclasses/purchase.cy";
import Register from "../../support/webclasses/register.cy";
import Remove_cart from "../../support/webclasses/remove_cart.cy";

describe('Automation Test Store', () => {
    const log = new login();
    const logout=new Logout();
    const register=new Register();
    const purchase=new Purchase();
    const price=new Price();
    const addcart=new Addtocart();
    const removeCart=new Remove_cart();


    it('User login and logout', () => {
        log.Url_login();
       log.login_withValidCredentials();
        logout.logout();
    });


    it('Purchasing product', () => {
        log.Url_login();
       log.login_withValidCredentials();
       purchase.purchase_whiteShirt();
    });

    it('dropdown', () => {
        log.Url_login();
        log.login_withValidCredentials();
        price.price_changeEuro();
    });

    it.only('Adding and removing from Cart', () => {
        log.Url_login();
        log.login_withValidCredentials();
        addcart.Addtocart();
        removeCart.remove_cart();
    });
 


});