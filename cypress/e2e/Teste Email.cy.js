describe('US 00587 - Cadastro pesquisa', () => {

  beforeEach('Visita',()=>{
    cy.visit('/')
  })

  it('CT001 - teste e-mail', () => {
    cy.get('h2')
      .should('contain', "Catterina Vittorazzi Salvador")
  
    cy.get(':nth-child(1) > .col > .card > a.ng-tns-c2007924471-1 > .card-content')
      .should('be.visible')
  })

  it.skip('passes', () => {
    cy.get(':nth-child(1) > .col > .card > a.ng-tns-c2007924471-1 > .card-content').click()
    cy.quantidade504Caracteres()
  })
})