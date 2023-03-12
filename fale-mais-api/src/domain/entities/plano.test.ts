import { describe, expect, test } from "@jest/globals";
import { Plano } from "./plano";

describe("Plano Unit Test", () => {
  test("deve instanciar um objeto da entidade plano", () => {
    const plano = new Plano("1", "Fale Mais 30", 30);

    expect(plano.id).toBe("1");
    expect(plano.nome).toBe("Fale Mais 30");
    expect(plano.minutos).toBe(30);
  });
});
