import { describe, expect, test } from "@jest/globals";
import { PlanoOrmRepository } from "../../infra/database/planoOrm";
import { PlanoService } from "./planoService";

describe("Plano Service Unit Test", () => {
  test("deve retornar uma tarifa dado uma origem e um destino", () => {
    const nome = "Fale Mais 30";
    const minutos = 30;

    const planoService = new PlanoService(new PlanoOrmRepository());

    const retorno = planoService.buscarMinutosPlano(nome);

    expect(retorno).toBe(minutos);
  });
});
