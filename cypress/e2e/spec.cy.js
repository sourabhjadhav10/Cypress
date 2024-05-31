// describe is test suite in which we can have multiple it blocks
describe('Suite Name', () => {
  // it block is considered as one test case
  it('Test case one', () => {
    //script writing starts here
    cy.visit('https://mail.google.com/')
    cy.findByRole('textbox', {name: "Email or phone"}).type("sourabhjadhav2222@gmail.com")
    cy.findByRole('button', {name: "Next"}).click()
    
    
  })

  // it('Test case two', () => {
  //   cy.visit('www.google.com')
  // })

  // it('Test case three', () => {
  //   cy.visit('www.google.com')
  // })
})