export class Plano {
  id: string;
  nome: string;
  minutos: number;

  constructor(id: string, nome: string, minutos: number) {
    this.id = id;
    this.nome = nome;
    this.minutos = minutos;
  }
}
