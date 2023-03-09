import { describe, expect, test } from "@jest/globals";
import { Chamada } from "./chamada";
import { Plano } from "./plano";
import { Tarifa } from "./Tarifa";

describe("Chamada Unit Test", () => {
  test("should create a chamada object", () => {
    const tarifa = new Tarifa("1", "011", "016", 1.9);
    const plano = new Plano("1", "FaleMais 30", 30);
    //const chamada = new Chamada("1", "011", "016", tarifa, 20, )
    expect(tarifa.id).toBe("1");
    expect(tarifa.origem).toBe("011");
    expect(tarifa.destino).toBe("016");
    expect(tarifa.valor).toBe(1.9);
  });
  test("should return getValor", () => {
    const tarifa = new Tarifa("1", "011", "016", 1.9);
    expect(tarifa.getValor()).toBe(1.9);
  });
});
