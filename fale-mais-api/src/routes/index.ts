import { Router } from "express";
import { TarifaService } from "../domain/service/tarifa-service";
import { TarifaOrmRepository } from "../infra/database/tarifa-orm";
export const router = Router();

router.get("/", (req, res) => res.send("Api fale mais"));
router.get("/tarifa", (req, res) => {
  const tarifaService = new TarifaService(new TarifaOrmRepository());
  const retorno = tarifaService.findTarifa("011", "016");
  res.send(`Valor da minha tarifa dado uma origem e um destino: ${retorno}`);
});
