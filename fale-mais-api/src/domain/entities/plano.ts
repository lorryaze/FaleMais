export class Plano {
  id: string;
  nome: string;
  minutos: string;

  constructor(id: string, nome: string, minutos: string) {
    this.id = id;
    this.nome = nome;
    this.minutos = minutos;
  }

  getNomePlano() {
    return this.nome;
  }
  getMinutosPlano() {
    return this.minutos;
  }
}
