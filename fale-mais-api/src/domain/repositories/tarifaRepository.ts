export interface TarifaRepository {
  find(origem: string, destino: string): number;
}
