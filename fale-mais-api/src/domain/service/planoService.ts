import { PlanoRepository } from "../repositories/planoRepository";

export class PlanoService {
  constructor(private planoRepo: PlanoRepository) {
    //DIP - Depende de uma abstração ao invés de depender de uma implementação
  }

  buscarMinutosPlano(nome: string) {
    const minutes = this.planoRepo.buscarPlanoNome(nome);
    return minutes;
  }
}
