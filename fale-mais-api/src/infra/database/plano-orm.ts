import { Plano } from "../../domain/entities/plano";
import { PlanoRepository } from "../../domain/repositories/planoRepository";
import { planos } from "./tables/planos";

export class PlanoOrmRepository implements PlanoRepository {
  constructor() {}

  find(nome: string): number {
    const planoMinutes: Array<Plano> = planos.filter((x) => x.nome == nome);
    return planoMinutes[0].minutos;
  }
}
