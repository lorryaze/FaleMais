import { Tarifa } from "../../domain/entities/tarifa";
import { ChamadaRepository } from "../../domain/repositories/chamadaRepository";

export class ChamadaOrmRepository implements ChamadaRepository {
  constructor() {}
  /*insert(tarifa: Tarifa): Promise<void> {
    tarifas.push({ ...tarifa });
    return Promise.resolve();
  }*/

  calculate(valuePerMin: number, tempo: number, plano: string): number {
    if (plano == "") {
      const price = valuePerMin * tempo;
      return price;
    }
  }
}
