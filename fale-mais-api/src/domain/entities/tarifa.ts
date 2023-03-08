export class Tarifa {
  id: string;
  origem: string;
  destino: string;
  valor: number;

  constructor(id: string, origem: string, destino: string, valor: number) {
    this.id = id;
    this.origem = origem;
    this.destino = destino;
    this.valor = valor;
  }
  getOrigem() {
    return this.origem;
  }
  getDestino() {
    return this.destino;
  }
  getValor() {
    return this.valor;
  }
}
