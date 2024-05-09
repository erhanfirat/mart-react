describe("Counter Tests", () => {
  it("initial value tests", () => {
    cy.visit("http://localhost:3000/");

    cy.get("#c-50 .counter").should("have.text", "50");
    cy.get("#c-100 .counter").should("have.text", "100");
    cy.get("#c-0 .counter").should("have.text", "0");
  });

  it("Toggle Theme button", () => {
    // Arrange
    cy.visit("http://localhost:3000/");

    // Act
    cy.contains("Toggle Theme").click();

    // Assertion
    cy.get("#toggle-theme").should("have.text", "Switch Light Theme");
  });
});
