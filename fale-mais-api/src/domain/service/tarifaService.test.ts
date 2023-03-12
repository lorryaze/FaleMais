import { describe, expect, test } from "@jest/globals";
import { TarifaOrmRepository } from "../../infra/database/tarifaOrm";
import { TarifaService } from "./tarifaService";

describe("Tarifa Service Unit Test", () => {
  test("deve retornar uma tarifa dado uma origem e um destino", () => {
    const origem = "011";
    const destino = "016";
    const tarifa = 1.9;

    const tarifaService = new TarifaService(new TarifaOrmRepository());

    const retorno = tarifaService.buscarTarifa(origem, destino);

    expect(retorno).toBe(tarifa);
  });

  test("deve retornar vazio caso não encontre a tarifa", () => {
    const origem = "018";
    const destino = "017";
    const tarifa = 0;

    const tarifaService = new TarifaService(new TarifaOrmRepository());

    const retorno = tarifaService.buscarTarifa(origem, destino);

    expect(retorno).toBe(tarifa);
  });
});
