import { Plano } from "./plano";

export class Chamada {
  id: string;
  origem: string;
  destino: string;
  tempo: number;
  plano: Plano;

  constructor(
    id: string,
    origem: string,
    destino: string,
    tempo: number,
    plano: Plano
  ) {
    this.id = id;
    this.origem = origem;
    this.destino = destino;
    this.tempo = tempo;
    this.plano = plano;
  }
}
