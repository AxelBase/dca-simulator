export function calculateDCA(params) {
  const { amount, frequency, periods, initialPrice, annualGrowth } = params;
  const periodsPerYear = frequency === 'weekly' ? 52 : 12;

  let totalInvested = 0;
  let totalUnits = 0;
  const periodDetails = [];

  for (let period = 1; period <= periods; period++) {
    const growthFactor = (annualGrowth / 100) * (period / periodsPerYear);
    const currentPrice = initialPrice * (1 + growthFactor);
    const unitsBought = amount / currentPrice;

    totalInvested += amount;
    totalUnits += unitsBought;

    periodDetails.push({
      period,
      price: currentPrice.toFixed(2),
      units: unitsBought.toFixed(4),
      invested: amount.toFixed(2)
    });
  }

  const averageCost = (totalInvested / totalUnits).toFixed(2);
  const finalGrowthFactor = (annualGrowth / 100) * (periods / periodsPerYear);
  const finalPrice = (initialPrice * (1 + finalGrowthFactor)).toFixed(2);
  const finalValue = (totalUnits * parseFloat(finalPrice)).toFixed(2);

  return {
    summary: {
      totalInvested: totalInvested.toFixed(2),
      totalUnits: totalUnits.toFixed(4),
      averageCost,
      finalPrice,
      finalValue
    },
    periodDetails
  };
}