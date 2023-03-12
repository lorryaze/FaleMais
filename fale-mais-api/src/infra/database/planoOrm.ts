import { Plano } from "../../domain/entities/plano";
import { PlanoRepository } from "../../domain/repositories/planoRepository";
import { planos } from "./tables/planos";

export class PlanoOrmRepository implements PlanoRepository {
  constructor() {}

  buscarPlanoNome(nome: string): number {
    const minutosPlano: Array<Plano> = planos.filter((x) => x.nome == nome);
    console.log({ planos, nome });
    return minutosPlano[0].minutos;
  }
}
