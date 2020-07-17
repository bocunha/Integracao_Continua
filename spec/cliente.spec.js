const Cliente = require('../models/cliente');

test('Testando se o modelo cliente tem a propriedade nome', () => {
  let cliente = new Cliente();
  cliente.nome = "bruno";

  expect(cliente.nome).not.toBeUndefined();
});

test('Testando se o modelo cliente tem a propriedade CPF', () => {
    let cliente = new Cliente();
    cliente.cpf = "12345678912";

    expect(cliente.cpf).not.toBeUndefined();
  });

  test('Testando se no modelo cliente o CPF tem 12 digitos', () => {
    let cliente = new Cliente();
    cliente.cpf = "357.873.468-31";

    expect(cliente.cpf).toMatch(/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/);
  });

  test('Testando se no modelo cliente o CPF e valido com ponto', () => {
    let cliente = new Cliente();
    cliente.cpf = "357.873.468-31";

    expect(cliente.validateCPF()).toBe(true);
  });

  test('Testando se no modelo cliente o CPF e valido sem ponto', () => {
    let cliente = new Cliente();
    cliente.cpf = "35787346831";

    expect(cliente.validateCPF()).toBe(true);
  });