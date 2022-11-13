import DiceData from '../types/DiceData';

export interface DataSet {
  name: string;
  value: number;
}

const binomial = (n: number, k: number) => {
  let coeff = 1;
  for (let x = n - k + 1; x <= n; x++) coeff *= x;
  for (let x = 1; x <= k; x++) coeff /= x;
  return coeff;
};

const getVariations = (n: number, s: number, r: number): number => {
  let result = 0;
  for (let k = 0; k <= (r - n) / s; k++) {
    result += Math.pow(-1, k) * binomial(n, k) * binomial(r - s * k - 1, n - 1);
  }
  return result;
};

const diceDataToDataSet = (diceData: DiceData): DataSet[] => {
  const dataSet: DataSet[] = [];
  if (diceData.quantity && diceData.sides) {
    const min = diceData.quantity;
    const max = diceData.quantity * diceData.sides;
    for (let i = min; i <= max; i++) {
      dataSet.push({
        name: i.toString(),
        value: getVariations(diceData.quantity, diceData.sides, i),
      });
    }
  }

  return dataSet;
};

export default diceDataToDataSet;
