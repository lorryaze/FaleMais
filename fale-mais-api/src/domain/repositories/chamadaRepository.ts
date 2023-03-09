export interface ChamadaRepository {
  calculate(valuePerMin: number, tempo: number, plano: string): number;
}
