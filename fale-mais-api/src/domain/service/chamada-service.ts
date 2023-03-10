import { PlanoOrmRepository } from "../../infra/database/plano-orm";
import { TarifaOrmRepository } from "../../infra/database/tarifa-orm";
import { PlanoService } from "./plano-service";
import { TarifaService } from "./tarifa-service";

export class ChamadaService {
  constructor() {}

  calculatePrice(minutes: number, time: number, valuePerMin: number) {
    const priceWithoutPlan = valuePerMin * time;
    let priceWithPlan = 0;

    if (time > minutes) {
      const rest = time - minutes;
      const percent = valuePerMin + valuePerMin * 0.1;
      priceWithPlan = percent * rest;
    }

    return [priceWithoutPlan, priceWithPlan];
  }

  priceByPlan(
    origem: string,
    destino: string,
    time: number,
    planoName: string
  ) {
    const tarifaService = new TarifaService(new TarifaOrmRepository());
    const valuePerMin = tarifaService.findTarifa(origem, destino);
    const planoService = new PlanoService(new PlanoOrmRepository());

    const minutos = planoService.findPlanoMinutes(planoName);
    const valor = this.calculatePrice(minutos, time, valuePerMin);
    return valor;
  }
}
