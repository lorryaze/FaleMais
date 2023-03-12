import { Router } from "express";
import { TarifaService } from "../domain/service/tarifaService";
import { TarifaOrmRepository } from "../infra/database/tarifaOrm";
import { PlanoOrmRepository } from "../infra/database/planoOrm";
import { PlanoService } from "../domain/service/planoService";
import { ChamadaService } from "../domain/service/chamadaService";
export const router = Router();

router.get("/", (req, res) => res.send("Api fale mais"));
router.get("/tarifa", (req, res) => {
  const tarifaService = new TarifaService(new TarifaOrmRepository());
  const retorno = tarifaService.buscarTarifa("011", "016");
  res.send(`Valor da minha tarifa dado uma origem e um destino: ${retorno}`);
});

router.get("/plano", (req, res) => {
  const planoService = new PlanoService(new PlanoOrmRepository());
  const retorno = planoService.buscarMinutosPlano("FaleMais 60");
  res.send(`Minutos do meu plano: ${retorno}`);
});

router.get("/chamada", (req, res) => {
  const chamadaService = new ChamadaService();

  const retorno = chamadaService.precoPlano(
    String(req.query?.origem),
    String(req.query?.destino),
    Number(req.query?.tempo),
    String(req.query?.plano)
  );
  console.log(retorno);

  res.send(JSON.stringify({ resultado: retorno }));
});
