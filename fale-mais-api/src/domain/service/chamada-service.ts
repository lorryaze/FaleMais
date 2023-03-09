import { TarifaOrmRepository } from "../../infra/database/tarifa-orm";
import { ChamadaRepository } from "../repositories/chamadaRepository";
import { TarifaService } from "./tarifa-service";

export class ChamadaService {
  constructor(private chamadaRepo: ChamadaRepository) {
    //DIP - Depende de uma abstração ao invés de depender de uma implementação
  }

  calculatePrice(
    origem: string,
    destino: string,
    tempo: number,
    plano: string
  ) {
    const tarifaService = new TarifaService(new TarifaOrmRepository());
    const valuePerMin = tarifaService.findTarifa(origem, destino);
    const chamadaPrice = this.chamadaRepo.calculate(valuePerMin, tempo, plano);
    return chamadaPrice;
  }
}
