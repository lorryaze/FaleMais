import { PlanoOrmRepository } from "../../infra/database/planoOrm";
import { TarifaOrmRepository } from "../../infra/database/tarifaOrm";
import { PlanoService } from "./planoService";
import { TarifaService } from "./tarifaService";

export class ChamadaService {
  constructor() {}

  calcularPreco(minutos: number, tempo: number, valorPorMin: number) {
    const precoSemPlano = valorPorMin * tempo;
    let precoComPlano = 0;

    if (tempo > minutos) {
      const minutosExcedentes = tempo - minutos;
      const percentual = valorPorMin + valorPorMin * 0.1;
      precoComPlano = percentual * minutosExcedentes;
    }

    return [precoSemPlano, precoComPlano];
  }

  precoPlano(
    origem: string,
    destino: string,
    tempo: number,
    nomePlano: string
  ) {
    const tarifaService = new TarifaService(new TarifaOrmRepository());
    const valorPorMin = tarifaService.buscarTarifa(origem, destino);
    const planoService = new PlanoService(new PlanoOrmRepository());
    const minutos = planoService.buscarMinutosPlano(nomePlano);
    const valor = this.calcularPreco(minutos, tempo, valorPorMin);

    if (valorPorMin == 0) {
      const tarifaInexistente = ["-", "-"];
      return tarifaInexistente;
    }

    return valor;
  }
}
