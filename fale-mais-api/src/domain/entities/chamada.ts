import { Plano } from "./plano";
import { Tarifa } from "./tarifa";

export class Chamada {
  id: string;
  origem: string;
  destino: string;
  //tarifa: Tarifa;
  tempo: number;
  //plano: Plano;
  nomePlano: string;

  constructor(
    id: string,
    origem: string,
    destino: string,
    //tarifa: Tarifa,
    tempo: number,
    nomePlano: string
  ) {
    this.id = id;
    this.origem = origem;
    this.destino = destino;
    //this.tarifa = tarifa;
    this.tempo = tempo;
    this.nomePlano = nomePlano;
  }

  getOrigem() {
    return this.origem;
  }
  getDestino() {
    return this.destino;
  }
  /*getTarifa() {
    return this.tarifa.getValor();
  }*/
  getTempo() {
    return this.tempo;
  }
  getNomePlano() {
    return this.nomePlano;
  }
}
