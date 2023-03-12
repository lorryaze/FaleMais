export interface TarifaRepository {
  buscarTarifa(origem: string, destino: string): number;
}
