import { TarifaRepository } from "../repositories/tarifaRepository";

export class TarifaService {
  constructor(private tarifaRepo: TarifaRepository) {
    //DIP - Depende de uma abstração ao invés de depender de uma implementação
  }

  buscarTarifa(origem: string, destino: string) {
    const tarifa = this.tarifaRepo.buscarTarifa(origem, destino);
    return tarifa;
  }
}
