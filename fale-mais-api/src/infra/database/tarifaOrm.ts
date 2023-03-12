import { Tarifa } from "../../domain/entities/tarifa";
import { TarifaRepository } from "../../domain/repositories/tarifaRepository";
import { tarifas } from "./tables/tarifas";

export class TarifaOrmRepository implements TarifaRepository {
  constructor() {}
  buscarTarifa(origem: string, destino: string): number {
    const valorTarifa: Array<Tarifa> = tarifas.filter(
      (item) => item.origem == origem && item.destino == destino
    );
    return valorTarifa[0].valor;
  }
}
