import { Chamada } from "./chamada";

export class PrecoChamada {
  id: string;
  chamada: Chamada;
  valor: number;

  constructor(id: string, chamada: Chamada, valor: number) {
    this.id = id;
    this.chamada = chamada;
    this.valor = valor;
  }

  calcularValorChamada() {}
}
