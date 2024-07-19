describe("My first test suite", () => {
    it ("My first test case",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.title().should("eq","OrangeHRM")  //verify the title for positive


        //write test case
        //locator        
       // cy.get()  // available by default
       // cy.get("#id")  // find by id
       // cy.get(".className") // ind by class

        //xpath
       // cy.xpath("").click() // need to import xpath library //npm install -D cypress-xpath

        //locators from testing library  //npm install --save-dev cypress @testing-library/cypress


    })

    it ("My second test case",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.title().should("eq","OrangeHRM123")  // verify the title of negative
        

    })


})