import { describe, expect, test } from "@jest/globals";
import { ChamadaService } from "./chamadaService";

describe("Chamada Service Unit Test", () => {
  test("deve retornar o preço da chamada dado um plano", () => {
    const origem = "011";
    const destino = "016";
    const tempo = 20;
    const nomePlano = "FaleMais 30";

    const chamadaService = new ChamadaService();

    const retorno = chamadaService.precoPlano(
      origem,
      destino,
      tempo,
      nomePlano
    );

    expect(retorno).toBe(38.0);
  });
});
