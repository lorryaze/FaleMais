import { PlanoRepository } from "../repositories/planoRepository";

export class PlanoService {
  constructor(private planoRepo: PlanoRepository) {
    //DIP - Depende de uma abstração ao invés de depender de uma implementação
  }

  findPlanoMinutes(nome: string) {
    const minutes = this.planoRepo.findByName(nome);
    return minutes;
  }
}
