import { Router } from "express";
import { TarifaService } from "../domain/service/tarifa-service";
import { TarifaOrmRepository } from "../infra/database/tarifa-orm";
import { PlanoOrmRepository } from "../infra/database/plano-orm";
import { PlanoService } from "../domain/service/plano-service";
export const router = Router();

router.get("/", (req, res) => res.send("Api fale mais"));
router.get("/tarifa", (req, res) => {
  const tarifaService = new TarifaService(new TarifaOrmRepository());
  const retorno = tarifaService.findTarifa("011", "016");
  res.send(`Valor da minha tarifa dado uma origem e um destino: ${retorno}`);
});

router.get("/plano", (req, res) => {
  const planoService = new PlanoService(new PlanoOrmRepository());
  const retorno = planoService.findPlanoMinutes("FaleMais 60");
  res.send(`Minutos do meu plano: ${retorno}`);
});
