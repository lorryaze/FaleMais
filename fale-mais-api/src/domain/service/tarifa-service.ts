import { TarifaRepository } from "../repositories/tarifaRepository";

export class TarifaService {
  constructor(private tarifaRepo: TarifaRepository) {
    //DIP - Depende de uma abstração ao invés de depender de uma implementação
  }

  /*create(origem: string, destino: string, valor: number) {
    const tarifa = new Tarifa(id, origem, destino, valor);
    this.tarifaRepo.insert(tarifa);
    return tarifa;
  }*/

  findTarifa(origem: string, destino: string) {
    const valorTarifa = this.tarifaRepo.find(origem, destino);
    return valorTarifa;
  }
}
