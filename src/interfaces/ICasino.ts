export interface ICasino {
  fournirJetons(amount: number): void;
  echangedJetons(amount: number): void;
}