import { ChamadaService } from "../domain/service/chamadaService";
import express from "express";

export const getPrecoChamada = (
  req: express.Request,
  res: express.Response
) => {
  const chamadaService = new ChamadaService();

  const retorno = chamadaService.precoPlano(
    String(req.query?.origem),
    String(req.query?.destino),
    Number(req.query?.tempo),
    String(req.query?.plano)
  );

  res.send(JSON.stringify({ resultado: retorno }));
};
