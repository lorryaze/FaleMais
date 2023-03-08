import { describe, expect, test } from "@jest/globals";
import { Tarifa } from "./Tarifa";

describe("Tarifa Unit Test", () => {
  test("should create a tarifa object", () => {
    const tarifa = new Tarifa("1", "011", "016", 1.9);
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
