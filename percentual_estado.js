const revenueByState = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

const totalRevenue = Object.values(revenueByState).reduce((acc, val) => acc + val, 0);

Object.entries(revenueByState).forEach(([state, revenue]) => {
  const percentage = (revenue * 100 / totalRevenue).toFixed(2);
  console.log(`${state}: ${percentage}%`);
});
