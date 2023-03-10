export interface PlanoRepository {
  findByName(nome: string): number;
}
