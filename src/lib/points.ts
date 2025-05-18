export interface MatchData {
  barriersRemoved: number;
  bioUnits1: number;
  bioUnits2: number;
  bioUnits3: number;
  coopertitionBonus: boolean;
  hangLevels: [number, number, number];
}

function calculateRegionalProtectionMultiplier(hangLevels: [number, number, number]): number {
  if (hangLevels.length !== 3) {
    throw new Error("Exactly 3 robot hang levels are required for a regional alliance.");
  }

  return hangLevels.reduce((sum, level) => sum + level, 0);
}

function calculateDistributionFactor(a: number, b: number, c: number, k = 1) {
  const mean = (a + b + c) / 3;
  const variance = ((a - mean) ** 2 + (b - mean) ** 2 + (c - mean) ** 2) / 3;
  const stdDev = Math.sqrt(variance);

  return k / (1 + stdDev);
}

const COOPERTITION_BONUS = 20

export function calculatePoints(md: MatchData): number {
  return (
    (md.barriersRemoved +
      (md.bioUnits1 + md.bioUnits2 + md.bioUnits3) *
        calculateDistributionFactor(md.bioUnits1, md.bioUnits2, md.bioUnits3)) *
      calculateRegionalProtectionMultiplier(md.hangLevels) +
    (md.coopertitionBonus ? COOPERTITION_BONUS : 0)
  );
}
