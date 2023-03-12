import { describe, expect, test } from "@jest/globals";
import { Chamada } from "./chamada";
import { Plano } from "./plano";

describe("Chamada Unit Test", () => {
  test("deve instanciar um objeto da entidade chamada", () => {
    const plano = new Plano("1", "FaleMais 30", 30);
    const chamada = new Chamada("1", "011", "016", 20, plano);
    expect(chamada.id).toBe("1");
    expect(chamada.origem).toBe("011");
    expect(chamada.destino).toBe("016");
    expect(chamada.plano).toBe(plano);
  });
});
