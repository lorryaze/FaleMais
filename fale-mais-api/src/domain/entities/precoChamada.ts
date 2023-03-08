import { Chamada } from "./chamada";
import { Tarifa } from "./tarifa";

export class PrecoChamada {
  id: string;
  chamada: Chamada;
  tarifa: Tarifa;
  valor: number;

  constructor(id: string, chamada: Chamada, tarifa: Tarifa, valor: number) {
    this.id = id;
    this.chamada = chamada;
    this.tarifa = tarifa;
    this.valor = valor;
  }

  calcularValorChamada() {}
}
