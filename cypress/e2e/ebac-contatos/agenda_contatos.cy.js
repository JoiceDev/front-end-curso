describe("Agenda de Contatos", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/");
    });

    it("Deve adicionar um novo contato", () => {
        // Seleciona o formulário e preenche os campos
        cy.get('form').within(() => {
            cy.get('input[placeholder="Nome"]').type("Novo Contato");
            cy.get('input[placeholder="E-mail"]').type("novo@contato.com");
            cy.get('input[placeholder="Telefone"]').type("123456789");
            cy.get('button').contains(/Adicionar/i).click(); // Clica no botão "Adicionar"
        });

        // Verifica se o contato foi adicionado na lista
        cy.contains("Novo Contato").should("exist");
    });

    it("Deve editar um contato existente", () => {
        // Aguarda o contato estar visível antes de interagir
        cy.contains("Novo Contato").should("exist");

        // Localiza o contato pelo nome e clica no botão "Editar"
        cy.contains("Novo Contato").parents(".contato").within(() => {
            cy.get('button.edit').click();
        });

        // Edita o telefone do contato
        cy.get('form').within(() => {
            cy.get('input[placeholder="Telefone"]').clear().type("987654321");
            cy.get('button').contains(/Salvar|Atualizar/i).click();
        });

        // Verifica se o número foi atualizado
        cy.contains("Novo Contato").parents(".contato").within(() => {
            cy.contains("987654321").should("exist");
        });
    });

    it("Deve remover um contato", () => {
        // Aguarda até que o contato "gian Souza" esteja presente na página
        cy.contains("Felice Lacerda").should("exist").then(() => {
                // Localiza o contato pelo nome e clica no botão "Deletar"
                cy.contains("Felice Lacerda").parents(".contato").find("button.delete")
                    .should("be.visible")  // Verifica se o botão está visível
                    .click();              // Clica no botão "Deletar"
            });
    
        // Verifica se o contato foi removido
        cy.contains("Felice Lacerda").should("not.exist");
    });
    
    });