describe('template spec', () => {
  beforeEach(()=>{
    cy.viewport("macbook-15")
  })

  it('passes', () => {
    cy.visit('http://localhost:5173')
  })
})