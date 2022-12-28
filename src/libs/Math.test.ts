import { Math } from "./Math";

describe("Testing Math Library", () => {
  it("should sum two numbers correctly", () => {
    const response = Math.sum(5, 10);

    expect(response).toBe(15);
  });

  it("shoult subtract two numbers correcly", () => {
    const response = Math.sub(4, 2);
    expect(response).toBe(2);
  });

  it("should multiply two numbers correctly", () => {
    const response = Math.mut(3, 5);
    expect(response).toBe(15);
  });

  it("should divide two numbers correctly", () => {
    const response = Math.div(15, 5);
    expect(response).toBe(3);

    const response2 = Math.div(3, 0);
    expect(response2).toBe(false);
  });
});

it("contar quantos caracteres tem na string", () => {
  const response = {
    name: "Sandro",
    email: "sandro.brito@hotmail.com",
  };

  expect(response).toHaveProperty("name");
});

it("se possui a propriedade EMAIL", () => {
  const response = "sandro.brito@gft.com";

  expect(response).toMatch(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i);
});

it.only("Verificar se minha resposta deu um erro", () => {
  const response = Math.div(10, 0);

  expect(response).toThrow(new Error("Não divide por zero"));
});
