describe('CSSLocators',()=>{
    it('cssselector',()=>{
        cy.visit("https://www.amazon.in/s?k=login+amazon+account&adgrpid=59671903835&ext_vrnc=hi&hvadid=590652406969&hvdev=c&hvlocphy=9300160&hvnetw=g&hvqmt=e&hvrand=18267102249761618621&hvtargid=kwd-837441119212&hydadcr=24542_2265395&tag=googinhydr1-21&ref=pd_sl_2cwzc6x246_e")
        cy.get("#twotabsearchtextbox").clear()
        cy.get("#twotabsearchtextbox").type("T-Shirts{enter}")
        cy.get(".a-color-state a-text-bold").contains("T-Shirts")
    
       // cy.get("[type='submit']").click
    //    cy.get("#nav-search-submit-button").click(T-Shirts);




        
    })
})