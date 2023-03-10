import { Plano } from "../../domain/entities/plano";
import { PlanoRepository } from "../../domain/repositories/planoRepository";
import { planos } from "./tables/planos";

export class PlanoOrmRepository implements PlanoRepository {
  constructor() {}

  findByName(nome: string): number {
    const planoMinutes: Array<Plano> = planos.filter((x) => x.nome == nome);
    console.log({ planos, nome });
    return planoMinutes[0].minutos;
  }
}
