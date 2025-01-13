const revenue = require('./data.json')

function calculateDailyRevenue(revenue) {
  const daysWithRevenue = revenue.filter(day => day.valor > 0);
  const lowestValue = Math.min(...daysWithRevenue.map(day => day.valor));
  const highestValue = Math.max(...daysWithRevenue.map(day => day.valor));
  const total = daysWithRevenue.reduce((acc, day) => acc + day.valor, 0);
  const average = total / daysWithRevenue.length;
  const daysAboveAverage = daysWithRevenue.filter(day => day.valor > average).length;

  return { lowestValue, highestValue, daysAboveAverage };
}

const result = calculateDailyRevenue(revenue);

console.log("Menor valor de faturamento:", result.lowestValue.toFixed(2));
console.log("Maior valor de faturamento:", result.highestValue.toFixed(2));
console.log("Número de dias acima da média:", result.daysAboveAverage);
