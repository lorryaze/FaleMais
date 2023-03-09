import { Chamada } from "../entities/chamada";

export class ChamadaService {
  //constructor(private chamadaRepo: ChamadaRepository) {}

  obterCustoChamada(
    origem: string,
    destino: string,
    tempo: number,
    nomePlano: string
  ) {
    const chamada = new Chamada("123", origem, destino, tempo, nomePlano);
    //const custo = this.chamadaRepo.calcularCustoChamada(chamada);
    //return custo;
  }
}
